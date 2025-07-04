import { create } from 'zustand';
import type { OperatorStore, FilterState } from '@/types/operator';
import { operatorService } from '@/services/operator-service';

const DEFAULT_FILTERS: FilterState = {
  searchQuery: '',
  domainFilter: 'all',
  sortBy: 'totalStaked',
  sortOrder: 'desc',
};

export const useOperatorStore = create<OperatorStore>((set, get) => ({
  // State
  operators: [],
  filteredOperators: [],
  loading: false,
  error: null,
  filters: DEFAULT_FILTERS,
  isInitialized: false,

  // Actions
  fetchOperators: async () => {
    const { loading } = get();

    // Prevent concurrent fetches
    if (loading) return;

    set({ loading: true, error: null, isInitialized: true });

    try {
      const opService = await operatorService('taurus');
      const operators = await opService.getAllOperators();
      set({ operators, loading: false });

      // Apply current filters
      get().applyFilters();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch operators';
      set({ loading: false, error: errorMessage });
    }
  },

  setFilters: (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...get().filters, ...newFilters };
    set({ filters: updatedFilters });
    get().applyFilters();
  },

  applyFilters: () => {
    const { operators, filters } = get();
    let filtered = [...operators];

    // Search filter
    if (filters.searchQuery.trim()) {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(
        op =>
          op.name.toLowerCase().includes(query) ||
          op.id.toLowerCase().includes(query) ||
          op.domainName.toLowerCase().includes(query),
      );
    }

    // Domain filter
    if (filters.domainFilter !== 'all') {
      filtered = filtered.filter(op => op.domainId === filters.domainFilter);
    }

    // Status filter
    if (filters.statusFilter && filters.statusFilter.length > 0) {
      filtered = filtered.filter(op => filters.statusFilter!.includes(op.status));
    }

    // Sorting
    filtered.sort((a, b) => {
      let aValue: number;
      let bValue: number;

      switch (filters.sortBy) {
        case 'totalStaked':
          aValue = parseFloat(a.totalStaked);
          bValue = parseFloat(b.totalStaked);
          break;
        case 'tax':
          aValue = a.nominationTax;
          bValue = b.nominationTax;
          break;
        default:
          return 0;
      }

      if (filters.sortOrder === 'asc') {
        return aValue - bValue;
      } else {
        return bValue - aValue;
      }
    });

    set({ filteredOperators: filtered });
  },

  refreshOperatorData: async (operatorId: string) => {
    try {
      void operatorId;
      await get().fetchOperators();
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Failed to refresh operator data';
      set({ error: errorMessage });
    }
  },

  clearError: () => {
    set({ error: null });
  },
}));

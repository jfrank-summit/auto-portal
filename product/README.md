# Staking Product Development

This directory contains all product development artifacts for the Autonomys staking application. The goal is to create a user-friendly interface that enables operators and nominators to seamlessly stake on Autonomys domains.

---

## 📋 Project Overview

### Vision

Enable operators and nominators to seamlessly stake on Autonomys domains with a friction-less, transparent experience that matches or exceeds Web2 financial apps.

### Success Metrics

- **Time-to-first-stake**: < 5 minutes from landing to submitted transaction
- **Transaction failure rate**: < 1% (30-day rolling window)
- **User satisfaction (SUS)**: ≥ 80 for operators and nominators at GA
- **Staked supply**: ≥ 30% of circulating tokens within 6 months

---

## 📁 Directory Structure

### Core Documents

- **`staking-prd.md`** - Complete Product Requirements Document with functional specs
- **`next-steps-operator-discovery.md`** - **[CURRENT]** Detailed implementation plan for operator marketplace
- **`wireframes.md`** - Screen layouts and user interface design patterns (markdown format)
- **`technical-architecture.md`** - Component structure, data flow, and implementation plan (functional programming)
- **`technical-specifications.md`** - Detailed calculations, business logic, and implementation decisions
- **`design-system.md`** - Visual design tokens, component specifications, and styling guidelines
- **`visual-mockups.md`** - High-fidelity screen designs with interactive preview links
- **`kickoff-workshop.md`** - Workshop notes with shared terminology and decisions
- **`mockups/`** - Interactive HTML previews and brand assets
  - `dashboard-preview.html` - Portfolio overview with metrics and active positions
  - `operator-discovery.html` - Browse and compare operators with filtering and search
  - `staking-flow.html` - Complete staking process with transaction breakdown
  - `withdrawal-flow.html` - Two-step withdrawal with cost basis tracking
  - `autonomys-logo-dark.svg` - Official Autonomys logo (dark version)
  - `autonomys-icon-dark.svg` - Official Autonomys icon (dark version)

### Research Resources

- **`resources/`** - Competitive analysis and protocol insights for reference
  - `polkadot-apps-analysis.md` - Current state pain points
  - `lido-ux-patterns.md` - Best-in-class simplicity patterns
  - `keplr-validator-selection.md` - Validator marketplace UX
  - `protocol-insights.md` - Technical constraints and opportunities

---

## 🎯 Target Users

### Primary Personas

- **Farmer Frank**: Active Autonomys farmers with earned AI3 tokens seeking yield
- **Token Holder Tina**: Exchange purchasers looking for passive income opportunities
- **Operator Oliver**: Domain operators needing simplified registration and nomination UX

### Core User Journeys

1. **Nominator Flow**: Connect → Browse Operators → Stake → Monitor Portfolio
2. **Withdrawal Flow**: Request Withdrawal → Wait for Epoch → Unlock Funds
3. **Portfolio Management**: Track positions, rewards, and transaction history

---

## 🚀 Development Phases

### ✅ Phase 1: Discovery & Requirements (Complete)

- [x] Stakeholder alignment and shared terminology
- [x] Competitive research (Polkadot Apps, Lido, Keplr)
- [x] Protocol deep-dive and constraint analysis
- [x] Complete PRD with functional requirements

### ✅ Phase 2: Design & Architecture (Complete)

- [x] User journey wireframes and screen layouts (markdown format)
- [x] Information architecture and navigation design
- [x] Technical architecture and component planning (functional programming)
- [x] Design system specification with tokens and components
- [x] Visual mockups for key screens with component integration
- [x] Performance and security considerations

### ✅ Phase 3: Technical Planning (Complete)

- [x] Project initialization with Vite + React + TypeScript
- [x] Component library setup (shadcn/ui + Tailwind CSS)
- [x] Design system implementation with CSS custom properties
- [x] Auto SDK integration and blockchain service layer
- [x] State management implementation (Zustand stores)
- [x] Development environment and tooling setup
- [x] Monorepo structure with shared packages and workspace configuration
- [x] Full TypeScript type system with comprehensive staking domain models
- [x] Development servers verified and working

### ✅ Phase 4: Implementation (Completed Core Features)

- [x] Core UI components and layout system (dashboard layout implemented)
- [x] Wallet connection and account management (completed)
- [x] **Operator discovery and comparison interface** (completed)
- [x] **✅ Wallet balance and position integration** (completed June 2025)
- [x] **✅ Staking flow implementation with real RPC data** (completed)
- [x] **✅ Withdrawal flow implementation** (completed)
- [ ] Portfolio analytics and advanced features ← **NEXT FOCUS**

**📋 Latest Milestone:** ✅ **Core Staking Platform Complete** - Full staking lifecycle implemented

### **✅ Recently Completed: Withdrawal Flow Implementation**

**Status:** ✅ **MERGED** - Complete two-step withdrawal flow with unlock functionality

**Key Features Delivered:**

- **Withdrawal Request Flow**: Real `withdrawStake` extrinsic submission with partial/full withdrawal support
- **Unlock Functionality**: `unlockFunds` extrinsic with block-based status checking
- **Smart Status Tracking**: Real-time withdrawal unlock eligibility based on domain blocks
- **Transaction Preview**: Clear breakdown showing stake withdrawal + storage fee refund
- **Position Integration**: Automatic refresh of pending operations and position data
- **UI/UX Excellence**: Withdrawal form modal, pending operations display, and unlock buttons

### **🎯 Core Platform Achievement**

**Complete Staking Lifecycle Implemented:**

- ✅ **Operator Discovery** - Browse and compare operators with real RPC data
- ✅ **Wallet Integration** - Connect wallet with balance display and address management
- ✅ **Staking Flow** - Real `nominateOperator` transactions with comprehensive validation
- ✅ **Position Tracking** - Live portfolio monitoring with pending operations
- ✅ **Withdrawal Flow** - Two-step `withdrawStake` and `unlockFunds` process
- ✅ **Real-time Updates** - Auto-refresh of balances, positions, and unlock status

### **✅ Recently Completed: Nominator Position Integration**

**Status:** ✅ **MERGED** - [PR #19](https://github.com/jfrank-summit/auto-portal/pull/19)

**Key Features Delivered:**

- **Real Position Data**: Dashboard now shows actual user staking positions via RPC.
- **Portfolio Summary**: New summary cards display total portfolio value and active position count.
- **Pending Operations**: UI tracks and displays pending deposits and withdrawals.
- **Auto-Refresh**: Portfolio data automatically updates every 30 seconds.

### **✅ Recently Completed: Wallet Balance Integration**

**Status:** ✅ **MERGED** - [PR #15](https://github.com/jfrank-summit/auto-portal/pull/15)

**Key Features Delivered:**

- **Real Balance Display**: Dashboard and staking form show actual wallet balance via RPC
- **Enhanced Wallet UX**: Copyable addresses, balance in wallet button, improved layout
- **Performance Optimized**: Consolidated RPC connections, auto-refresh efficiency
- **Unit Conversion**: Proper shannon-to-AI3 conversion with BigInt precision
- **Production Ready**: Full error handling, loading states, TypeScript compliance

### 🧪 Phase 5: Testing & Launch (Future)

- [ ] Unit and integration testing
- [ ] User acceptance testing with target personas
- [ ] Performance optimization and security audit
- [ ] Staging deployment and production launch

---

## 🔍 Key Insights

### Protocol Constraints

- **Two-step withdrawal**: Withdraw request → Unlock after locking period
- **Share-based rewards**: Operators use share pools rather than direct token rewards
- **Storage fund**: 20% of stake allocated to storage fund (refunded on withdrawal)
- **Epoch-based processing**: State changes processed at epoch boundaries

### UX Principles

- **Trust First**: Clear security indicators and transparent fee breakdowns
- **Progressive Disclosure**: Essential info first, details on demand
- **Efficiency**: Minimize clicks for core actions (stake, withdraw)

### Technical Decisions

- **Desktop-first**: Optimized for desktop browsers (mobile-responsive but not priority)
- **React + TypeScript**: Functional programming with strict type safety
- **Auto SDK**: Direct blockchain integration with Polkadot.js fallback
- **Zustand**: Lightweight state management for wallet and staking data (TBD)

---

## 📊 Success Tracking

### MVP Scope

- **Core Nomination Flow**: Browse operators, stake tokens, view portfolio
- **Withdrawal Process**: Two-step withdraw → unlock with clear status tracking
- **Operator Discovery**: Compare APY, tax rates, and operator details
- **Desktop Experience**: Optimized for desktop web browsers

### Post-MVP Features

- **Operator Registration Flow**: UI for domain operators to register
- **Advanced Analytics**: Historical yield charts and performance metrics
- **Batch Operations**: Multi-operator staking and bulk withdrawals
- **Governance Integration**: Voting with staked tokens

---

## 🛠 Next Steps

### Recently Completed

- **[Staking Flow Implementation](./user-stories/complete/staking-flow.md)**: ✅ **COMPLETE** - Real `nominateOperator` transaction submission with Auto SDK integration, comprehensive form validation, real-time transaction status, and automatic position refresh

### Next Phase Actions (Phase 5)

Current implementation-ready user stories (see [user-stories/](./user-stories/) for details):

1. **[Dashboard Analytics](./user-stories/dashboard-analytics.md)**: Historical data via indexer integration ← **NEXT PRIORITY**
2. **Advanced Portfolio Features**: Batch operations, performance analytics, and enhanced monitoring

---

## 📚 Resources

### Protocol Documentation

- [Staking Specification](https://github.com/subspace/protocol-specs/blob/main/docs/decex/staking.md)
- [Auto SDK Documentation](https://github.com/autonomys/auto-sdk)
- [Farming Overview](https://academy.autonomys.xyz/autonomys-network/consensus/proof-of-archival-storage/farming)

### Brand Resources

- [Autonomys Brand Kit](https://www.autonomys.xyz/brand-kit) - Official logos, colors, and typography

### Design References

- [Lido Finance](https://stake.lido.fi) - Simplicity and trust patterns
- [Keplr Wallet](https://wallet.keplr.app/chains/cosmos-hub) - Validator marketplace UX
- [Polkadot Apps](https://polkadot.js.org/apps/) - Current technical interface

---

_This product development is following an iterative approach with clear milestones and user-centered design principles._

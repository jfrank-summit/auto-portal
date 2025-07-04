import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { StakingCalculations } from '@/types/staking';
import { formatAI3Amount } from '@/lib/staking-utils';
import { InfoIcon } from 'lucide-react';
import { Tooltip } from '@/components/ui/tooltip';

interface TransactionPreviewProps {
  calculations: StakingCalculations;
  feeLoading?: boolean;
}

export const TransactionPreview: React.FC<TransactionPreviewProps> = ({
  calculations,
  feeLoading = false,
}) => {
  return (
    <div className="space-y-6">
      {/* Transaction Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-serif">Transaction Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground font-sans">Staking Portion</span>
            <span className="font-mono font-medium text-foreground">
              {formatAI3Amount(calculations.netStaking)} AI3
            </span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-1">
              <span className="text-sm text-muted-foreground font-sans">Storage Fund (20%)</span>
              <Tooltip
                content="20% of your stake is reserved as storage fees and refunded proportionally when you withdraw. Actual refund depends on storage fund performance."
                side="top"
              >
                <InfoIcon className="w-4 h-4 text-muted-foreground cursor-pointer" />
              </Tooltip>
            </div>
            <span className="font-mono font-medium text-foreground">
              {formatAI3Amount(calculations.storageFund)} AI3
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground font-sans">Transaction Fee</span>
            <span className="font-mono font-medium text-foreground">
              {feeLoading ? (
                <span className="animate-pulse text-muted-foreground">Estimating...</span>
              ) : (
                `${formatAI3Amount(calculations.transactionFee, 8)} AI3`
              )}
            </span>
          </div>
          <hr className="border-border" />
          <div className="flex justify-between items-center">
            <span className="font-sans font-semibold text-foreground">Total Required</span>
            <span className="font-mono font-bold text-foreground text-lg">
              {feeLoading ? (
                <span className="animate-pulse text-muted-foreground">Calculating...</span>
              ) : (
                `${formatAI3Amount(calculations.totalRequired)} AI3`
              )}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Expected Rewards */}
      {calculations.expectedRewards > 0 && (
        <Card className="bg-success-50 border-success-200">
          <CardContent className="pt-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-success-700 font-sans">Estimated Annual Rewards</p>
                <p className="text-xs text-success-600 font-sans mt-1">
                  Based on current staking configuration
                </p>
              </div>
              <p className="text-xl font-bold text-success-700 font-mono">
                ~{formatAI3Amount(calculations.expectedRewards)} AI3
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Important Notes */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-4">
          <h4 className="text-sm font-semibold text-primary font-sans mb-2">Important Notes</h4>
          <ul className="text-xs text-primary/80 space-y-1 font-sans">
            <li>• Storage fund (20%) is held by the protocol and refunded when you withdraw</li>
            <li>• Only the net staking amount (80%) earns rewards</li>
            <li>• Rewards are automatically compounded to your position</li>
            <li>• Stake will be active after next epoch transition (~10 minutes)</li>
            <li>• Your stake will appear as "Pending" until the epoch transition occurs</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

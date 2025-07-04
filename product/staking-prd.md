# Staking Product Requirements Document (PRD)

**Version:** 0.1 (Draft)  
**Last Updated:** <!-- YYYY-MM-DD -->  
**Status:** In Progress

---

## 1. Executive Summary

### 1.1 Purpose

Enable operators and nominators to seamlessly stake on Autonomys domains with a friction-less, transparent experience that matches or exceeds Web2 financial apps.

### 1.2 Success Metrics

- **Time-to-first-stake**: < 5 minutes from landing to submitted extrinsic
- **Transaction failure rate**: < 1% (30-day rolling window)
- **User satisfaction (SUS)**: ≥ 80 for operators and nominators at GA
- **Staked supply**: ≥ 30% of circulating tokens within 6 months

---

## 2. Problem Statement

### 2.1 Current State

- Staking is only possible through Polkadot Apps interface (poor UX)
- Complex multi-step withdrawal process (withdraw → unlock) is confusing
- Due to lazy evaluation, getting accurate current state of a user's staking position is difficult. (see https://github.com/subspace/protocol-specs/blob/main/docs/decex/staking.md)

### 2.2 Target Users

#### Primary Personas

**Farmer Frank**

- Actively farms on Autonomys Network using Space Acres
- Has earned AI3 tokens through farming rewards
- Needs: Simple way to put idle tokens to work, clear yield comparison
- Pain points: Complex Polkadot Apps interface, unclear operator selection

**Token Holder Tina**

- Purchased AI3 tokens from exchanges (Bybit, Gate.io, etc.)
- Seeking passive yield opportunities
- Needs: Transparent APY display, easy staking process, secure withdrawal
- Pain points: Confusing withdrawal process, technical terminology

**Operator Oliver**

- Runs domain infrastructure and operates validator nodes
- Has technical expertise but wants simplified staking UX for self-stake
- Needs: Easy operator registration, clear pool management, nomination visibility
- Pain points: Complex Polkadot Apps setup, unclear delegation tracking

**Note:** Operators are also nominators but have additional technical workflows for domain operation that are separate from the core nomination experience.

---

## 3. Product Goals & Requirements

### 3.1 Functional Requirements

#### 3.1.1 Operator Journey

- [ ] **Operator Registration**
  - Register as operator on specific domain
  - Set nomination tax rate and minimum nominator stake
  - Provide signing key and operator config
  - Automatic storage fund allocation (20% of stake)

- [ ] **Operator Management**
  - View total pool stake and nominator count
  - Monitor rewards and fee distribution
  - Update operator configuration
  - Deregister operator (with proper warnings)

#### 3.1.2 Nominator Journey

- [ ] **Staking Flow**
  - Browse and compare operators (APY, tax rate, uptime)
  - Stake to selected operator with amount validation
  - Automatic storage fund deduction (20%)
  - Transaction confirmation and status tracking

- [ ] **Portfolio Management**
  - View staked positions across operators
  - Monitor rewards accumulation (real-time + historical)
  - Add additional stake to existing positions

- [ ] **Withdrawal Flow**
  - **Step 1: Withdraw** - Request unstaking with share calculation
  - **Step 2: Unlock** - Claim tokens after locking period
  - Clear status indicators for withdrawal state
  - Storage fee refund calculation and display

#### 3.1.3 Shared Features

- [ ] **Dashboard & Analytics**
  - Portfolio overview (staked, pending, withdrawing)
  - Reward history and projections
  - Epoch countdown and status
  - Transaction history

- [ ] **Notifications & Alerts**
  - Epoch transitions
  - Withdrawal unlock availability
  - Slashing events
  - Operator configuration changes

### 3.2 Non-Functional Requirements

#### 3.2.1 Performance

- Page load time: < 2s P95 on desktop broadband
- Transaction signing: < 5s from click to wallet prompt
- Real-time data refresh: < 10s for critical updates

#### 3.2.2 Compatibility

- **Wallet Support**: SubWallet, Talisman, Polkadot.js extension
- **Responsive Design**: Desktop-first (mobile-responsive but not priority)
- **Browser Support**: Chrome, Firefox, Safari (last 2 versions)

#### 3.2.3 Technical Constraints

- Substrate RPC for on-chain data
- Indexer for necessary historical data (APY, nominator/operator actions, etc.)
- TypeScript + functional React architecture
- Yarn package management
- Auto SDK integration for consensus layer

---

## 4. User Journeys & Flows

### 4.1 Core User Journeys

#### A. Operator Onboarding & Bonding Stake

```
Landing → Connect Wallet → Operator Registration →
Configure Pool → Confirm Transaction → Pending State →
Active Operator (next epoch)
```

#### B. Nominator Selecting Operator & Staking

```
Landing → Connect Wallet → Browse Operators →
Select Operator → Enter Amount → Review Terms →
Confirm Transaction → Staking Confirmation → Portfolio View
```

#### C. Monitoring Positions

```
Portfolio Dashboard → View Rewards → Historical Analysis →
Compound/Withdraw Decision
```

#### D. Withdrawal & Exit Flow

```
Portfolio → Select Position → Withdraw Request →
Confirm Transaction → Pending Withdrawal →
Wait for Unlock Period → Unlock Funds →
Confirm Transaction → Completed
```

### 4.2 Edge Cases & Error Handling

- Insufficient balance for staking
- Network connectivity issues
- Wallet rejection/timeout
- Slashing events

---

## 5. Information Architecture

### 5.1 Site Map

```
/
├── /overview (dashboard)
├── /operators
│   ├── /operators/:id (operator details)
│   └── /operators/register
├── /portfolio
│   ├── /portfolio/stake (new staking flow)
│   └── /portfolio/withdraw
└── /transactions (history)
```

### 5.2 Key Data Objects

- **Operator**: ID, domain, stake, tax rate, status, uptime
- **Nomination**: amount, shares, operator, rewards, status
- **Withdrawal**: shares, unlock date, status, refund amount
- **Transaction**: hash, type, status, timestamp, amount

---

## 6. Technical Implementation

### 6.1 Required Extrinsics

- `register_operator(domain_id, operator_config, signing_key)`
- `nominate_operator(operator_id, amount)`
- `withdraw_stake(operator_id, withdrawal_type, amount)`
- `unlock_funds(operator_id)`
- `deregister_operator(operator_id)`

### 6.2 RPC Calls & Data Sources

- Operator registry and pool information
- Nominator positions and shares
- Epoch information and transitions
- Reward calculations and distributions
- Withdrawal status and unlock times

### 6.3 State Management

- Wallet connection state
- Transaction pending states
- Real-time balance updates
- Epoch countdown timers
- Withdrawal status and unlock times

---

## 7. Design Requirements

### 7.1 Visual Design Principles

- **Trust & Security**: Clear transaction flows, prominent security indicators
- **Clarity**: Simplified terminology, progressive disclosure
- **Efficiency**: Minimal clicks to complete core actions
- **Transparency**: Clear fee breakdowns, reward calculations

### 7.2 Accessibility

- WCAG AA compliance
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support

---

## 8. Analytics & Monitoring

### 8.1 Key Metrics

- Conversion funnel (landing → staking)
- Transaction success rates
- User retention and engagement
- Average stake amounts and durations

### 8.2 Event Tracking

- Wallet connections
- Transaction initiations/completions
- Error occurrences and types
- Feature usage patterns

---

## 9. Launch Strategy

### 9.1 MVP Scope

- **Core Nomination Flow**: Browse operators, stake tokens, view portfolio
- **Withdrawal Process**: Two-step withdraw → unlock with clear status
- **Operator Discovery**: Compare APY, tax rates, and operator details
- **Desktop Experience**: Optimized for desktop web browsers

### 9.2 Post-MVP Features

- **Operator Registration Flow**: UI for domain operators to register
- **Advanced Analytics**: Historical yield charts, performance metrics
- **Batch Operations**: Multi-operator staking, bulk withdrawals
- **Governance Integration**: Voting with staked tokens
- **Mobile Experience**: Mobile-responsive design (≥ 375px)
- **Accessibility**: WCAG AA compliance

---

## 10. Open Questions & Risks

| #   | Question/Risk                                             | Owner   | Priority | Notes                              |
| --- | --------------------------------------------------------- | ------- | -------- | ---------------------------------- |
| 1   | Share price calculation accuracy during epoch transitions | Eng     | High     | Need to confirm RPC reliability    |
| 2   | Mobile wallet deep-linking UX                             | Design  | Medium   | Test with SubWallet mobile         |
| 3   | Real-time vs indexed data strategy                        | Eng     | High     | Balance performance vs accuracy    |
| 4   | Withdrawal locking period communication                   | Product | High     | Clear countdown and status         |
| 5   | Slashing event notification system                        | Product | Medium   | On-chain events vs external alerts |

---

## 11. Appendix

### 11.1 Glossary

_[Reference: kickoff-workshop.md glossary section]_

### 11.2 Resources

- [Protocol Staking Spec](https://github.com/subspace/protocol-specs/blob/main/docs/decex/staking.md)
- [Auto SDK Consensus Package](https://github.com/autonomys/auto-sdk/tree/main/packages/auto-consensus)
- [Protocol Monorepo](https://github.com/autonomys/subspace)

---

_This PRD is a living document and will be updated as requirements evolve._

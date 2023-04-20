import {
  CommitOwnership as CommitOwnershipEvent,
  ApplyOwnership as ApplyOwnershipEvent,
  Deposit as DepositEvent,
  Withdraw as WithdrawEvent,
  Supply as SupplyEvent
} from "../generated/VotingEscrow/VotingEscrow"
import {
  CommitOwnership,
  ApplyOwnership,
  Deposit,
  Withdraw,
  Supply
} from "../generated/schema"

export function handleCommitOwnership(event: CommitOwnershipEvent): void {
  let entity = new CommitOwnership(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.admin = event.params.admin

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApplyOwnership(event: ApplyOwnershipEvent): void {
  let entity = new ApplyOwnership(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.admin = event.params.admin

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.provider = event.params.provider
  entity.value = event.params.value
  entity.locktime = event.params.locktime
  entity.type = event.params.type
  entity.ts = event.params.ts

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.provider = event.params.provider
  entity.value = event.params.value
  entity.ts = event.params.ts

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSupply(event: SupplyEvent): void {
  let entity = new Supply(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.prevSupply = event.params.prevSupply
  entity.supply = event.params.supply

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

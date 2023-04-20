import {
  CommitOwnership as CommitOwnershipEvent,
  ApplyOwnership as ApplyOwnershipEvent,
  AddType as AddTypeEvent,
  NewTypeWeight as NewTypeWeightEvent,
  NewGaugeWeight as NewGaugeWeightEvent,
  VoteForGauge as VoteForGaugeEvent,
  NewGauge as NewGaugeEvent
} from "../generated/Contract/Contract"
import {
  CommitOwnership,
  ApplyOwnership,
  AddType,
  NewTypeWeight,
  NewGaugeWeight,
  VoteForGauge,
  NewGauge
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

export function handleAddType(event: AddTypeEvent): void {
  let entity = new AddType(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.name = event.params.name
  entity.type_id = event.params.type_id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewTypeWeight(event: NewTypeWeightEvent): void {
  let entity = new NewTypeWeight(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.type_id = event.params.type_id
  entity.time = event.params.time
  entity.weight = event.params.weight
  entity.total_weight = event.params.total_weight

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewGaugeWeight(event: NewGaugeWeightEvent): void {
  let entity = new NewGaugeWeight(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.gauge_address = event.params.gauge_address
  entity.time = event.params.time
  entity.weight = event.params.weight
  entity.total_weight = event.params.total_weight

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVoteForGauge(event: VoteForGaugeEvent): void {
  let entity = new VoteForGauge(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.time = event.params.time
  entity.user = event.params.user
  entity.gauge_addr = event.params.gauge_addr
  entity.weight = event.params.weight

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewGauge(event: NewGaugeEvent): void {
  let entity = new NewGauge(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.addr = event.params.addr
  entity.gauge_type = event.params.gauge_type
  entity.weight = event.params.weight

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

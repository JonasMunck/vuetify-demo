export interface Order {
    orderBD: string,
    alloc: number
    inverstor: string
}

export interface ParticipationOrder {
    alloc: number
    inverstor: string
}

export interface Participation {
    participant: string
    orders: Array<ParticipationOrder>
    totalAlloc: number
}

interface ParticipantDict {
    [orderBD: string]: Array<ParticipationOrder>
}

export function partitions(orders: Array<Order>): Array<Participation> {
    let mapper: ParticipantDict = {}

    const a = orders
        .reduce((acc, curr, i, a, k = curr.orderBD) => {
            (acc[k] || (acc[k] = [])).push(convertToParticipationOrder(curr))
            return acc
        }, mapper)

    return Object.entries(a).map(([orderBD, orders]) => (
        {
            orders,
            participant: orderBD,
            totalAlloc: orders.reduce((acc, curr) => acc += curr.alloc, 0)
        }
    ))
}

function convertToParticipationOrder(order: Order): ParticipationOrder {
    let { alloc, inverstor } = order
    return { alloc, inverstor }
}

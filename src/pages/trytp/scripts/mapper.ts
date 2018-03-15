export interface Order {
    orderBD: string,
    alloc: number
    inverstor: string
}

export interface IParticipationOrder {
    alloc: number
    inverstor: string
}

export interface Participation {
    participant: string
    orders: Array<IParticipationOrder>
    totalAlloc: number
}

interface ParticipantDict {
    [orderBD: string]: Array<IParticipationOrder>
}

export function partitions(orders: Array<Order>): Array<Participation> {
    let mapper : ParticipantDict = {}

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

function convertToParticipationOrder(order: Order): IParticipationOrder {
    let { alloc, inverstor } = order
    return { alloc, inverstor }
}

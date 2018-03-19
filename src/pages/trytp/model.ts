import { Order } from './scripts/mapper'
import { Post } from '../../state/posts/types'


export interface TrtTpModel {
    posts?: Post[]
    orders: Order[],
    displayCaseNumber: boolean
}

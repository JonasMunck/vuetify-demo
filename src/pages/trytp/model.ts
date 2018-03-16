import { Order } from './scripts/mapper'
import { Post } from '../../state/posts/types'


export interface TrtTpModel {
    orders: Order[],
    displayCaseNumber: boolean
}

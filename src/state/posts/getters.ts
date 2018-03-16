import { GetterTree } from 'vuex'
import { PostState, Post } from './types'
import { RootState } from '../types'

export const getters: GetterTree<PostState, RootState> = {
    getPosts (state): Post[] {
        return state.posts
    }
}
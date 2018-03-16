import Vue from 'vue'
import { MutationTree } from 'vuex'
import { PostState, Post } from './types'

export const mutations: MutationTree<PostState> = {
    postsLoaded (state, payload: Post[]) {
        state.posts = payload
    }
}
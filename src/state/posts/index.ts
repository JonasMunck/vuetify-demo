import { Module } from 'vuex'
import { actions } from './actions'
import { mutations } from './mutations'
import { getters } from './getters'
import { PostState }  from './types'
import { RootState } from '../types'

export const state: PostState = {
    posts: []
}

const namespaced: boolean = true

export const posts: Module<PostState, RootState> = {
    namespaced,
    state,
    actions,
    mutations,
    getters
}

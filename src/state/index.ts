import Vue from 'vue'
import Vuex, { StoreOptions, MutationTree, ActionTree } from 'vuex'
import { RootState } from './types'
import { posts } from './posts';

const mutations: MutationTree<RootState> = {
  increment (state) {
    state.count++
  },

  caseNumber (state, caseNumber: string) {
    state.caseNumber = caseNumber
  }
}

const actions: ActionTree<RootState, RootState> = {
  actionIncrement ({ commit }): void {
    console.log('action increment')
    commit('increment')
  }
}

const store: StoreOptions<RootState> = new Vuex.Store({
    state: {
      count: 0,
      caseNumber: ''
    },
    actions,
    mutations,
    modules: {
      posts
    }
  })

  export default store

import Vue from 'vue'
import Vuex, { StoreOptions, MutationTree, ActionTree } from 'vuex'
import { RootState } from './types'
import { posts } from './posts';
import { actions } from './actions';
import { mutations } from './mutations';

const state: RootState = {
    count: 0,
    caseNumber: ''
  }


const store: StoreOptions<RootState> = new Vuex.Store({
    state,
    actions,
    mutations,
    modules: {
      posts
    }
  })

  export default store

import { ActionTree } from 'vuex'
import { RootState } from './types'

export const actions: ActionTree<RootState, RootState> = {
    actionIncrement ({ commit }): void {
      commit('increment')
    }
  }
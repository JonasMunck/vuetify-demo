import { MutationTree } from 'vuex'
import { RootState } from './types'

export const mutations: MutationTree<RootState> = {
    increment (state) {
      state.count++
    },

    caseNumber (state, caseNumber: string) {
      state.caseNumber = caseNumber
    }
  }

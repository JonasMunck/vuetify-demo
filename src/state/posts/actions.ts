import { ActionTree } from 'vuex'
import { RootState } from '../types'
import { PostState , Post}  from './types'
import axios from 'axios'

export const actions: ActionTree<PostState, RootState> = {
    async fetchData({ commit }): Promise<void> {
        try {
            let resp = await axios.get('https://jsonplaceholder.typicode.com/posts')
            const posts: Post[] = resp && resp.data
            commit('postsLoaded', posts)
        } catch (e) {
            commit('postsError')
        }

    }

}
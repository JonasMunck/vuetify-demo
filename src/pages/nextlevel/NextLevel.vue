<template>
  <v-container>
    <v-layout row>
      <div class="display-1">Next level</div>
    </v-layout>
    <v-layout row justify-center>
      <v-flex xs4>
        <posts :posts="posts" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Posts from './components/Posts.vue'

export default Vue.extend({
  components: {
    Posts
  },

  data () {
    return {
      posts: null
    }
  },

  async created () {
    this.posts = await this.fetchPosts()
  },

  methods: {
    async fetchPosts (): Promise<any> {
      let response = await this.$http.get('https://jsonplaceholder.typicode.com/posts')
      console.log(response)
      return response.data
    }
  }
})
</script>

<style>

</style>

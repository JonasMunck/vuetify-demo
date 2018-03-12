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

<script>
import Posts from './components/Posts';
export default {
  components: {
    Posts
  },

  data () {
    return {
      posts: null
    }
  },

  async created () {
    setTimeout(() => {
      // await does not work within setTimeout,
      // therefore promise based syntax is used here
      this.fetchPosts().then(d => (this.posts = d))
    }, 5000)

  },

  methods: {
    async fetchPosts () {
      let response = await this.$http.get('https://jsonplaceholder.typicode.com/posts')
      console.log(response)
      return response.data
    }
  }
}
</script>

<style>

</style>

<template>
  <v-container>
    <v-layout row>
      <div class="display-1">Next level</div>
      {{ posts }}
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      posts: null
    }
  },

  async created () {
    this.posts = await this.fetchPosts()
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

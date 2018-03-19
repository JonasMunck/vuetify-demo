<template>
  <div v-if="posts === null" class="text-xs-center">
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </div>
  <div v-else>
    <div v-for="post in posts" :key="post.id">
      <post :post="post" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Post from './Post.vue'

export default Vue.extend({
  props: ['posts'],
  components: { Post }
})
</script>

<style>

</style>

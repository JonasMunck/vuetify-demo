<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <post :post="post" />
    </div>
  </div>
</template>

<script>
import Post from './Post'
export default {
  props: ['posts'],
  components: { Post }
}
</script>

<style>

</style>

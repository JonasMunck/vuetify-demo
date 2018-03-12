<template>
  <v-card>
    <v-card-title primary-title>
      <h3 class="headline mb-0">{{ post.title }}</h3>
    </v-card-title>
    <v-card-text>{{post.body}}</v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['post']
}
</script>

<style>

</style>

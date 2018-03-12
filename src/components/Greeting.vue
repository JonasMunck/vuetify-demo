<template>
  <div v-if="validUsername">
    Hi {{ username }}, hope you have a nice day!
  </div>
  <div v-else>
    Please specify your username
  </div>
</template>

<script>
export default {
  props: ['username'],

  computed: {
    validUsername () {
      return this.username && this.username.length > 0
    }
  }
}
</script>

<style>

</style>

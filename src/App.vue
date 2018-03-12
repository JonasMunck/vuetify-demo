<template>
  <v-app>
    <v-container>

      <v-text-field
        label="Username"
        v-model="username" />

      Hi {{ username }}, hope you have a nice day!

    </v-container>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello World!',
      username: ''
    }
  },
}
</script>

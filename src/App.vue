<template>
  <v-app>
    <v-container>
      <v-layout row>
        <v-flex xs2>

          <!-- where things happen -->
          <v-text-field
            label="Username"
            v-model="username" />
          <!-- end of where things happen -->

        </v-flex>
      </v-layout>
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

  computed: {
    upperCaseUsername () {
      return this.username.toUpperCase()
    }
  }
}
</script>

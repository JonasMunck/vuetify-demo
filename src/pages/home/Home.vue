<template>
  <v-container>
    <v-layout row>
      <v-flex xs2>

        <!-- where things happen -->
        <v-text-field
          label="Username"
          v-model="username" />
        <!-- end of where things happen -->
        <greeting v-bind:username="username"/>

        <v-btn
          @click="navToNextLevel"
        >
          To Next level
        </v-btn>


      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Greeting from '@/components/Greeting'
export default {
  components: {
    Greeting
  },

  data () {
    return {
      msg: 'Hello World!',
      username: ''
    }
  },

  methods: {
    navToNextLevel () {
      this.$router.push({name: 'next-level'})
    }
  }
}
</script>

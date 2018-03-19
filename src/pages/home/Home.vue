<template>
  <v-container>

    <debounced-input />

    <auto-complete v-on:input="handleSearch"/>

    posts: {{ posts }}

    <bb-date-picker />

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
import BbDatePicker from '@/components/trading/BbDatePicker.vue'
import AutoComplete from '@/components/trading/AutoComplete.vue'
import DebouncedInput from '@/components/trading/DebouncedInput.vue'
export default {
  components: {
    Greeting,
    BbDatePicker,
    AutoComplete,
    DebouncedInput
  },

  data () {
    return {
      msg: 'Hello World!',
      username: '',
      posts: null
    }
  },

  methods: {
    navToNextLevel () {
      this.$router.push({name: 'next-level'})
    },

    handleSearch (posts) {
      this.posts = posts
    }
  }
}
</script>

<template>
  <div>

    localCounter: {{ localCounter }}

    posts: {{ posts }}

    <case-number-modal
      :display="displayCaseNumber"
      v-on:save="saveCaseNumber"
    />

    <v-btn
      @click="incrementCounter"
    >
      Increment
    </v-btn>

    <v-btn
      @click="toggleCaseNumberDialog"

    >
      Save
    </v-btn>

    <!-- <div v-for="p in extractions" :key="p.participant">
      <div class="display-1">{{p.participant}}</div>
      <div>{{ p.orders }}</div>

      <div class="title">{{ p.totalAlloc }}</div>
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { TrtTpModel } from './model'
import { partitions, Participation } from './scripts/mapper'
import CaseNumberModal from './components/CaseNumberModal.vue'
import { PostState, Post } from '../../state/posts/types'

export default Vue.extend({
  components: { CaseNumberModal },
  data () {
    const d : TrtTpModel = {
      displayCaseNumber: false,
      orders: [
        { orderBD: 'CITI', alloc: 50, inverstor: 'JON' },
        { orderBD: 'DANSKE', alloc: 20, inverstor: 'FOO' },
        { orderBD: 'DANSKE', alloc: 70, inverstor: 'BAR' },
        { orderBD: 'BARC', alloc: 10, inverstor: 'SPAM' },
        { orderBD: 'CITI', alloc: 50, inverstor: 'EGG' }
      ]
    }
    return d
  },

  created () {
    this.$store.dispatch('posts/fetchData')
  },

  computed: {
    // ...mapState('posts', ['posts']),
    ...mapState('posts', {
      posts: (state : PostState) => state.posts
    }),

    localCounter (): number {
      return this.$store.state.count
    },

    extractions (): Participation[] {
      return partitions(this.orders)
    }
  },

  methods: {
    incrementCounter (): void {
      this.$store.dispatch('actionIncrement')
    },

    toggleCaseNumberDialog (): void {
      this.displayCaseNumber = !this.displayCaseNumber
    },

    saveCaseNumber (v:string): void {
      this.$store.commit('caseNumber', true)
      this.displayCaseNumber = false
    }
  }
})

</script>


<style>

</style>

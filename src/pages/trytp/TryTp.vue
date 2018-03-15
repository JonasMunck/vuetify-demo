<template>
  <div>
    <div v-for="p in extractions" :key="p.participant">
      <div class="display-1">{{p.participant}}</div>
      <div>{{ p.orders }}</div>

      <div class="title">{{ p.totalAlloc }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { TrtTpModel } from './model'
import { partitions, Participation } from './scripts/mapper'


export default Vue.extend({
  data () {
    const d : TrtTpModel = {
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

  computed: {

    extractions (): Participation[] {
      return partitions(this.orders)
    }

  }
})

</script>


<style>

</style>

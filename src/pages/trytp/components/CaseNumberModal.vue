<template>
  <v-dialog v-model="display" max-width="500px">
    <v-card>
      <v-card-title>
        <span>Dialog 3</span>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-text>

        {{ caseNumber }}
        <v-text-field
          label="Case Number"
          v-model="caseNumber"
        />

      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" flat @click="save()">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import { CaseNumberModel } from './caseNumberModel'

export default Vue.extend({
  props: ['display'],
  data () {
    const d : CaseNumberModel = {
      caseNumber: ''
    }
    return d
  },

  methods: {
    save (): void {
      console.log('save!')
      this.$emit('save', this.caseNumber)
    }
  }
})
</script>

<style>

</style>

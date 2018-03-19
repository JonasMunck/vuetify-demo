<!--
Date picker with "bloomberg" key shortcuts

When the input field is selected the user can type to increment / decrement
the date. Typing '5' will increment the date five days forward,
typing -3 will decrement date with three days.
-->

<template>
  <v-menu
    ref="menu"
    lazy
    :close-on-content-click="false"
    v-model="menu"
    transition="scale-transition"
    offset-y
    full-width
    :nudge-right="40"
    min-width="290px"
    :return-value.sync="date"
  >
    <v-text-field
      :id="domId"
      slot="activator"
      label="Picker in menu"
      v-model="date"
      prepend-icon="event"
      readonly
    ></v-text-field>
    <v-date-picker v-model="date" no-title scrollable>
      <v-spacer></v-spacer>
      <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
      <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script lang="ts">
import Vue from 'vue'

import { fromEvent } from 'rxjs/observable/fromEvent'
import { timer } from 'rxjs/observable/timer'
import { buffer, bufferTime, bufferToggle, map, filter, delay, debounceTime } from 'rxjs/operators'
import { ObservableInput, Observable } from 'rxjs/Observable'
import { bufferCount } from 'rxjs/operators/bufferCount'

interface KeyCodeValue {
  [keyCode: number]: number | string
}

export default Vue.extend({
  data: () => ({
    date: new Date().toISOString().substring(0, 10),
    menu: false,
    domId: ''
  }),

  created () {
    this.domId = Math.random().toString()
  },

  watch: {
    date () {
      // Collaps menu automatically when user selects date from menu.
      // Add a delay to make it look nicer
      if (this.menu) setTimeout(() => this.menu = false, 300)
    }
  },

  mounted () {
    const vm = this

    const el = document.getElementById(this.domId) as HTMLElement

    // collect userinput in the buffer until user stops type
    // "stops type" is defined as 300 ms after the last input
    const input$ = fromEvent<KeyboardEvent>(el, 'keyup')
    const stop$ = input$.pipe(debounceTime(500))

    const move$: Observable<Array<number | string>> = input$
      .pipe(
        map(e => vm.keyCodeToValue(e.keyCode)),
        filter(e => vm.validInput(e)),
        buffer(stop$)
      )

    move$.subscribe(vm.moveDate)
  },

  methods: {

    moveDate (val: Array<number | string>): void {
      const daysToJump = this.sequenceToNumber(val)
      const currentDate = new Date(this.date)
      currentDate.setDate(currentDate.getDate() + daysToJump )
      this.date = currentDate.toISOString().substring(0, 10)
    },

    // converts a sequence of chars to
    // [1, 2] => 12
    // ['-', 4] => -4
    sequenceToNumber (val: Array<number | string>): number {
      let direction = 1
      if (val[0] === '-') {
        direction = -1
      }

      const numbers = val.filter(v => v !== '-')
      const daysToJump = parseInt(numbers.join(''))
      return isNaN(daysToJump) ? 0 : daysToJump * direction
    },

    validInput (e: number | string): boolean {
      return e === '-' || 0 <= e && e <= 9
    },

    keyCodeToValue (keyCode: number): number | string  {
      const m: KeyCodeValue = {
        189: '-',
        48: 0,
        49: 1,
        50: 2,
        51: 3,
        52: 4,
        53: 5,
        54: 6,
        55: 7,
        56: 8,
        57: 9
      }
      return m[keyCode]
    }

  }

})
</script>

<style>

</style>

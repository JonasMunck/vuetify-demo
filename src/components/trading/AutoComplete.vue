<template>
<div>
  <v-text-field
    :id="domId"
    label="Search"
    v-model="searchText"
    >
  </v-text-field>
  {{ searchText }}
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios,{ AxiosPromise } from 'axios'
import { fromEvent} from 'rxjs/observable/fromEvent'
import { of } from 'rxjs/observable/of'
import { ObservableInput, Observable } from 'rxjs/Observable'
import { debounceTime, switchMap, map, scan } from 'rxjs/operators'

interface Post {
  id: number
  userId: number
  body: string
  title: string
}

interface AutoCompleteModel {
  searchText: string
  domId: string
}

type ResponseFunction = () => AxiosPromise

export default Vue.extend({
  data () {
    const a: AutoCompleteModel = {
      searchText: '',
      domId: ''
    }
    return a
  },

  created () {
    this.domId = Math.random().toString()
  },

  async mounted () {
    const el = document.getElementById(this.domId) as HTMLElement

    const response$ = (text: string) => of(axios.get('https://jsonplaceholder.typicode.com/posts?search=' + text))

    const input$ = fromEvent<TextEvent>(el, 'input')
    const debounced$ = input$.pipe(
      map(() => this.searchText),
      debounceTime(500)
    )
    debounced$.pipe(
      switchMap((t) => response$(t))
    )
    .subscribe(async v => {
      const data = await this.handleResponse(v)
      this.$emit('input', data)
    })
  },

  methods: {
    async handleResponse (response: AxiosPromise) {
      let resp = await response
      return resp.data
    }
  }

})
</script>

<style>

</style>

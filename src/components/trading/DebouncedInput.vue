<!--
Emits an event `input`,
but handles debounce internally
-->
<template>
  <v-text-field
    :color="color"
    label="Search"
    v-model="searchText"
    :loading="loading"
  >
    <v-progress-linear

      :indeterminate="true"
      v-show="loading"
    ></v-progress-linear>
  </v-text-field>
</template>

<script lang="ts">
import Vue from 'vue'
import axios,{ AxiosPromise } from 'axios'

import { fromEvent} from 'rxjs/observable/fromEvent'
import { of } from 'rxjs/observable/of'
import { interval } from 'rxjs/observable/interval'
import { timer } from 'rxjs/observable/timer'
import { debounceTime, switchMap, map, scan, combineLatest, filter, startWith } from 'rxjs/operators'
import { Observable } from 'rxjs/Observable';
import { isEmpty } from 'rxjs/operators/isEmpty'

interface Post {
  id: number
  userId: number
  body: string
  title: string
}

interface QueryAndResponse {
  query: string
  response: AxiosPromise<Post[]>
}

export default Vue.extend({
  props: {
    debounce: {
      type: Number,
      default: 250
    },
    queryUrl: {
      type: String,
      default: 'https://jsonplaceholder.typicode.com/posts?search='
    }
  },

  data: () => ({
    searchText: '',
    loading: false,
    color: 'primary'
  }),

  mounted () {
    const request$ = (query: string) => of<QueryAndResponse>(this.searchQueryAndyResponse(query))

    // it won't be null
    const inputField = this.$el.querySelector('input') as HTMLInputElement

    const input$ = fromEvent<TextEvent>(inputField, 'input')
      .pipe(
        map(() => this.searchText)
      )

    const response$ = input$
      .pipe(
        debounceTime(this.debounce),
        switchMap((query) => request$(query)),
        startWith<QueryAndResponse>(this.searchQueryAndyResponse(''))
      )

    // don't know why the (of()) is needed,
    // but if obmitted we can't subscribe to the observable
    const combined$ = combineLatest(input$, response$)(input$)

    combined$.subscribe(this.handleSearchEvent)
  },

  methods: {
    searchQueryAndyResponse(query: string): QueryAndResponse {
      return {query, response: this.$http.get(this.queryUrl + query)}
    },

    async handleSearchEvent ([_, valueInput, { query, response}]: [{}, string, QueryAndResponse]): Promise<void> {
      if (valueInput === query) {
        try {
          const resp = await response
          const { data } = resp
          this.$emit('input', data)
        } catch (error) {
          // network are handled globally
        } finally {
          this.loading = false
        }
      } else {
        this.loading = true
      }
    }
  }

})
</script>


<style>

</style>

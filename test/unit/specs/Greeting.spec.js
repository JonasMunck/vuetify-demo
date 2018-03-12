import Vue from 'vue'
import Greeting from '@/components/Greeting'

describe('Greeting.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Greeting)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent)
    .toContain('Please specify your username')
  })
})

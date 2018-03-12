import Vue from 'vue'
import Greeting from '@/components/Greeting'

describe('Greeting.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Greeting)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent)
    .toContain('Please specify your username')
  })

  it('should say hi to user', () => {
    const Constructor = Vue.extend(Greeting)
    const vm = new Constructor({propsData: {username: 'Jonas'}}).$mount()
    expect(vm.$el.textContent)
    .toContain('Hi Jonas, hope you have a nice day!')
  })
})

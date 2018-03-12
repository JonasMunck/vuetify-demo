import Vue from 'vue'
import Posts from '@/pages/nextlevel/components/Posts'

describe('Posts.vue', () => {
  it('should render spinner circle', () => {
    const Constructor = Vue.extend(Posts)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.progress-circular__overlay'))
    .toBeDefined()
  })


})

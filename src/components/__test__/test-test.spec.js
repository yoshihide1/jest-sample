import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { cloneDeep } from 'lodash'
import { actions, mutations } from '../../store/index.js'

const state = {
  nowNumber: 0
}

const initStore = () => {
  return cloneDeep({
    state,
    mutations,
    actions
  })
}

let store
let localVue
beforeEach(() => {
  localVue = createLocalVue()
  localVue.use(Vuex)

  store = new Vuex.Store(initStore())
})
describe('store', () => {

  it('dispatch incremetnt', () => {
    expect(store.state.nowNumber).toBe(0)
    store.dispatch('increment')
    expect(store.state.nowNumber).toBe(1)
  })
  it('dispatch decrement', () => {
    store.state.nowNumber = 1
    expect(store.state.nowNumber).toBe(1)
    store.dispatch('decrement')
    expect(store.state.nowNumber).toBe(0)
    store.dispatch('decrement')
    expect(store.state.nowNumber).toBe(0)
  })
  it('dispatch reset', () => {
    store.state.nowNumber = 5
    expect(store.state.nowNumber).toBe(5)
    store.dispatch('reset')
    expect(store.state.nowNumber).toBe(0)
  })
  it('dispatch まとめテスト', () => {
    store.dispatch('increment')
    expect(store.state.nowNumber).toBe(1)
    store.dispatch('increment')
    expect(store.state.nowNumber).toBe(2)
    store.dispatch('decrement')
    expect(store.state.nowNumber).toBe(1)
    store.dispatch('reset')
    expect(store.state.nowNumber).toBe(0)

  })
})
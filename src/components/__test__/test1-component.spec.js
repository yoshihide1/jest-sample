import Test1 from '../test1'
import {mount} from '@vue/test-utils'

const wrapper = mount(Test1)
const vm = wrapper.vm
describe('test1', () => {
  it.skip('初期値は0？', () => {
    expect(wrapper.html()).toContain('<p>0</p>')
  })
  it.skip('buttonがあるか？', () => {
    expect(wrapper.contains('button')).toBe(true)
  })
})

describe('test2', () => {
  it.skip('increment', () => {
    const button = wrapper.find('.increment__button')
    expect(vm.num).toBe(0)
    button.trigger('click')
    expect(vm.num).toBe(1)
    button.trigger('click')
    expect(vm.num).toBe(2)
  })
  it.skip('decrement', () => {
    vm.num = 1
    const button = wrapper.find('.decrement__button')
    button.trigger('click')
    expect(vm.num).toBe(0)
    button.trigger('click')
    expect(vm.num).toBe(0)
  })
  it.skip('reset', () => {
    vm.num = 5
    const button = wrapper.find('.reset__button')
    expect(vm.num).toBe(5)
    button.trigger('click')
    expect(vm.num).toBe(0)
  })
})
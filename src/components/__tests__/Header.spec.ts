import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Header from '../Header.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(Header, { props: { msg: 'Header Vitest' } })
    expect(wrapper.text()).toContain('Header Vitest')
  })
})

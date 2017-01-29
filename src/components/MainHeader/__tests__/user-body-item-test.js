// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('../UserBodyItem')

import React from 'react'
import {shallow} from 'enzyme'

import UserBodyItem from '../UserBodyItem'

const props = {
  label: ''
}

describe('MainHeader.Navbar.NavbarMenu.User.UserBody.Item', () => {
  it('should contain className "col-xs-4 text-center"', () => {
    const wrapper = shallow(<UserBodyItem {...props} />)

    expect(
      wrapper.hasClass('col-xs-4 text-center')
    ).toBeTruthy()
  })

  it('should pass prop href to <Link> component', () => {
    const wrapper = shallow(<UserBodyItem {...props} href='http://example.com' />)

    expect(
      wrapper.find('MyLink').prop('href')
    ).toBe('http://example.com')
  })

  it('should pass prop onClick to <Link> component', () => {
    const spy = () => {}
    const wrapper = shallow(<UserBodyItem {...props} onClick={spy} />)

    expect(
      wrapper.find('MyLink').prop('onClick')
    ).toBe(spy)
  })

  it('should pass prop label to <Link> component as children', () => {
    const wrapper = shallow(<UserBodyItem {...props} label='Profile' />)

    expect(
      wrapper.find('MyLink').contains('Profile')
    ).toBeTruthy()
  })
})

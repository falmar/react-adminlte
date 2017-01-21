// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

jest.unmock('./../SidebarMenu')

import React from 'react'
import {shallow} from 'enzyme'

import Menu from './../SidebarMenu'

describe('MainSidebar.Menu', () => {
  it('should have classnames treeview-menu when isRoot prop is not provided', () => {
    const wrapper = shallow(<Menu />)

    expect(
      wrapper.hasClass('treeview-menu')
    ).toBeTruthy()
  })

  it('should have classnames sidebar-menu when isRoot prop is provided', () => {
    const wrapper = shallow(<Menu isRoot />)

    expect(
      wrapper.hasClass('sidebar-menu')
    ).toBeTruthy()
  })

  it('should not have classnames active when prop is not provided', () => {
    const wrapper = shallow(<Menu />)

    expect(
      wrapper.hasClass('active')
    ).toBeFalsy()
  })

  it('should have classnames active when prop is provided', () => {
    const wrapper = shallow(<Menu active />)

    expect(
      wrapper.hasClass('active')
    ).toBeTruthy()
  })
})

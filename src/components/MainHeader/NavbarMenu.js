// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'

const NavbarMenu = ({children}) => {
  return (
    <div className='navbar-custom-menu'>
      <ul className='navbar-nav nav'>
        {children}
      </ul>
    </div>
  )
}

NavbarMenu.propTypes = {
  children: PropTypes.node.isRequired
}

export default NavbarMenu

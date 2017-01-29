// Copyright 2016 David Lavieri.  All rights reserved.
// Use of this source code is governed by a MIT License
// License that can be found in the LICENSE file.

import React, {PropTypes} from 'react'

const UserHeader = ({imageUrl, title, description}) => {
  return (
    <li className='user-header'>
      <img src={imageUrl} className='img-circle' alt='User Image' />
      <p>
        {title}
        <small>{description}</small>
      </p>
    </li>
  )
}

UserHeader.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.element
}

export default UserHeader
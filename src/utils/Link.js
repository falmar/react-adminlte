import React from 'react'
import PropTypes from 'prop-types'

const MyLink = ({href, children, onClick, className}) => {
  let url = (typeof href === 'string' && href.length > 0) ? href : '#'
  let click = () => {}

  if (url.indexOf('http') === 0 || url.indexOf('www.') === 0) {
    return <a className={className} href={url}>{children}</a>
  }

  if (url.indexOf('#') === 0) {
    click = (event) => {
      if (url === '#') {
        event.preventDefault()
      }

      if (typeof onClick === 'function') {
        onClick(event)
      }
    }
  }

  return <a className={className} href='#' onClick={click}>{children}</a>
}

MyLink.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  children: PropTypes.node
}

export default MyLink

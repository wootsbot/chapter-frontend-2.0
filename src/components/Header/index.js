import PropTypes from "prop-types"
import React from "react"

import "./styles.css"

const Header = ({ siteTitle }) => (
  <header className="header">Chapter Frontend 2.0</header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

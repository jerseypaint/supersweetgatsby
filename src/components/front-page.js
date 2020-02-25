/**
 * FrontPage component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Hero from "./hero-home"

const FrontPage = ({ children }) => {
    return (
      <>
        <Hero />
      </>
    )
  }
  
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
  export default FrontPage
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"


class Crisp extends React.Component {
  componentDidMount () {
    window.$crisp=[];
    window.CRISP_WEBSITE_ID="fd594c9c-47ec-4f5c-a47a-ad723321ae28";
  }
  render () {
    return (
      <>
        <Helmet>
          <script src="https://client.crisp.chat/l.js" />
        </Helmet>
      </>
      )
  }
}

const Layout = ({ children }) => {

  return (
    <>
      <Crisp />
      <Header />
        <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

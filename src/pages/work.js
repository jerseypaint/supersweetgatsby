import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero-page"
import Work from "../components/work-index"

import SVG from "../images/undraw_up_to_date_rmbm.svg"

const WorkPage = () => (
  <Layout>
    <SEO title="Work" />
    <Hero 
      title={`From fashion to blockchain, we’ve worked with companies of all sorts`}
      subtitle={`See Why Clients Love Us`}
      body={`We pride ourselves on the work we've provided to dozens of happy clients`}>
        <SVG />
      </Hero>
    <Work />
  </Layout>
)

export default WorkPage
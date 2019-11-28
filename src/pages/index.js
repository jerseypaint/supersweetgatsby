import React from "react"

import Layout from "../components/layout"

import Hero from "../components/hero-home"
import LatestWork from "../components/work-card"
import Services from "../components/home-services"
import Tech from "../components/tech-banner"
import Pricing from "../components/pricing"

const IndexPage = () => (
  <Layout>
    <Hero />
    <LatestWork />
    <Services />
    <Tech />
    <Pricing />
  </Layout>
)

export default IndexPage
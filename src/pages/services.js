import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero-page"
import Features from "../components/service-features"
import LatestWork from "../components/work-card"
import Tech from "../components/tech-banner"
import Pricing from "../components/pricing"

import SVG from "../images/undraw_online_media_62jb_grey.svg"

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <Hero 
      title={`Building your latest website with the latest technologies`}
      subtitle={`Mordern Web Development & Hosting`}
      body={`We build websites that business owners and their customers love.
      Put your business on the digital map with a website that is sure to impress.`}>
        <SVG />
      </Hero>
      <Features />
    <Tech />
    <LatestWork />
    <Pricing />
  </Layout>
)

export default ServicesPage
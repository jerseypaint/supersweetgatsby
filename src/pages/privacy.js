import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero-page"
import Section from "../components/section"
import { graphql } from 'gatsby'
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p>{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
}



const Content = styled.div`
  text-align: left;
  max-width: 560px;
  margin: 0 auto;

  .bold {
      font-weight: bold;
  }
`
const PrivacyPage = ({data}) => (
  <Layout>
    <SEO title={data.contentfulPolicies.title} />
    <Hero 
      title={data.contentfulPolicies.title}
      >
      </Hero>
    <Section>
    <Content>
        {documentToReactComponents(data.contentfulPolicies.body.json, options)}
    </Content>
    </Section>
  </Layout>
)

export const query = graphql`
  query PrivacyPage {
    contentfulPolicies(title: {eq: "Privacy Policy"}) {
        title
        body {
          json
        }
      }
  }
`
export default PrivacyPage
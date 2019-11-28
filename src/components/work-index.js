import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Section from "./section"
import WorkInfo from "./work-info"

const Card = styled.div`
  background-color: #0A1128;
  width:95%;
  margin: 0 auto 3em;
`
const Grid = styled.div`
  @media (min-width:769px) {
    display: flex;
  }
`
const GridItem = styled.div`
  .gatsby-image-wrapper {
    height: 100%;
    min-height: 300px;
  }
  @media (min-width:769px) {
    width: 50%;
  }
`

const Bottom = styled.div`
  position:relative;
  padding: 2em;
`

export default () => (
  <StaticQuery
    query={graphql`
      query WorkIndexQuery {
        allContentfulWork {
          edges {
            node {
              id
              name
              description {
                description
              }
              siteUrl
              featuredImage {
                fluid {
                  sizes
                  src
                  srcSet
                }
                fixed {
                  width
                  height
                  src
                  srcSet
                }
              }
              services {
                icon {
                  file {
                    url
                  }
                }
                name
                id
              }
            }
          }
        }
      }
    `
    }
  render = {data => (
    <>
     <Section className={`work-card`}>
      {data.allContentfulWork.edges.map(work => (
      <Card key={work.node.name}>
        <Grid key={work.node.name} >
          <GridItem key={`${work.node.name}_1`}>
              <Bottom key={work.node.name}>
                <WorkInfo title={work.node.name} description={work.node.description.description} services={work.node.services} siteLink={work.node.siteUrl} key={work.node.name} />
              </Bottom>
          </GridItem>
          <GridItem key={`${work.node.name}_2`}>
            <Img fluid={work.node.featuredImage.fluid} alt={`default`} />
          </GridItem>
        </Grid>
      </Card>
      )
    )}
    </Section>
    </>
  )}
  />
)
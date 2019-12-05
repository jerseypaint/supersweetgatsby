import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Section from "./section"
import WorkInfo from "./work-info"

const Card = styled.div`
  position: relative;
  width:95%;
  margin:0 auto;
  margin-bottom: 5em;
`
const Background = styled.div`
  content: '';
  position: absolute;
  height: 100%;
  width: 100%;
  top: 2em;
  left: -2em;
  background-color: #0A1128;
  z-index: 1;
`

const Grid = styled.div`
  position: relative;
  border: 1px solid #DB2763;
  z-index: 3;

  @media (min-width:769px) {
    display: flex;
  }
`

const GridItem = styled.div`
  &:nth-of-type(2) {
    padding: 1em .5em;

    @media (min-width:769px) {
      padding: 0;
      display: flex;
      align-items: center;

      .gatsby-image-wrapper {
        width: calc(100% - 1em);
      }
    }
  }

  @media (min-width:769px) {
    width: 50%;
  }
  .gatsby-image-wrapper {
    min-height: 200px;;
    height: 80%;
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
                fluid(maxWidth: 800, maxHeight: 400) {
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
        <Background key={work.node.name} />
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
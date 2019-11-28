import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"
import Section from "./section"
import Button from "./button"
import WorkInfo from "./work-info"

const Card = styled.div`
  background-color: #0A1128;
  width:95%;
  margin:0 auto;
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

const Top = styled.div`
  position:relative;
  padding: 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #1E1528;
  
  h3 {
    margin: 0 .5em 0;
  }

  a {
    font-size: 1em;
  }
`

const Bottom = styled.div`
  position:relative;
  padding: 2em;
`

export default () => (
  <StaticQuery
    query={graphql`
      query WorkCardQuery {
        contentfulWork(name: {eq: "Azul Skin Care"}) {
          name
          siteUrl
          description {
            description
          }
          featuredImage {
            fluid {
              sizes
              src
              srcSet
            }
          }
          services {
            icon {
              file{
                url
              }
            }
            name
            id
          }
        }
      }
    `
    }
  render = {data => (
    <>
     <Section className={`work-card`}>
      <Card>
        <Grid>
          <GridItem>
              <Top>
                <h3>Latest Work</h3>
                <Button to="/work" content="See more"/>
              </Top>
              <Bottom>
                <WorkInfo title={data.contentfulWork.name} description={data.contentfulWork.description.description} services={data.contentfulWork.services} siteLink={data.contentfulWork.siteUrl} />
              </Bottom>
          </GridItem>
          <GridItem>
            <Img fluid={data.contentfulWork.featuredImage.fluid} alt={`default`} />
          </GridItem>
        </Grid>
      </Card>
    </Section>
    </>
  )}
  />
)
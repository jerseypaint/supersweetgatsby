import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"
import Section from "./section"
import Button from "./button"
import WorkInfo from "./work-info"

const Card = styled.div`
  position: relative;
  width:95%;
  margin:0 auto;
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
    min-height: 200px;
    height: 80%;
  }
`

const Top = styled.div`
  position:relative;
  padding: 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #DB2763;
  
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
            fluid (maxWidth: 1000, maxHeight: 600){
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
      <Background />
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
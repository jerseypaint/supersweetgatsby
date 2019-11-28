import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

import Section from "./section"

const Grid = styled.div`
  @media (min-width: 769px) {
    display: flex;
    align-items: flex-start;
  }
`
const Card = styled.div`
  background-color: #0A1128;
  display: flex;
  flex-direction: column;
  margin: 1em 0;

  @media (min-width:769px) {
    width: calc(33% - 16px);
    margin: 0 16px;
  }
`
const Top = styled.div`
  position: relative;
  text-align: center;
  padding: 2em 2em;
  border-bottom: 2px solid #34344A;

  h3 {margin:0;}
`

const Middle = styled.div`
  position: relative;
  padding: 1em 2em;
  flex-grow: 1;

  h5 {
    margin: 2em 0 1em;
  }
`

const Bottom = styled.div`
  position: relative;
  text-align: center;
  padding: 2em 2em;
`

const Row = styled.div`
  display: flex;
  padding-left: 16px;
`

const Col = styled.p`
  flex: 1 1;
  margin-bottom: .5em;
  &:nth-of-type(2){
    text-align: right;
  }
`

const Price = styled.p`
  font-size: 2em;
  font-weight: 700;
`
export default () => (
  
  <StaticQuery
    query={graphql`
    query PricingQuery {
      allContentfulPricing {
        edges {
          node {
            product
            templates {
              name
              price
              id
            }
            features {
              name
              id
            }
            price
            id
          }
        }
      }
    }
  `
    }
  render = {data => (
    <>
     <Section className={`price-cards`}>
        <Grid>
        {data.allContentfulPricing.edges.map(pricing => (
            <Card key={`card_${pricing.node.id}`}>
              <Top key={`top_${pricing.node.id}`}>
                <h3 key={`h3_${pricing.node.id}`}>{pricing.node.product}</h3>
              </Top>
              <Middle key={`middle_${pricing.node.id}`}>
                <h5 key={`template-h5_${pricing.node.id}`}>Templates</h5>
                {pricing.node.templates.map(template => (
                  <Row key={`template-row_${pricing.node.id}-${template.id}`}>
                    <Col key={`template-col-1_${pricing.node.id}-${template.id}`}>{template.name}</Col>
                    <Col key={`template-col-2_${pricing.node.id}-${template.id}`}>${template.price}</Col>
                  </Row>
                )
                )}
                <h5 key={`feature-h5_${pricing.node.id}`}>Features</h5>
                {pricing.node.features.map(feature => (
                  <Row key={`feature-row_${pricing.node.id}-${feature.id}`}>
                    <Col key={`feature-col-1_${pricing.node.id}-${feature.id}`}>{feature.name}</Col>
                    <Col key={`feature-col-2_${pricing.node.id}-${feature.id}`}> - </Col>
                  </Row>
                )
                )}
              </Middle>
              <Bottom key={`bottom_${pricing.node.id}`}>
                <Price key={`price_${pricing.node.id}`}>${pricing.node.price}</Price>
              </Bottom>
            </Card> 
                )
            )}
        </Grid>
    </Section>
    </>
  )}
  />
)
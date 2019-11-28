import React from "react"
import styled from "styled-components"

import Section from "./section"
import Subtitle from "./subtitle"

const Content = styled.div`
  text-align:left;
  max-width:480px;
  margin: 0 2em 0 0;
  @media (min-width: 769px){
    width: 480px;
  }
`
const HeroImage = styled.div`
  @media (min-width: 769px){
    width: 50%;
    margin-left: auto;
  }
  svg {
    max-height: 400px;
    width: 100%;
  }
`

const Grid = styled.div`
  @media (min-width: 769px){
    display: flex;
  }
`

export default props => (
     <Section className={`hero-page`}>
       <Grid>
        <Content>
          <Subtitle content={props.subtitle}></Subtitle>
          <h2>{props.title}</h2>
          <p>{props.body}</p>
        </Content>
        <HeroImage>
          {props.children}
        </HeroImage>
       </Grid>
    </Section>
  )
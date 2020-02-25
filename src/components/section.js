import React from "react"
import styled from "styled-components"

import Container from "./container"

const Section = styled.section`
  padding: 4em 1em;
`
export default props => (
  <Section className={props.className} style={props.style}>
    <Container>{props.children}</Container>
  </Section>
)
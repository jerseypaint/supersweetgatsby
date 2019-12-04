import React from "react"
import styled from "styled-components"

import Section from "./section"

const Content = styled.div`
  text-align:center;
  max-width:480px;
  margin: 0 auto;
`


export default () => (
    <>
     <Section className={`hero-home`} style={{ paddingBottom: 0}}>
      <Content>
        <h2>Sites priced right.</h2>
        <p>We build amazing websites for small businesses. Websites they can use without an in-house developer and for a price they can afford.</p>
      </Content>
    </Section>
    </>
  )
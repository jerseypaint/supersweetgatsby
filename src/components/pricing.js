import React from "react"
import styled from "styled-components"

import Section from "./section"
import Cards from "./price-cards"
import Subtitle from "./subtitle"

const Content = styled.div`
    text-align: center;

    @media (min-width: 769px){
        max-width: 480px;
        margin: 0 auto 1em;
    }
`

export default () => (
    <Section style={{backgroundColor: `#34344A`}}>
        <Content>
            <Subtitle content="Keeping it transparent" />
            <h2>Dead simple pricing</h2>
            <p>Nothing too fancy here, $500 for the first template then $350 for every template after that. We add in common features for free like contact forms and connecting a CMS.</p>
        </Content>
        <Cards />
    </Section>
)

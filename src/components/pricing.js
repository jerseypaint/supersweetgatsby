import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

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
const CTA = styled.div`
    max-width: 800px;
    text-align: center;
    font-size: 1.3em;
    margin: 0 auto;

    a {
        text-decoration: underline;

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
        <CTA>
            <p>Ready to get started? <Link to="/contact">Drop us a line</Link></p>
        </CTA>
    </Section>
)

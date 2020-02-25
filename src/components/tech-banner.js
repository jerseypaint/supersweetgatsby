import React from "react"
import styled from "styled-components"

import Section from "./section"

import WordPressLogo from "../images/wordpress_logo.svg"
import ShopifyLogo from "../images/shopify_logo.svg"
import ReactLogo from "../images/react_logo.svg"
import GatsbyLogo from "../images/gatsby_logo.svg"
import HugoLogo from "../images/hugo_logo.svg"

const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    svg {
        fill: #fff;
        height: 100%;
        width: calc(50% - 2em);
        min-height: 100%;
        max-height: 60px;
        min-width: calc( 16% - 2em);
        margin: 1em;

        &:nth-of-type(1) {
            path {
                fill: #fff;
            }
        }
    }

    @media (min-width: 769px){
        flex-wrap: nowrap;
        justify-content: space-between;

        svg {
            width: auto;
            margin: 0 1em;
        }
    }
`

export default () => (
    <Section className={`tech-banner`}>
        <Flex>
            <WordPressLogo />
            <ShopifyLogo />
            <GatsbyLogo />
            <HugoLogo />
            <ReactLogo />
        </Flex>
    </Section>
)
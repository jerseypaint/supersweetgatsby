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
        max-height: 60px;
        margin: 1em;

        &:nth-of-type(1) {
            path {
                fill: #fff;
            }
        }
    }

    @media (min-width: 769px){
        flex-wrap: no-wrap;
        justify-content: space-between;

        svg {
            width: auto;
            margin: 0 1em;
        }
    }
`

export default () => (
    <Section>
        <Flex>
            <WordPressLogo />
            <ShopifyLogo />
            <GatsbyLogo />
            <HugoLogo />
            <ReactLogo />
        </Flex>
    </Section>
)
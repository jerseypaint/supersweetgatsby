import React from "react"
import styled from "styled-components"

import Section from "./section"

import IconBolt from "../images/bolt.svg"
import IconExpand from "../images/expand-alt.svg"
import IconSeedling from "../images/hand-holding-seedling.svg"

const Flex = styled.div`
    position: relative;

    @media (min-width: 769px) {
        display: flex;
    }
`

const Feature = styled.div`
    flex: 1 1;
    position: relative;
    margin: 1em;
    padding: 2em;
    border: 1px solid #DB2763;
    z-index: 5;

    svg {
        height: 24px;
        width: 24px;
        fill: #fff;
        margin-right: 8px;
    }

    p {
        margin-bottom: 0;
    }
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

export default () => (
    <Section>
        <Flex>
        <Background />
            <Feature>
                <h3><IconBolt /> Fast</h3>
                <p>Speed matters.  We work to decrease load times and better user experience using efficient code and reliable hosting.</p>
            </Feature>
            <Feature>
                <h3><IconExpand /> Responsive</h3>
                <p>Desktops, tablets, and phones  - our websites are built to be accessible across a broad spectrum of devices.</p>
            </Feature>
            <Feature>
                <h3><IconSeedling /> Scalable</h3>
                <p>As your business grows, your site can grow with it. We make it easy for owners to update content and expand their websites - no coding necessary.</p>
            </Feature>
        </Flex>
    </Section>
)
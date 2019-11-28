import React from "react"
import styled from "styled-components"
import Section from "./section"
import Button from "./button"
import Subtitle from "./subtitle"
import Check from "../images/check-circle.svg"

const Flex = styled.div`
    @media (min-width: 769px) {
        display: flex;
    }
`

const Content = styled.div`
    @media (min-width: 769px) {
        width: 50%;
        padding-right: 32px;
    }
`

const Features = styled.div`
    text-align: right;

    @media (min-width: 769px) {
        width: 50%;
    }
`

const Item = styled.div`
    display: flex;
    align-items: center;
    text-align: left;
    background-color: #0A1128;
    padding: 1em 1.6em;
    margin: 1em 0;

    svg {
        display: inline-block;
        fill: #DB2763;
        height: 30px;
        width: 30px;
        flex; 0 auto;
    }

    p {
        display: inline-block;
        margin:0;
        padding: 0 1em;
        flex: 1 1;
    }
`
const Bold = styled.span`
     font-weight: 700;
     color: hsla(100,100%,100%,0.9);   
`

export default () => (
    <Section>
        <Flex>
            <Content>
                <Subtitle content="Custom Website Development"></Subtitle>
                <h2>Small businesses derserve websites that wow too</h2>
                <p>
                Most small businesses have few options when it comes to building their website.
                <br /><br />
                They can either build it themselves using sites like Wix or they can hire Tommy - you know, Cheryl’s son who’s good with computers and just finished taking  a Computer Science course at his high school.
                <br /><br />
                We believe small businesses deserve better, so we offer them better, amazing websites, at a price that is clear and affordable.
                </p>
            </Content>
            <Features>
                <Item>
                    <Check />
                    <p><Bold>Full-stack web development.</Bold> From design to launch, we have you covered every step of the way.</p>
                </Item>
                <Item>
                    <Check />
                    <p><Bold>Made in the USA.</Bold> We do not off-shore any of our work and are available when you are.</p>
                </Item>
                <Item>
                    <Check />
                    <p><Bold>We offer hosting and website management too.</Bold> We take care of security and uptime so that you can take of your business.</p>
                </Item>
                <Button to="/" content="Find out more" />
            </Features>
        </Flex>
    </Section>
)
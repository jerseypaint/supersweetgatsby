import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import Form from "../components/form"
import CrispLink from "../components/crisp-link"
import ChatIcon from "../images/comment-alt.svg"
import CalendarIcon from "../images/calendar-alt.svg"
import EmailIcon from "../images/envelope.svg"

const ButtonWrap = styled.div`
  display: block;
  margin: 0;

  @media (min-width: 769px) {
    flex: 1 1;
    max-width: 480px;
  }
`

const Grid = styled.div`
  @media (min-width: 769px) {
    display: flex;
  }
`

const StyledCrispLink = styled(props => <CrispLink {...props} />)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 1em 0;
  padding: .5em 2em;
  border: none;
  border-radius: 0;
  border: 1px solid #DB2763;
  background-color: transparent;
  color: hsla(100,100%,100%,0.7);
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  -webkit-transition: all .3s ease;
  -moz-transition:    all .3s ease;
  -o-transition:      all .3s ease;
  -ms-transition:     all .3s ease;
  transition:         all .3s ease;

  &:hover {
    box-shadow: rgba(255, 0, 131, 0.5) 0px 0px 40px -10px;
  }

  svg {
    fill: #DB2763;
    height: 30px;
    width: auto;
    margin-left: 1em;
  }
`

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 1em 0;
  padding: .5em 2em;
  border: none;
  border: 1px solid #DB2763;
  background-color: transparent;
  color: hsla(100,100%,100%,0.7);
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  -webkit-transition: all .3s ease;
  -moz-transition:    all .3s ease;
  -o-transition:      all .3s ease;
  -ms-transition:     all .3s ease;
  transition:         all .3s ease;

  &:hover {
    box-shadow: rgba(255, 0, 131, 0.5) 0px 0px 40px -10px;
  }

  svg {
    fill: #DB2763;
    height: 30px;
    width: auto;
    margin-left: 1em;
  }
`
const StyledLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 1em 0;
  padding: .5em 2em;
  border: none;
  border-radius: 0;
  border: 1px solid #DB2763;
  color: hsla(100,100%,100%,0.7);
  font-size: 18px;
  text-decoration:none;
  font-weight: 700;
  
  &:hover{
    text-shadow: none;
    box-shadow: rgba(255, 0, 131, 0.5) 0px 0px 40px -10px;
  }
  svg {
    fill: #DB2763;
    height: 30px;
    width: auto;
    margin-left: 1em;
  }
`

const StyledForm = styled(props => <Form {...props} />)`
  padding-left: 1em;
  opacity: 0;
  transition: opacity 600ms ease;

  &.showForm {
    opacity: 1;
  }

  @media (min-width: 769px) {
    flex: 1 1;
  }
`

const ShowFormButton = () => {
  function handleClick(e) {
    e.preventDefault();
    document.getElementById("contact-form").classList.toggle("showForm");
  }

  return (
    <StyledButton onClick={handleClick}>Send us a message <EmailIcon /></StyledButton>
  )
}

export default props =>(
  <Layout>
    <SEO title="Contact" />
    <Section>
    <h1>Get in touch</h1>
    <p>Reach us however is best for you.</p>
    <Grid>
    <ButtonWrap>
      <StyledLink href={`https://calendly.com/super-sweet-sites/15min`} target={`_blank`}>Schedule a 15 minute call <CalendarIcon /></StyledLink>
      <StyledCrispLink className={props.className}>Chat now with one of our teammates <ChatIcon /></StyledCrispLink>
      <ShowFormButton />
    </ButtonWrap>
    <StyledForm className={props.className} id={`contact-form`} />
    </Grid>
    </Section>
  </Layout>
)
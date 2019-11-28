import React from "react"
import styled from "styled-components"
import Icon from "../images/long-arrow-right.svg"

const Form = styled.form`
  display: block;
`
const Label = styled.label`
display: block;
margin: 0 0 1em;

p {
  min-width: 20%;
  padding: 0 8px;
  font-size: 18px;
  margin: 0 0 .5em;
}

@media (min-width: 769px ){
  display: flex;
  align-items: center;
  margin: 8px 0;

  p {
    text-align: right;
    margin: 0;
  }
}
`
const Input = styled.input`
  display: block;
  border: 2px solid #0A1128;
  border-radius: 0;
  background-color: #34344A;
  color: hsla(100,100%,100%,0.7);
  padding: 8px;
  flex: 1 1;
  width: 100%;

  &::placeholder {
    color: hsla(100,100%,100%,0.7);
  }
`

const TextArea = styled.textarea`
  display: block;
  border: 2px solid #0A1128;
  border-radius: 0;
  background-color: #34344A;
  padding: 8px;
  width: 100%;
  flex: 1 1;

  &::placeholder {
    color: hsla(100,100%,100%,0.7);
  }
`
const Button = styled.button`
  display: flex;
  padding: 8px;
  border: none;
  background-color: transparent;
  color: hsla(100,100%,100%,0.7);
  font-size: 24px;
  font-weight: 700;
  margin-left: auto;
  cursor: pointer;

  svg {
    fill: #DB2763;
    height: 30px;
    width: auto;
    margin: 0;
    margin-left: 10px;
  }
`

const ContactForm = (props) => (
  <Form method="post" netlify-honeypot="bot-field" data-netlify="true" id={props.id} className={props.className} >
    <Input type="hidden" name="bot-field" />
    <Label>
      <p>Name:</p>
      <Input type="text" name="name" id="name" placeholder="John Doe" />
    </Label>
    <Label>
    <p>Email:</p>
      <Input type="email" name="email" id="email" placeholder="johndoe@smallbiz.com" />
    </Label>
    <Label>
    <p>Message:</p>
      <TextArea name="message" id="message" rows="5" placeholder="I need a new website" />
    </Label>
    <Button type="submit">Send <Icon /></Button>
  </Form>
  )

  export default ContactForm
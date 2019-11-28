import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Icon from "../images/long-arrow-right.svg"

const Flex = styled.div`
  display:flex;
  align-items: center;
`

const StyledLink = styled(props => <Link {...props} />)`
  display: inline-block;
  font-size: 24px;
  text-decoration:none;
  font-weight: 700;

  svg {
    fill: #DB2763;
    height: 30px;
    width: auto;
    margin-left: 10px;
  }
`

export default props => (
<StyledLink to={props.to}><Flex>{props.content}<Icon /></Flex></StyledLink>
)
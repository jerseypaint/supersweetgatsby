import React from "react"
import styled from "styled-components"

const Subtitle = styled.h3`
    font-family: "Hindi Siliguri", sans-serif;
    font-weight: 700;
    font-size: 1em;
    text-transform: uppercase;
`

export default props => (
<Subtitle>{props.content}</Subtitle>
)
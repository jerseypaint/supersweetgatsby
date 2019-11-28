import React from "react"
import styled from "styled-components"
import Globe from "../images/globe.svg"

const WorkInfo = styled.div`
    text-align:left;

    p {
        margin-bottom: 2em;
    }
`
const TagWrap = styled.div`
    display: flex;
    flex-flow: row wrap;
`

const Tag = styled.div`
    display: flex;
    align-items:center;
    width: 50%;
    
    h5 {
        font-family: "Hind Siliguri";
    }

    img {
        max-width:24px;
        max-height:24px;
        margin-right: 16px;
        height: 100%;
        object-fit: cover;
    }
`
const SiteLink = styled.a`
  display: inline-block;
  font-size: 18px;
  text-decoration:none;
  margin-top: 1em;
  font-weight: 700;

  svg {
    fill: #DB2763;
    height: 24px;
    width: auto;
    margin-right: 16px;
  }
`

const LinkWrap = styled.div`
    display: flex;
    align-items: center;
`

export default props => (
    <>
    <WorkInfo>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <TagWrap>
            {props.services.map(tag => (
                    <Tag key={tag.id}>
                        <img src={tag.icon.file.url} alt={tag.name} />
                        <h5>{tag.name}</h5>
                    </Tag>   
                )
            )}
        </TagWrap>
        <SiteLink href={props.siteLink} target={`_blank`} ><LinkWrap><Globe />View live site</LinkWrap></SiteLink>
    </WorkInfo>
    </>
  )
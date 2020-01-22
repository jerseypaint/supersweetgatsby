import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"


const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 1100px;
  padding: 1.45em 1.0875em;
`
const Nav = styled.nav`
  display: none;
  flex: 1 1;

  ul {
    display: flex;
    flex: 1;
    justify-content: center;
    margin: 0;

    li {
      list-style: none;
      padding: 1em;

      a {
        color: hsla(100,100%,100%,0.7);
        text-decoration: none;
      }
    }
  }

  @media (min-width: 769px) {
    display: inline-block;
  }
`
const MenuButton = styled.button`
  height: 50px;
  width: 50px;
  padding: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: auto;
  z-index: 90;
  span {
    display: block;
    height: 2px;
    background-color: hsla(100,100%,100%,0.7);
    margin: 8px 0;
    -webkit-transition: transform 400ms ease;
    -moz-transition:    transform 400ms ease;
    -o-transition:      transform 400ms ease;
    -ms-transition:     transform 400ms ease;
    transition:         transform 400ms ease;

    .drawerOpen & {
      margin: 0;
      &:nth-of-type(1) {
        transform: rotate(45deg) translate(0px,1px);
        -moz-transform: rotate(45deg) translate(0px,1px);  
        -webkit-transform: rotate(45deg) translate(0px,1px);  
        -o-transform: rotate(45deg) translate(0px,1px);  
        -ms-transform: rotate(45deg) translate(0px,1px);  
      }
      &:nth-of-type(2) {
        transform: rotate(135deg) translate(0px,1px);
        -moz-transform: rotate(135deg) translate(0px,1px);  
        -webkit-transform: rotate(135deg) translate(0px,1px);  
        -o-transform: rotate(135deg) translate(0px,1px);  
        -ms-transform: rotate(135deg) translate(0px,1px);  
      }
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`

const NavDrawer = styled.div`
  position: absolute;
  top: 0;
  left: -100%;
  height: 100%;
  width: 100%;
  z-index: 10;
  text-align: center;
  background-color: #0A1128;
  opacity: 0;
  transition: transform 100ms ease, opacity 600ms ease;

  .drawerOpen & {
    opacity: 1;
    -webkit-transform: translateX(100%);
    -moz-transform: translateX(100%);
    -o-transform: translateX(100%);
    -ms-transform: translateX(100%);
    transform: translateX(100%);
  }

  ul {
    margin: 90px 0 0;

    li {
      list-style: none;
      padding: 2em;

      a {
        color: hsla(100,100%,100%,0.7);
        text-decoration: none;
        font-size: 2em;
      }
    }
  }

  @media (min-width: 769px) {
    display: none;
  }

`

const Header = () => {
  function handleClick(e) {
    e.preventDefault();
    document.getElementById("site-header").classList.toggle("drawerOpen");
  }

  const data = useStaticQuery(graphql`
    query headerQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
      image: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed (width:150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
      <header id={`site-header`}>
        <Wrap>
          <Link to={`/`}><Img fixed={data.image.childImageSharp.fixed} alt="super sweet sites logo" /></Link>
          <Nav>
            <ul>
              {data.site.siteMetadata.menuLinks.map(link => (
                <li
                  key={link.name}
                >
                  <Link to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Nav>
          <MenuButton onClick={handleClick} name={`menu toggle`} type={`button`}>
            <span />
            <span />
          </MenuButton>
          <NavDrawer>
            <ul>
              {data.site.siteMetadata.menuLinks.map(link => (
                <li
                  key={link.name}
                >
                  <Link to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </NavDrawer>
        </Wrap>
      </header>
  )
}

export default Header

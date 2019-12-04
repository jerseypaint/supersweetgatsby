import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import Container from "./container"

const SiteFooter = styled.footer`
    background-color: #0A1128;
    padding: 2em 0;

    .footer-logo {
        width: 100%;
        margin: 0 0 2em 2em;

        @media (min-width: 769px){
            width: auto;
            margin-bottom: 0;
        }
    }
`
const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media (min-width: 769px){
        flex-wrap: nowrap;
    }
`

const Menu = styled.div`
    margin: 0 2em;
    width: calc(50% - 4em);

    ul {
        margin: 0;

        li {
            list-style: none;

            a {
                color: hsla(100,100%,100%,0.7);
                text-decoration: none;
            }
        }
    }

    @media (min-width: 769px){
        margin-left: auto;
        width: auto;
    }
`

const Socials = styled.div`
    margin: 0 2em;
    width: calc(50% - 4em);
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

    @media (min-width: 769px){
        width: auto;
    }
`

const SaleTag = styled.p`
    margin: 1em 0 0;
    padding: 0 2em;
    text-align: center;
`

const Footer = () => {
    const data = useStaticQuery(graphql`
      query footerQuery {
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
        <SiteFooter id={`colophon`}>
            <Container>
                <Grid>
                    <Link to={`/`} className="footer-logo" ><Img fixed={data.image.childImageSharp.fixed} alt="super sweet sites logo" /></Link>
                    <Menu>
                        <h3>Menu</h3>
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
                    </Menu>
                    <Socials>
                        <h3>Socials</h3>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </Socials>
                </Grid>
                <SaleTag>We built this website with <a href={`https://www.gatsbyjs.org/`}>Gatsby</a> + <a href={`https://www.contentful.com/`}>Contentful</a> + <a href={`https://www.netlify.com/`}>Netlify</a>.</SaleTag>
            </Container>
        </SiteFooter>
    )
  }
  
  export default Footer
  


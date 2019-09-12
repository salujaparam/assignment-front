import React from 'react'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import styles from '../css/error.module.css'
import {graphql} from 'gatsby'
import StyledHero from '../components/StyledHero'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export default function error({data}) {
    return (
        <Layout>
            <StyledHero img={data.errorBcg.childImageSharp.fluid} home="true" className={styles.error}>
                <Banner>
                    <AniLink fade to='/' className="btn-white">back to home page</AniLink>
                </Banner>
            </StyledHero>
        </Layout>
    )
}


export const query = graphql`
{
	errorBcg:file(relativePath: {eq:"errorBcg.png"}){
    childImageSharp{
      fluid(quality: 90, maxWidth: 4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`
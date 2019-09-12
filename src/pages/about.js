import React from 'react'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import {graphql} from 'gatsby'

const about = ({data}) => {
    return (
        <Layout>
            <StyledHero img={data.aboutBcg.childImageSharp.fluid}/>
        </Layout>
    )
}

export const query = graphql`
{
	aboutBcg:file(relativePath: {eq:"aboutBcg.jpeg"}){
    childImageSharp{
      fluid(quality: 90, maxWidth: 4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`

export default about

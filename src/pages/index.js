import React from "react"
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import {graphql} from 'gatsby'
import services from '../constants/services'
import styles from '../css/services.module.css'

export default ({data}) => (
        <Layout>
            <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
                <Banner title="integer bibendum sit amet arcu vel egestas">
                  <div className={styles.cent}>
                  {
                    services.map((item, index) => {
                        return (
                            <article key={index} className={styles.service}>
                                <span>{item.icon}</span>
                                <h4>{item.title}</h4>
                            </article>
                        )
                    })
                }
                  </div>
                </Banner>
            </StyledHero>
            <About />
            <Services />
        </Layout>
)

export const query = graphql`
{
	defaultBcg:file(relativePath: {eq:"home.jpeg"}){
    childImageSharp{
      fluid(quality: 90, maxWidth: 4160){
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`
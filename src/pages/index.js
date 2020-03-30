import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Container, Row, Col} from 'react-bootstrap';

const IndexPage = ({data}) => (

  <Layout>
    <SEO title="Home" />
    <section className="frontSlide">
      <h3>Hola, soy creativo y desarrollador frontend.</h3>
    </section>
    <section className="homeUs">
    <Container className="py-5">
      <Row>
        <Col lg={3}></Col>
        <Col lg={6} className="py-5">
        <br></br>
        <h3 className="text-center">¿Cómo te puedo ayudar?</h3>
          <p class="text-center lead">Creo ideas, websites y videos para que muestren lo mejor de sus productos y / o servicios.</p>
        </Col>
        {/* <Col lg={6}>
          <img src="http://www.rummore.com.ve/wp-content/themes/rummore/img/compus.gif" alt="Rummore" className="img-fluid"/>
        </Col> */}
        <Col lg={3}></Col>
      </Row>
    </Container>
    </section>
    
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            featuredimage
          }
          id
        }
      }
    }
  }
`

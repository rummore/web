import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Container, Row, Col} from 'react-bootstrap';

const IndexPage = ({data}) => (

  <Layout>
    <SEO title="Home" />
    <section className="frontSlide">
      <img src="http://www.rummore.com.ve/wp-content/themes/rummore/img/intro.gif" alt="Rummore" className="img-fluid"/>
    </section>
    <section className="homeUs">
    <Container className="py-5">
      <Row>
        <Col lg={6} className="py-5">
        <br></br>
        <h3 className="text-center">¿Qué hacemos?</h3>
          <p class="text-center lead">Creamos ideas, websites y videos para que nuestros clientes muestren las ventajas de sus productos y / o servicios.</p>
        </Col>
        <Col lg={6}>
          <img src="http://www.rummore.com.ve/wp-content/themes/rummore/img/compus.gif" alt="Rummore" className="img-fluid"/>
        </Col>
      </Row>
    </Container>
    </section>
    <section className="homeClients py-5">
    <Container className="py-5">
    <h3 className="text-center">Clientes</h3>
    {/* <h1>About {data.site.siteMetadata.title}</h1> */}
   

      <Row>
      
        <Col lg={4} className="text-center">
        <img src="http://www.rummore.com.ve/wp-content/themes/rummore/img/logo1.png" alt="Rummore" className="img-fluid"/>
        </Col>
        <Col lg={4} className="text-center">
          <img src="http://www.rummore.com.ve/wp-content/themes/rummore/img/logo2.png" alt="Rummore" className="img-fluid"/>
        </Col>
        <Col lg={4} className="text-center">
          <img src="http://www.rummore.com.ve/wp-content/themes/rummore/img/logo3.png" alt="Rummore" className="img-fluid"/>
        </Col>
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
// query MyQuery {
//   allMarkdownRemark {
//     edges {
//       node {
//         frontmatter {
//           title
//           featuredimage
//         }
//         html
//       }
//     }
//   }
// }


// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
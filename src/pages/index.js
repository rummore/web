import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Container, Row, Col} from 'react-bootstrap';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="frontSlide">
      <img src="http://www.rummore.com.ve/wp-content/themes/rummore/img/intro.gif" alt="Rummore" className="img-fluid"/>
    </section>
    <section className="homeUs">
    <Container className="py-5">
      <Row>
        <Col lg={6} className="py-5">
          {/* <div>
          <h3 class="text-center">Nuestro Trabajo</h3></div> */}
          <p class="text-center lead">Creamos websites, webapps, videos y animaciones para que nuestros clientes muestren las ventajas de sus productos y / o servicios.</p>
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

import PropTypes from "prop-types"
import React from "react"
import  {Container, Row, Col} from 'react-bootstrap';

const Footer = () => (

<footer className="py-3">
    <Container>
        <Row>
            <Col lg={4}>
            <p className="text-center">email: garban.valdeon@gmail.com</p>
            </Col>
            <Col lg={4}>
            <p className="text-center"> @alexeigarban</p>
            </Col>
            <Col lg={4}>
            <p className="text-center">teléfono: +34682081401</p>
            </Col>
        </Row>
    </Container>
</footer>

)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer

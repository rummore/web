import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import  {Navbar, Nav, Container} from 'react-bootstrap';

const Header = ({ siteTitle }) => (

<Navbar /*bg="dark" */ expand="lg" variant="dark" className="bgdark2">
  <Container>
  <Navbar.Brand href="#home">{siteTitle}</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Nosotros</Nav.Link>
      <Nav.Link href="#link">Proyectos</Nav.Link>
      <Nav.Link href="#link">Contacto</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

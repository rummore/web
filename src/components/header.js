import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import  {Navbar, Nav, Container} from 'react-bootstrap';

const Header = ({ siteTitle }) => (

<Navbar /*bg="dark" */ expand="lg" variant="dark" className="bgdark2">
  <Container>
  <Navbar.Brand ><Link to="/" className="logo">{siteTitle}</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href=""><Link to="/">Inicio</Link></Nav.Link>
      <Nav.Link href=""><Link to="/blog">Blog</Link></Nav.Link>
      <Nav.Link href=""><Link to="/proyectos">Proyectos</Link></Nav.Link>
      <Nav.Link href=""><Link to="/contacto">Contacto</Link></Nav.Link>
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

import React from "react"
import Layout from '../components/layout';
import {Form, Button, Container, Col, Row} from 'react-bootstrap';
import SEO from "../components/seo"

export default function Contato() {
  return (
    <Layout>
      <SEO title="Contacto" />
    <h3 className="text-center pt-5">Contacto</h3>
    <p className="text-center">Escríbeme lo que quieras y te responderé a la brevedad posible.</p>
    <Container className="contacto  py-5">
      <Row>
        <Col lg={3}></Col>
        <Col lg={6}>
      <Form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        
        <Form.Group controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="input"  name="nombre" id="nombre"/>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" id="email" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Comentarios</Form.Label>
            <Form.Control as="textarea" rows="3" name="comentarios" id="comentarios" />
        </Form.Group>
        <Button variant="dark" type="submit">
          Enviar
        </Button>
      </Form>
      </Col>
      <Col lg={3}></Col>
      </Row>
      </Container>
    </Layout>
  )
}

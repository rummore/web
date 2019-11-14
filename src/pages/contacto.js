import React from "react"
import Layout from '../components/layout';
import {Form, Button, Container, Col, Row} from 'react-bootstrap';

export default function Contato() {
  return (
    <Layout>
    <h3 className="text-center pt-5">Contacto</h3>
    <p className="text-center">Coméntanos lo que desees, queremos saber de ti.</p>
    <Container className="contacto  py-5">
      <Row>
        <Col lg={3}></Col>
        <Col lg={6}>
      <Form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        
        <Form.Group controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="input"  />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email"  />
          {/* <Form.Text className="text-muted">
            Esta información no será compartida con nadie.
          </Form.Text> */}
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Comentarios</Form.Label>
            <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Button variant="primary" type="submit">
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

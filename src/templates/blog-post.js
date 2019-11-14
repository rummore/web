import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import {Container, Row, Col} from 'react-bootstrap'


export default ({data}) => {
    const post = data.markdownRemark
  return (
    <Layout>
        
        <Container className="proyectos container-fluid py-5">
            <Row>
                <Col lg={12}>
                <h3 className=" py-5"><h1>{post.frontmatter.title}</h1></h3>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </Col>
            </Row>
        </Container>
     
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
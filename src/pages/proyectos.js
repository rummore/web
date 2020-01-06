import React from 'react';
import Layout from '../components/layout'
import {Container ,Row, Col} from 'react-bootstrap';
import { Link } from "gatsby"
import SEO from "../components/seo"

export default function Proyectos({data}) {
  return (
    <Layout>
    <SEO title="Proyectos" />
    <h3 className="text-center py-5">Proyectos</h3>
    <Container className="proyectos container-fluid py-5">
        <Row>
           
        {data.allMarkdownRemark.edges.map(({ node }) => (
            <Col lg={4} key={node.id}>
                <Link to={node.fields.slug}>
                <div className="containerimg">
                    <img src={node.frontmatter.featuredimage} class="img-fluid" alt="Rummore"/>  
                        <div class="overlay">
                            <div class="text"><h2>{node.frontmatter.title}</h2></div>
                    </div>
                </div>
                </Link>
            </Col>
           ))} 
        </Row>
    </Container>
    </Layout>
  );
}


export const query = graphql`
query MyQuery {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/blogContent/"}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            featuredimage
            title
          }
          html
          id
        }
      }
    }
  }
`
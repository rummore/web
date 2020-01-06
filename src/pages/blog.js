import React from 'react';
import Layout from '../components/layout'
import {Container ,Row, Col, Card, Button} from 'react-bootstrap';
import { Link } from "gatsby"
import SEO from "../components/seo"

export default function Blog({data}) {
  return (
    <Layout>
    <SEO title="Blog" />
    <h3 className="text-center py-5">Blog</h3>
    <Container className="proyectos container-fluid py-5">
        <Row>
           
        {data.allMarkdownRemark.edges.map(({ node }) => (
            <Card style={{ width: '100%' }} className="mb-4" key={node.id}>
            {/* <Card.Img variant="top" src="http://holder.js/100px180" /> */}
            <Card.Body>
                <Card.Title>{node.frontmatter.title}</Card.Title>
                <p>{node.frontmatter.date}</p>
                <Link to={node.fields.slug}> <Button variant="dark">Ver más</Button></Link>
            </Card.Body>
            </Card>
            ))}
        </Row>
    </Container>
    </Layout>
  );
}


export const query = graphql`
query MyPostsQuery {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/posts/"}}) {
        edges {
          node {
            frontmatter {
              title
              featuredimage
              date(formatString: "MM/DD/YYYY")
            }
            fields {
              slug
            }
          }
        }
      }
  }
`
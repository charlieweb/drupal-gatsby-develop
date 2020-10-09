// Based on
// https://www.ryanbateman.space/blog/tutorial-gatsbyjs-for-drupalers-or-how-to-jamstack-ify-your-drupal-site-with-gatsbyjs/
import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import BlogTeaser from '../components/blog_teaser'

const BlogPage = ( { data } ) => (
  <Layout>
    <h1>Blog</h1>
    {data.allNodeArticle.edges.map((post) => (
      <BlogTeaser
	slug={post.node.fields.slug}
	key={post.node.id}
	title={post.node.title}
	teaser={post.node.body.processed.substring(0, 300)}
      />
    ) ) }
  </Layout>
)

export const query = graphql`
  query BlogPageQuery {
    allNodeArticle {
      edges {
	node {
	  fields {
	    slug
	  }
	  id
	  title
	  body {
	    processed
	    # summary
	  }
	}
      }
    }
  }
`

export default BlogPage

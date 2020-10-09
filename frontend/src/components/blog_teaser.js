// Based on
// https://www.ryanbateman.space/blog/tutorial-gatsbyjs-for-drupalers-or-how-to-jamstack-ify-your-drupal-site-with-gatsbyjs/
import React from 'react'
import { Link } from 'gatsby'

const BlogTeaser = ({ slug, title, teaser }) => (
  <div className="blog--teaser">
    <Link to={slug}>
      <h2>{title}</h2>
    </Link>
    <p dangerouslySetInnerHTML={{__html: teaser}} />
  </div>
)

export default BlogTeaser

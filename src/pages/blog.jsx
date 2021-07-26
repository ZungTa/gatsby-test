import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';

export default function Blog(props) {
  const {data} = props;

  console.log(data);

  return (
    <div>
      Hello2
      <div>
        <ul>
          {
            data.allMdx.nodes.map(node => (
              <li key={node.slug}>
                <div>
                  date: {node.frontmatter.date}, name: {node.slug}
                </div>
                <div>
                  <MDXRenderer>
                    {node.body}
                  </MDXRenderer>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export const query = graphql`
  query MyQuery {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
        }
        slug
        id
        body
      }
    }
  }
`;
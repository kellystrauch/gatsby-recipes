import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default function Home({data}) {
  return (
    <Layout>
      <div class="row">
        {data.allContentfulRecipes.nodes.map((node, index) => (
          <div class="col-md-4">
            <div class="card mb-4 box-shadow">
              <img class="card-img-top" src={ node.image.file.url } alt={ node.name } data-holder-rendered="true" />
              <div class="card-body">
                <p class="card-text">{node.name}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <a href={node.name} class="btn btn-sm btn-info">View Details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allContentfulRecipes {
    nodes {
      name
      description {
        description
      }
      image {
        file {
          url
        }
      }
    }
  }
}
`
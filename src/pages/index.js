import React from "react"
// import { useState } from "react"
import Layout from '../components/Layout'
import HeroHeader from '../components/HeroHeader'


export default function Home({ data }) {
  console.log(data)
  // const allPost = data.allCustomApi.nodes
  // const {title, description} = data.site.siteMetadata
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <Layout>
      <HeroHeader/>
      {/* {allPost.map((post, index) => {
        return (
          <p key={index}>
            {post.title}
          </p>
        )
      })} */}
    </Layout>
  )
}

// export const query = graphql`
// query Post {
//   allCustomApi {
//     nodes {
//       body
//       title
//     }
//   }
// }
// `
// export const query = graphql`
// query siteInfo {
//   site {
//     siteMetadata {
//       title
//       description
//     }
//   }
// }
// `

var path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
  {
    allContentfulElectronics {
      nodes {
        slug
        title
        description {
          json
          description
        }
      }
    }
  }`)

  console.log(JSON.stringify(result))
  result.data.allContentfulElectronics.nodes.map((obj) => {
    createPage({
      path: `/electronics/${obj.slug}`,
      component: path.resolve('./src/templates/electronics.tsx'),
      context: {
        itemDetail: obj
      },
    })
  });
}





//First time created page by dynamically in gatsbay


// exports.createPages = async function ({ actions }) {

//     actions.createPage({
//         path: "personality",
//         component: require.resolve(`./src/templates/personality.tsx`),
//         context: {
//             // Data passed to context is available
//             // in pageContext props of the template component

//             name: "SUBHAN KHALID",
//             discription:"I'm Rana Subhan from Gcu"
//         },
//     });
//     console.log("End of Gatsby Node File");
// }
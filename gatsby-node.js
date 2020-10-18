// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
  
    // Only update the `/app` page.
    if (page.path.match(/^\/product/)) {
      // page.matchPath is a special key that's used for matching pages
      // with corresponding routes only on the client.
      page.matchPath = "/product/*"
  
      // Update the page.
      createPage(page)
    }
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
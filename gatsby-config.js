/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `tbzyko98t2h1`,
        accessToken: `A1AeA31uKSqKG1gOhxmr-a9PauxkfYqcrrfl0_7fWlI`,
      },
    },
    `gatsby-plugin-sass`
  ],
}

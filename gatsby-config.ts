import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Michael's notes`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
  {
    resolve: `gatsby-theme-garden`,
    options: {
      rootNote: "/readme",
      contentPath: `${__dirname}/notes`,
      parseWikiLinks: true,
    },
  },
  ]
};

export default config;

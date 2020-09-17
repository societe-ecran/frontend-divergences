require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Site test Editions divergences",
    description: "Editions divergences",
    author: "Société Ecrans",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        contentTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "article",
          "category",
          "Evenements"
        ],
        queryLimit: 1000,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-leaflet",
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Palace, Druk, UniveExt,UniveExtObl, ConcoRom "],
          urls: ["/src/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-snipcartv3',
      options: {
        apiKey: 'ZDY5YjAxZGUtMjNiYS00MTIxLWIyNGItMDk2ZTVhYTEzY2ZmNjM3MzUxNDQzNDExMDYzMjg5',
        // styles : 'src/assets/css/snipcart.css'
      }
    },
    "gatsby-plugin-offline",
  ],
}

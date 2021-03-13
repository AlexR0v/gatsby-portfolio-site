module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: `${__dirname}/src/notes/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
  ],
  siteMetadata: {
    title: 'Web разработка',
    description: 'сайт-портфолио специалиста по web разработки',
    copyright: `Copyright ${new Date().getFullYear()} AlexR0v`
  }
}

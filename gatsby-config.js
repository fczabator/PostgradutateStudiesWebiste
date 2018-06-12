module.exports = {
    plugins: [`gatsby-plugin-styled-components`, 
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography.js`,
        },
      },
      {
        resolve: `gatsby-plugin-react-svg`,
        options: {
          include: /assets/
        }
      }
    ],
  };
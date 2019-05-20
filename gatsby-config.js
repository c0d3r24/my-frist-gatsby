module.exports = {
    siteMetadata: {
        title: 'TychHexagon', 
        author: 'Junaid Azhar Shaikh'
    },
    plugins: [
            'gatsby-plugin-sass',
            {
                resolve: 'gatsby-source-filesystem',
                options: {
                    name: 'src',
                    path: `${__dirname}/src/`
                }
            },
            'gatsby-transformer-remark'
            ]
}
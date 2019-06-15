module.exports = {
    title: 'Glendowen.com',
    description: 'Glendowen Craft Shop',
    configureWebpack: {
        resolve: {
            alias: {
                '@images': '~/MEGA/Dev/Projects/glendowen-vuepress/.vuepress/theme/images',
            }
        }
    },
    postcss: {
        plugins: [
            require("tailwindcss")("./tailwind.config.js"),
            require("autoprefixer")
        ]
    },
    markdown: {
        anchor: {
            permalink: false, permalinkBefore: false, permalinkSymbol: ''
        }
    },
}
module.exports = {
    title: 'Glendowen.com',
    description: 'Glendowen Craft Shop',
    postcss: {
        plugins: [
            require("tailwindcss")("./tailwind.config.js"),
            require("autoprefixer")
        ]
    }
}
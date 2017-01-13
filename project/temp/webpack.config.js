// Do not change
// at all ....
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: "./app/Root.jsx",
   output: {
        filename: "public/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            },
            {
                test: /\.html$/,
                loader: "html"
            }
        ]
    },
    htmlLoader: {
        ignoreCustomFragments: [/\{\{.*?}}/],
        root: path.resolve(__dirname, '/public'),
        attrs: ['img:src', 'link:href']
    },
    plugins: [
        new ExtractTextPlugin('public/main.css', { allChunks: true })
    ]
}

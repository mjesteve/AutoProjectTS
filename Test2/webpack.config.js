//https://github.com/midudev/webpack-paso-a-paso-live-coding/blob/master/webpack.config.js

const HtmlWebpackPugin = require('html-webpack-plugin');

const jsBabelReact = {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }
            }

module.exports = {
    output: {
        filename: 'app.[contenthash].js'
    },
    module: {
        rules:[ jsBabelReact ]
    },
    plugins: [
        new HtmlWebpackPugin({
            title: 'Webpack paso a paso',
            template: 'src/index.html'
        })
    ]
}
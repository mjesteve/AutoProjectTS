
//Format Common.js

"use strict";

const path = require('path');
const package = require('./package.json');

const library = package.name;
const filename = `${package.name}_${package.version}.js`;
const mapname = `${package.name}_map_${package.version}.js`;

module.exports = [{
    entry: './src/index.ts',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    optimization: {
        minimize: false
    },
    output: {
        path: path.resolve(__dirname, 'bundles'),
        filename: filename,
        library: library,
        libraryTarget: "var",
        globalObject: "this"
    }
}, {
    name: 'mapdebug',
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: mapname,
        library: library,
        path: path.resolve(__dirname, 'bundles'),
    }
}];
//Format ESModules

import path from 'path';
import { fileURLToPath } from 'url';
//import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//const packagejson = readFileSync(new URL('./package.json', import.meta.url));

const libraryname = 'autoprojectTs'; //`${packagejson.name}`;
const filename = 'autoprojectTs.js'; //`${packagejson.name}_${packagejson.version}.js`;
const mapname = 'autoprojectTs_map.js'; //`${packagejson.name}_map_${packagejson.version}.js`;

export default [{
    name: 'production',
    entry: './src/index.ts',
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
    optimization: {
        minimize: false
    },
    output: {
        filename: filename,
        library: libraryname,
        libraryTarget: "var",
        globalObject: "this",
        path: path.resolve(__dirname, 'bundles')
    }
}, {
    name: 'mapdebug',
    entry: './src/index.ts',
    devtool: 'inline-source-map',
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
    output: {
        filename: filename,
        library: libraryname,
        path: path.resolve(__dirname, 'bundles'),
    }
}, {
    name: 'Debugwebpack',
    entry: './src/index.ts',
    devtool: 'cheap-source-map',
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
    output: {
        path: path.resolve(__dirname, 'bundles'),
        filename: filename,
        library: libraryname,
        devtoolModuleFilenameTemplate: '[absolute-resource-path]' //Esto generará la ruta absoluta de sus archivos de origen en los mapas de origen
    }
}];
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        web: './src/sample.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'sample.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                exclude: /node_modules/,
                test: /\.js[x]?$/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2017']
                }
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: 'Version= ' + require('./package.json').version,
            raw: false, entryOnly: true,
        })
    ]
};

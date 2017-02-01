var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        './src/app.js'
        ],
    output: {
        path: __dirname,
        filename: './src/static/bundle.js',
        publicPath: 'src'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react']
            }

        ]
    },
    devServer: {
        contentBase: "./src",
        hot: true,
        port: 3000
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
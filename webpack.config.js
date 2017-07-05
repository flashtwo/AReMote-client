const webpack = require('webpack');
const path = require('path');
const config = {};

config.context = path.resolve(__dirname, 'src'),

config.entry = [
    '@webcomponents/custom-elements/src/native-shim',
    '@webcomponents/custom-elements',
    './app.js'
];

config.output = {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
};

config.module = {
    rules: [{
        test: /\.sass$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader'
        ]
    }, {
        test: /\.(pug)$/,
        use: [
            'html-loader',
            'pug-html-loader?pretty&exports=false'
        ]
    }, {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: [{
            loader: 'babel-loader',
            options: {
                presets: ['es2015']
            }
        }]
    }, {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
    }]
};

config.devtool = 'eval-source-map' // Default development sourcemap

module.exports = config;
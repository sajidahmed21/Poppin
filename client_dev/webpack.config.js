module.exports = {
    entry: './src/js/app.js',
    output: {
        path: './cordova-app/www/js',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};

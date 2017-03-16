module.exports = {
    context: __dirname,
    entry: './src/Index.js',
    output: {
        path: __dirname,
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ["react-hot-loader","babel-loader"]
            },
            {
                test: /\.html$/,
                loader: "file-loader?name=[name].[ext]",
            }
        ]
    }
};
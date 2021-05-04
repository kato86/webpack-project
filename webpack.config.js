module.exports = {
    entry: [ //where webpack start
        './src/index.js'
    ],
    output: { //where webpack end
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    }
}

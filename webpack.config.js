var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: [`${__dirname}/src/js/index.jsx`,`${__dirname}/src/css/style.scss`],
    output: {
        path: `${__dirname}/dist/js`,
        filename: "bundle.js"
    },
    watch:true,
    resolve:{
        extensions:['.jsx','.css','.js']
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['env']
                }
            }
        },
        {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["react",'env']
                }
            }
        }, 
        // {
        // test:/\.css$/,
        // use :ExtractTextPlugin.extract({
        //     use:{
        //         loader:'css-loader',
        //         options:{
        //             url:false,
        //         }
        //     }
        // })  
        // }, 
        {
        test:/\.scss$/,
        use :ExtractTextPlugin.extract({
            use:[{
                loader:'css-loader',
                options:{
                    url:false,
                }
            },"sass-loader"
        ]
        })  
        },
    ]
    },
    resolve: {
        extensions: ['.js','.jsx','.css','.scss']
    },
    plugins:[
        new ExtractTextPlugin({
            filename:"../css/stlyes.css"
        })
    ]
}
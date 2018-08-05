const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: {
        app: './src/index.js',
        helper: './src/helper.js'
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js'
    },
    devtool: devMode ? 'source-map' : 'eval-sourcemap',
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [{
                    loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader
                }, {
                    loader: "css-loader"
                    // options: {
                    //     outputPath: 'css/',
                    //     sourceMap: true
                    // }
                }, {
                    loader: "sass-loader",
                    options: {
                        // outputPath: 'styles/',
                        sourceMap: true
                        // includePaths: ["src/assets/img"]
                    }
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'img/'
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            hash: true
        }),
        new MiniCssExtractPlugin({
            // filename: devMode ? '[name].css' : '[name].[hash].css',
            // chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        })
    ]
}

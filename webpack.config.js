const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	entry: [
		'./src/js/index.js',
		'./src/scss/index.scss'
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.min.js'
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: 'src/index.html'
		}),
		new ExtractTextPlugin({
			filename: 'index.min.css'
		})
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}, {
				test: /\.html$/,
				use: [{
					loader: 'html-loader',
					options: { 
						minimize: true
					}
				}]
			}, {
				test: /\.scss$/,
				use: ['extracted-loader'].concat(ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{ loader: 'css-loader', options: { importLoaders: 1 } },
						'postcss-loader'
					]
				}))
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'src'),
		hot: true,
		inline: true,
		watchContentBase: true,
		compress: true,
		port: 3000
	}
};

module.exports = config;

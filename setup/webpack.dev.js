//The path module provides utilities for working with file and directory paths
const path = require('path');
// Generates HTML file
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Clears dev directory to remove redundant files
const CleanWebpackPlugin = require('clean-webpack-plugin');
// Allow common config to be merged
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
// Store dev path
const Dev_Path = path.resolve(__dirname, '../dev');

module.exports = Merge(CommonConfig, {
	output: {
		filename: 'bundle.js',
		path: Dev_Path
	},
	devtool: 'eval-source-map',
	devServer: {
		port: 7777,
		host: 'localhost',
		historyApiFallback: true,
		noInfo: false,
		stats: 'minimal',
		contentBase: Dev_Path
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../src/template.ejs'),
			inject: 'body',
			minify: {
				removeScriptTypeAttributes: true
			}
		}),
		new CleanWebpackPlugin(
			[Dev_Path],
			{
				root: path.resolve(__dirname , '..'),
				verbose: true
			}
		)
	]
});

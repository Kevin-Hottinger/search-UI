//The path module provides utilities for working with file and directory paths
const path = require('path');
// Allow common config to be merged
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
// Generates HTML file
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Clears dist directory to remove redundant files
const CleanWebpackPlugin = require('clean-webpack-plugin');
//Require webpack uglify to prodive uglify config
const webpack = require('webpack');
// Store prod path
const Prod_Path = path.resolve(__dirname, '../dist');

module.exports = Merge(CommonConfig, {
	output: {
		filename: 'bundle.js',
		path: Prod_Path
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../src/template.ejs'),
			inject: 'body',
			minify: {
				collapseWhitespace: true,
				maxLineLength: 80,
				removeScriptTypeAttributes: true
			}
		}),
		new CleanWebpackPlugin(
			[Prod_Path],
			{
				root: path.resolve(__dirname , '..'),
				verbose: true
			}
		),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			beautify: false,
			mangle: {
				screw_ie8: true,
				keep_fnames: true
			},
			compress: {
				screw_ie8: true,
				warnings: false
			},
			comments: false
		})
	]
});

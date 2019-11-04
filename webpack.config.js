const path = require('path');
// include the js minification plugin
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
// include the css extraction and minification plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
	entry: ['./js/src/app.js', './styles/src/app.scss'],
	output: {
		filename: './js/build/app.js',
		path: path.resolve(__dirname)
	},
	module: {
		rules: [
			// perform js babelization on all .js files
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				exclude: /node_modules/
			},
			// compile all .scss files to plain old css
			{
				test: /\.(sass|scss)$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			}
		]
	},
	plugins: [
		// extract css into dedicated file
		new MiniCssExtractPlugin({
			filename: './styles/build/main.min.css'
		}),
		new VueLoaderPlugin()
	],
	optimization: {
		minimizer: [
			// enable the js minification plugin
			new UglifyJSPlugin({
				cache: true,
				parallel: true
			}),
			// enable the css minification plugin
			new OptimizeCSSAssetsPlugin({})
		]
	}
};
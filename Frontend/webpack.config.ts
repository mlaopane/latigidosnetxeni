import webpack from 'webpack';
import sass from 'sass';
import fibers from 'fibers';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: `${__dirname}/dist`,
    },

    // Dev server
    devServer: {
        compress: true,
        port: 5000,
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    // File resolution
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['.ts', '.tsx', '.js', '.json', '.scss', '.sass', 'css'],
    },

    // Plugins
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],

    // Module
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
            },

            // Handle '.scss' and '.sass' files
            {
                test: /\.s(c|a)ss$/,
                loader: 'sass-loader',
                options: {
                    implementation: sass,
                    fiber: fibers,
                },
            },
        ],
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
};

export default config;

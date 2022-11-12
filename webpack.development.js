// Modules/Plugins
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        client: {
            logging: 'none',
            overlay: false,
        },
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            title: 'Vue template',
            alwaysWriteToDisk: true,
        }),
        new VueLoaderPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: 'public/favicon.ico',
                    to: '.',
                },
                {
                    from: 'public/manifest.json',
                    to: '.',
                },
                {
                    from: 'public/app-icons/',
                    to: './app-icons/',
                },
            ],
        }),
        new StylelintPlugin({
            files: [path.resolve(__dirname, 'src/**/*.{vue,scss}')],
            fix: true,
        }),
        new ESLintPlugin({
            files: [path.resolve(__dirname, 'src/**/*.{vue,js}')],
            fix: true,
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        clean: true,
        publicPath: '/',
    },
};

// Modules/Plugins
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
// const { GenerateSW } = require('workbox-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    devtool: false,
    devServer: {
        client: {
            logging: 'none',
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
                    from: 'public/assets/icons/app/',
                    to: './assets/icons/app/',
                },
            ],
        }),
        // new GenerateSW({
        //     cleanupOutdatedCaches: true,
        //     skipWaiting: true,
        //     clientsClaim: true,
        // }),
        new MiniCssExtractPlugin({
            filename: 'styles/[contenthash].css',
            chunkFilename: 'styles/[contenthash].css',
        }),
    ],
    optimization: {
        runtimeChunk: 'single',
        minimizer: [
            '...',
            new CssMinimizerPlugin(),
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[contenthash].js',
        clean: true,
        publicPath: '/vue-template/', // TODO '/' for all (need .env)
    },
};

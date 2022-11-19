// Modules/Plugins
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

// Configs
const devtoolConfig = false;
const devServerConfig = {
    client: {
        logging: 'none',
    },
    historyApiFallback: true,
};
const pluginsConfig = [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.html'),
        title: 'Template PWA',
        alwaysWriteToDisk: true,
    }),
    new VueLoaderPlugin(),
    new CopyPlugin({
        patterns: [
            {
                from: './public/favicon.ico',
                to: '.',
            },
            {
                from: './public/manifest.json',
                to: '.',
            },
            {
                from: './public/assets/icons/app/',
                to: './assets/icons/app/',
            },
        ],
    }),
    new GenerateSW({
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true,
    }),
    new MiniCssExtractPlugin({
        filename: 'styles/[contenthash].css',
        chunkFilename: 'styles/[contenthash].css',
    }),
];
const moduleConfig = {
    rules: [
        {
            test: /\.vue$/i,
            loader: 'vue-loader',
        },
        {
            test: /\.(sa|sc|c)ss$/i,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        additionalData: '// Additional data is working!!!',
                    },
                },
            ],
            generator: {
                filename: 'styles/[contenthash][ext]',
            },
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'assets/images/[contenthash][ext]',
            },
        },
        {
            test: /\.(ttf|otf|eot|woff|woff2)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'assets/fonts/[contenthash][ext]',
            },
        },
    ],
};
const optimizationConfig = {
    runtimeChunk: 'multiple',
    minimizer: [
        '...',
        new CssMinimizerPlugin(),
    ],
};
const outputConfig = {
    publicPath: '/', // TODO '/' for all (need .env)
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[contenthash].js',
    sourceMapFilename: '[id][contenthash].map',
    chunkFilename: '[id][contenthash].js',
    clean: true,
};

module.exports = ({
    devtoolConfig,
    devServerConfig,
    pluginsConfig,
    moduleConfig,
    optimizationConfig,
    outputConfig,
});

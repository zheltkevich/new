// Modules/Plugins
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const process = require('process');
const appVersion = process.env.npm_package_version;

// Configs
const devtoolConfig = 'source-map';
const devServerConfig = {
    static: {
        directory: path.resolve(__dirname, '../public'),
    },
    hot: 'only',
    compress: true,
    client: {
        logging: 'none',
        overlay: false,
    },
    historyApiFallback: true,
};
const pluginsConfig = [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../public/index.html'),
        title: `Dev mode (v${appVersion})`,
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
    new StylelintPlugin({
        files: [path.resolve(__dirname, '../src/**/*.{vue,scss}')],
        fix: true,
    }),
    new ESLintPlugin({
        files: [path.resolve(__dirname, '../src/**/*.{vue,js}')],
        fix: true,
    }),
];
const moduleConfig = {
    rules: [
        {
            test: /\.vue$/,
            loader: 'vue-loader',
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                'style-loader',
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
                filename: 'styles/[name][ext]',
            },
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'assets/images/[name][ext]',
            },
        },
        {
            test: /\.(ttf|otf|eot|woff|woff2)$/i,
            type: 'asset/resource',
            generator: {
                filename: 'assets/fonts/[name][ext]',
            },
        },
    ],
};
const outputConfig = {
    publicPath: '/', // TODO '/' for all (need .env)
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js',
    clean: true,
};

const updatePluginsConfig = () => { // eslint-disable-line no-unused-vars
    const workboxPlugin = new GenerateSW({
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true,
    });

    Object.defineProperty(workboxPlugin, 'alreadyCalled', {
        get() {
            return false;
        },
        set() {
            console.log('Setting alreadyCalled property'); // eslint-disable-line no-console
        },
    });

    pluginsConfig.push(workboxPlugin);
};

// Uncomment next line if working workbox in dev mode needed
// updatePluginsConfig();

module.exports = ({
    devtoolConfig,
    devServerConfig,
    pluginsConfig,
    moduleConfig,
    outputConfig,
});

// Modules/Plugins
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Configuration utils
const getMode = () => process.env.NODE_ENV;
const isProductionMode = getMode() === 'production';
const isDevelopmentMode = getMode() === 'development';
const resolveSettings = () => {
    if (isProductionMode) return require('./webpack.production.js');
    else if (isDevelopmentMode) return require('./webpack.development.js');
};
const printMessage = () => {
    if (isProductionMode) return '=====================\n|| Production mode ||\n=====================\n';
    else if (isDevelopmentMode) return '######################\n** Development mode **\n######################\n';
};
const { devtool, devServer, plugins, optimization, output } = resolveSettings();

console.info(printMessage()); // eslint-disable-line no-console

// Settings
module.exports = {
    mode: getMode(),
    entry: {
        index: path.resolve(__dirname, 'src/app.js'),
    },
    devtool,
    devServer,
    stats: 'minimal',
    resolve: {
        alias: {
            '@docs': path.resolve(__dirname, 'public/assets/docs/'),
            '@fonts': path.resolve(__dirname, 'public/assets/fonts/'),
            '@images': path.resolve(__dirname, 'public/assets/images/'),
            '@icons': path.resolve(__dirname, 'public/assets/icons/'),
            '@': path.resolve(__dirname, 'src/'),
            '@css': path.resolve(__dirname, 'src/styles/css/'),
            '@scss': path.resolve(__dirname, 'src/styles/scss/'),
            '@modules': path.resolve(__dirname, 'src/js/modules/'),
            '@utils': path.resolve(__dirname, 'src/js/utils/'),
            '@router': path.resolve(__dirname, 'src/vue/router/'),
            '@views': path.resolve(__dirname, 'src/vue/views/'),
            '@components': path.resolve(__dirname, 'src/vue/components/'),
        },
    },
    plugins,
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    isProductionMode ? MiniCssExtractPlugin.loader : 'style-loader',
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
    },
    optimization,
    output,
};

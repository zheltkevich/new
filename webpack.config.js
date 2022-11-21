// Modules/Plugins
const path = require('path');

const productionConfig = require('./config/production.js');
const developmentConfig = require('./config/development.js');

// Configuration utils
const getMode = () => process.env.NODE_ENV;
const isProductionMode = getMode() === 'production';
const isDevelopmentMode = getMode() === 'development';
const resolveSettings = () => {
    if (isProductionMode) return productionConfig;
    else if (isDevelopmentMode) return developmentConfig;
};
const { devtoolConfig, devServerConfig, pluginsConfig, moduleConfig, optimizationConfig, outputConfig } = resolveSettings();
const printMessage = () => {
    if (isProductionMode) return '=====================\n|| Production mode ||\n=====================\n';
    else if (isDevelopmentMode) return '######################\n** Development mode **\n######################\n';
};

console.info(printMessage()); // eslint-disable-line no-console

// Settings
module.exports = {
    mode: getMode(),
    entry: {
        index: path.resolve(__dirname, 'src/app.js'),
    },
    devtool: devtoolConfig,
    devServer: devServerConfig,
    stats: 'minimal',
    resolve: {
        alias: {
            '@fonts': path.resolve(__dirname, 'public/assets/fonts/'),
            '@images': path.resolve(__dirname, 'public/assets/images/'),
            '@icons': path.resolve(__dirname, 'public/assets/icons/'),
            '@': path.resolve(__dirname, 'src/'),
            '@pwa': path.resolve(__dirname, 'src/pwa/'),
            '@css': path.resolve(__dirname, 'src/styles/css/'),
            '@scss': path.resolve(__dirname, 'src/styles/scss/'),
            '@modules': path.resolve(__dirname, 'src/js/modules/'),
            '@utils': path.resolve(__dirname, 'src/js/utils/'),
            '@router': path.resolve(__dirname, 'src/vue/router/'),
            '@store': path.resolve(__dirname, 'src/vue/store/'),
            '@views': path.resolve(__dirname, 'src/vue/views/'),
            '@components': path.resolve(__dirname, 'src/vue/components/'),
        },
    },
    plugins: pluginsConfig,
    module: moduleConfig,
    optimization: optimizationConfig,
    output: outputConfig,
};

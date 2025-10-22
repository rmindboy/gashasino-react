// karma.conf.js
const path = require('path');

module.exports = function (config) {
config.set({
    frameworks: ['jasmine'],
    files: [
    'src/**/*.test.jsx'
    ],
    preprocessors: {
    'src/**/*.test.jsx': ['webpack']
    },
    webpack: {
    mode: 'development',
    module: {
        rules: [
        {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
            presets: [
                '@babel/preset-env',
                '@babel/preset-react'
                ]
            }
        }
    }]},
    resolve: {
    extensions: [ '.js', '.jsx']
    }
    },
    browsers: ['ChromeHeadless'],
    reporters: ['progress'],
    singleRun: true,
});
};

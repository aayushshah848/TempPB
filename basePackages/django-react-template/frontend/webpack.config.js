const isProductionBuild = process.argv[process.argv.indexOf('--mode') + 1] === 'production';
console.log(`Using ${isProductionBuild ? "production" : "development"} build`);
const path = require('path');

module.exports = {
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
        alias: isProductionBuild ? {} : {
            'react-dom': '@hot-loader/react-dom'
        }
    },

    // https://webpack.js.org/configuration/devtool/
    // https://webpack.js.org/guides/typescript/#source-maps
    devtool: isProductionBuild ? 'nosources-source-map' : 'source-map',
    devServer: {
        static: './',
        hot: true,
        host: 'localhost',
        port: 8080,
        webSocketServer: 'ws',
        client: {
            progress: true,
        },
        allowedHosts: 'all',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Headers": "*"
        }
    },

    watchOptions: {
        ignored: './node_modules',
    },

    mode: isProductionBuild ? 'production' : 'development',
    optimization: {
        usedExports: true,
        removeAvailableModules: isProductionBuild,
        removeEmptyChunks: isProductionBuild,
    },

    output: {
        path: './static',
        filename: isProductionBuild ? 'main.js' : './static/main.js',
        chunkFilename: isProductionBuild ? 'pages/[id].[chunkhash].js' : 'pages/[id].js',
        library: {
            type: "global",
        }
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)?$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, 'src'),
                use: [
                    "ts-loader"
                ]
            }/*,
            {
                test: /\.css$/,
                use: [{
                    loader: 'postcss-loader',
                    options: {
                        config: {
                            path: 'postcss.config.js'
                        },
                        ident: 'postcss',
                        sourceMap: true,
                    }
                }]
            }*/
        ]
    },
};
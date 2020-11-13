const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        app: './src/index.ts'
    },
    plugins: [],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        library: 'sip',
        libraryTarget: 'var',
        libraryExport: 'default'
    },
    optimization: {
        minimize: true,
        providedExports: true,
        moduleIds: 'deterministic',
        mangleExports: true,
        chunkIds: 'deterministic',
        mangleWasmImports: true,
        removeAvailableModules: true,
        removeEmptyChunks: true,
        realContentHash: true,
        mergeDuplicateChunks: true,
        flagIncludedChunks: true
    }
};

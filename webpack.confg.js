const path = require('path');

module.exports = {
    mode: 'development', // "production" | "development" | "none"

    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: './src/index.ts',

    output: {
        path: path.join(__dirname, "dist"),
        filename: "main.js"
    },

    module: {
        rules: [{
            // 拡張子 .ts の場合
            test: /\.ts$/,
            // TypeScriptをコンパイルする
            use: 'ts-loader'    
        }]
    },
    // import文で .tsファイルを解決するため
    resolve: {
        modules: [
            "node_modules", // node_modules内も対象とする
        ],
        extensions: [
            '.ts',
            '.js' // node_modulesのライブラリの読み込みに必要
        ]
    }
};
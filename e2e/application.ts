var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('../webpack.prod');
var deasync = require('deasync');

import * as webpack from 'webpack';

export class Application {
    private devServer;

    constructor(public port: number) {

    }
    
    start() {
        let isBundled = false;
        const compiler = webpack(webpackConfig, (err, stats) => {
            isBundled = true;
            if (err)
                console.error(err);
        });

        let isStarted = false;
        this.devServer = new WebpackDevServer(compiler);
        this.devServer.listen(this.port, () => {
            isStarted = true;
        });

        deasync.loopWhile(() => !isBundled || !isStarted);
    }

    stop() {
        this.devServer.close();
    }
}
import { ServerLoader, ServerSettings } from 'ts-express-decorators';
import path = require('path');
import config from './config/config';

import { Logger } from 'ts-log-debug';

const rootDir = path.resolve(__dirname);
const errorLogger = new Logger('error');
errorLogger.appenders.set('everything', {
  type: 'file',
  filename: config.log_dir + '/error.log',
  maxLogSize: 10485760,
  backups: 10,
  compress: true
});
errorLogger.appenders.set('console-log', {
  type: 'console'
});


@ServerSettings({
  rootDir,
  mount: {
    '': `${rootDir}/**/**Controller.js`
  },
  port: config.port || 3000,
  acceptMimes: ['application/json'],
  componentsScan: [
    `${rootDir}/log/*.js`,
    `${rootDir}/**/**Service.js`
  ],
  serveStatic: {
    '/': path.join(rootDir, '../public')
  }
})
export default class Server extends ServerLoader {

  // constructor () {
  //   super();
  // }

  public $onReady () {
    console.log('Server started...');
  }

  public $onServerInitError (err) {
    console.error(err);
  }
}

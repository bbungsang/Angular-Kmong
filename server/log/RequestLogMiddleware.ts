import {
  ConverterService,
  OverrideMiddleware,
  Req,
  Response,
  ResponseData,
  SendResponseMiddleware
} from 'ts-express-decorators/lib';
import { Logger } from 'ts-log-debug';
import * as Express from 'express';
import config from '../config/config';


const accessLogger = new Logger('access');
accessLogger.appenders.set('everything', {
  type: 'file',
  filename: config.log_dir + '/access.log',
  maxLogSize: 10485760,
  backups: 10,
  compress: true
});


@OverrideMiddleware(SendResponseMiddleware)
export class RequestLogMiddleware extends SendResponseMiddleware {
  constructor(private service: ConverterService) {
    super(service);
  }

  public use(@ResponseData() data: any, @Response() response: Express.Response, @Req() request?: any) {
    if (request.id) {
      accessLogger.debug(
        request.tagId,
        (request.user) ? request.user.username : 'anonymous',
        request.method,
        request.originalUrl || request.url,
        response.statusCode,
        request.body,
        new Date().getTime() - request.tsedReqStart.getTime(), 'ms');
      delete request.id;
    }

    const type = typeof data;

    if (data !== undefined) {
      if (data === null || ['number', 'boolean', 'string'].indexOf(type) > -1) {
        response.send(String(data));
      } else {
        response.setHeader('Content-Type', 'text/json');
        response.json(this.service.serialize(data));
      }
    }
  }
}

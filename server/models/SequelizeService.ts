import * as Sequelize from 'sequelize';
import config from '../config/config';
import * as path from 'path';
import * as fs from 'fs';
import { Service } from 'ts-express-decorators';


@Service()
export default class SequelizeService {
  models: Sequelize.ModelsHashInterface;
  Sequelize: Sequelize.SequelizeStatic;
  sequelize: Sequelize.Sequelize;
  private Op;

  constructor () {
    this.models = {};
    this.Op = Sequelize.Op;
    const dbConfig = config.db;
    const operatorsAliases = {
      $eq: this.Op.eq,
      $ne: this.Op.ne,
      $gte: this.Op.gte,
      $gt: this.Op.gt,
      $lte: this.Op.lte,
      $lt: this.Op.lt,
      $not: this.Op.not,
      $in: this.Op.in,
      $notIn: this.Op.notIn,
      $is: this.Op.is,
      $like: this.Op.like,
      $notLike: this.Op.notLike,
      $iLike: this.Op.iLike,
      $notILike: this.Op.notILike,
      $regexp: this.Op.regexp,
      $notRegexp: this.Op.notRegexp,
      $iRegexp: this.Op.iRegexp,
      $notIRegexp: this.Op.notIRegexp,
      $between: this.Op.between,
      $notBetween: this.Op.notBetween,
      $overlap: this.Op.overlap,
      $contains: this.Op.contains,
      $contained: this.Op.contained,
      $adjacent: this.Op.adjacent,
      $strictLeft: this.Op.strictLeft,
      $strictRight: this.Op.strictRight,
      $noExtendRight: this.Op.noExtendRight,
      $noExtendLeft: this.Op.noExtendLeft,
      $and: this.Op.and,
      $or: this.Op.or,
      $any: this.Op.any,
      $all: this.Op.all,
      $values: this.Op.values,
      $col: this.Op.col
    };

    const opt = {
      dialect: 'postgres',
      host: dbConfig.host || 'localhost',
      logging: false,
      timezone: '+09:00',
      operatorsAliases
    };

    this.sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, opt);
    fs.readdirSync(__dirname)
      .filter(file => {
        return (
          (file.indexOf('.') !== 0) &&
          (!file.startsWith('SequelizeService')
          && !file.startsWith('association')
          && !file.endsWith('map'))
        );
      })
      .forEach(file => {
        const importedModel = this.sequelize['import'](path.join(__dirname, file));
        this.models[(importedModel as any).name] = importedModel;
      });

    const association = require('./association');
    association.init(this.models);

    Object.keys(this.models).forEach(modelName => {
      if ('associate' in this.models[modelName]) {
        (this.models[modelName] as any).associate(this.models);
      }
    });
  }
}

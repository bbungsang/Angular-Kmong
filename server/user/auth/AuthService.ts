import { Service } from 'ts-express-decorators';
import SequelizeService from '../../models/SequelizeService';


@Service()
export default class AuthService {
  constructor (private sequelize: SequelizeService) { }

  async getUserList () {
    try {
      return this.sequelize.models.Users
        .findAll();
    } catch (err) {
      console.log(err);
    }
  }
}

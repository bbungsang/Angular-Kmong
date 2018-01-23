import { Controller, Get } from 'ts-express-decorators';
import AuthService from './AuthService';


@Controller('/users')
export default class AuthController {
  constructor (private authService: AuthService) { }

  @Get('')
  async getUserList () {
    return this.authService
      .getUserList();
  }
}

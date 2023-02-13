import { Inject, Controller, Body, Post, Get } from '@nestjs/common';
import { CreateUserInput } from './inputs/create-user.input';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  @Inject()
  private readonly service: UserService;

  @Post('/create')
  createUser(@Body() param: CreateUserInput) {
    return this.service.createUser(param);
  }

  @Get()
  getUser() {
    return this.service.getUser();
  }

  // deleteUser(@Args('id') id: string) {
  //   return this.service.deleteUser(id);
  // }
}

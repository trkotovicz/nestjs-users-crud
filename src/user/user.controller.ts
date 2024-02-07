import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { UserService } from './user.service';
// import { LogInterceptor } from 'src/interceptors/log.interceptor';

// @UseInterceptors(LogInterceptor) // para utilizar em todos os métodos do controller
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  // @UseInterceptors(LogInterceptor) para executar em um único método
  @Post()
  async create(@Body() data: CreateUserDTO) {
    return await this.userService.create(data);
  }

  @Get()
  async list() {
    return await this.userService.list();
  }

  @Get(':id')
  async readOne(@Param('id', ParseIntPipe) id) {
    return await this.userService.readOne(id);
  }

  @Put(':id')
  async update(@Body() data: UpdatePutUserDTO, @Param('id', ParseIntPipe) id) {
    return await this.userService.update(id, data);
  }

  @Patch(':id')
  async updatePartial(
    @Body() data: UpdatePatchUserDTO,
    @Param('id', ParseIntPipe) id,
  ) {
    return await this.userService.updatePartial(id, data);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id) {
    return await this.userService.delete(id);
  }
}
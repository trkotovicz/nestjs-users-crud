import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { UserEntity } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async create(data: CreateUserDTO) {
    if (await this.userRepository.exists({ where: { email: data.email } })) {
      throw new BadRequestException('Esse email já existe.');
    }

    const salt = await bcrypt.genSalt();
    data.password = await bcrypt.hash(data.password, salt);

    const user = await this.userRepository.insert(data);
    return await this.readOne(user.identifiers[0].id);
  }

  async list() {
    return await this.userRepository.find();
  }
  async readOne(id: number) {
    await this.exists(id);
    return await this.userRepository.findOne({ where: { id } });
  }

  async update(id: number, data: UpdatePutUserDTO) {
    await this.exists(id);

    const salt = await bcrypt.genSalt();
    data.password = await bcrypt.hash(data.password, salt);

    try {
      await this.userRepository.update(id, { ...data });
      return this.readOne(id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async updatePartial(id: number, data: UpdatePatchUserDTO) {
    await this.exists(id);

    if (data.password) {
      const salt = await bcrypt.genSalt();
      data.password = await bcrypt.hash(data.password, salt);
    }

    try {
      await this.userRepository.update(id, { ...data });
      return this.readOne(id);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async delete(id: number) {
    await this.exists(id);
    try {
      // const result = await this.userRepository.delete(id);
      // if (result.affected) return 'Usuário deletado com sucesso';
      await this.userRepository.delete(id);
      return true;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async exists(id: number) {
    if (!(await this.userRepository.exists({ where: { id } })))
      throw new NotFoundException(`O usuário ${id} não existe`);
  }
}

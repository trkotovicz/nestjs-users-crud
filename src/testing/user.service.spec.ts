import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../enums/roles.enum';
import { UpdatePatchUserDTO } from '../user/dto/update-patch-user.dto';
import { UpdatePutUserDTO } from '../user/dto/update-put-user.dto';
import { UserEntity } from '../user/entity/user.entity';
import { UserService } from '../user/user.service';
import { userEntityList } from './mocks/user-entity-list.mock';
import { userRepositoryMock } from './mocks/user-repository.mock';

describe('UserService', () => {
  let userService: UserService;
  let userRepository: Repository<UserEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, userRepositoryMock],
    }).compile();

    userService = module.get<UserService>(UserService);
    userRepository = module.get(getRepositoryToken(UserEntity));
  });

  it('Validar a definição do serviço', () => {
    expect(userService).toBeDefined();
    expect(userRepository).toBeDefined();
  });

  describe('Create', () => {
    it('method create', async () => {
      // const data: CreateUserDTO = {
      //   birthAt: '2000-01-01',
      //   email: 'john@email.com',
      //   name: 'John Wick',
      //   password: 'Senh@123',
      //   role: Role.User,
      // };
      // jest.spyOn(userRepository, 'exists').mockResolvedValueOnce(false);
      // const result = await userService.create(data);
      // expect(result).toEqual(userEntityList[0]);
    });
  });

  describe('Read', () => {
    it('method list', async () => {
      const result = await userService.list();
      expect(result).toEqual(userEntityList);
    });
    it('method readOne', async () => {
      const result = await userService.readOne(1);
      expect(result).toEqual(userEntityList[0]);
    });
  });

  describe('Update', () => {
    it('method update', async () => {
      const data: UpdatePutUserDTO = {
        birthAt: '2000-01-01',
        email: 'john@email.com',
        name: 'John Wick',
        password: 'Senh@123',
        role: Role.User,
      };
      const result = await userService.update(1, data);
      expect(result).toEqual(userEntityList[0]);
    });

    it('method updatePartial', async () => {
      const data: UpdatePatchUserDTO = {
        birthAt: '2000-01-01',
        email: 'john@email.com',
        name: 'John Wick',
        password: 'Senh@123',
        role: Role.User,
      };
      const result = await userService.updatePartial(1, data);
      expect(result).toEqual(userEntityList[0]);
    });
  });

  describe('Delete', () => {
    it('method delete', async () => {
      const result = await userService.delete(1);
      expect(result).toEqual(true);
      // expect(result).toEqual('Usuário deletado com sucesso');
    });
  });
});

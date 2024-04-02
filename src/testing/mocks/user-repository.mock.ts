import { getRepositoryToken } from '@nestjs/typeorm';
import { UserEntity } from '../../user/entity/user.entity';
import { userEntityList } from './user-entity-list.mock';

export const userRepositoryMock = {
  provide: getRepositoryToken(UserEntity),
  useValue: {
    exists: jest.fn().mockResolvedValue(true),
    insert: jest.fn().mockResolvedValue(userEntityList[0]),
    find: jest.fn().mockResolvedValue(userEntityList),
    findOne: jest.fn().mockResolvedValue(userEntityList[0]),
    update: jest.fn(),
    delete: jest.fn(),
  },
};

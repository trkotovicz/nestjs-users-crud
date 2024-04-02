import { Role } from '../../enums/roles.enum';
import { UserEntity } from '../../user/entity/user.entity';

export const userEntityList: UserEntity[] = [
  {
    name: 'John Wick',
    email: 'john@email.com',
    birthAt: new Date('2000-01-01'),
    id: 1,
    password: '$2b$10$EYrQw6voKQVuG7h4WQ6ssOYNvtGJgRWcKz5Bc8DKIqBbmMFC2v/1W',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Charles Bukowski',
    email: 'bukowski@email.com',
    birthAt: new Date('1940-01-01'),
    id: 2,
    password: '$2b$10$EYrQw6voKQVuG7h4WQ6ssOYNvtGJgRWcKz5Bc8DKIqBbmMFC2v/1W',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Homer Simpson',
    email: 'homer@email.com',
    birthAt: new Date('1980-01-01'),
    id: 3,
    password: '$2b$10$EYrQw6voKQVuG7h4WQ6ssOYNvtGJgRWcKz5Bc8DKIqBbmMFC2v/1W',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

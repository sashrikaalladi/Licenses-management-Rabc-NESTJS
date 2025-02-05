// // src/users/users.module.ts
// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { UsersService } from './users.service';
// import { UsersController } from './users.controller';
// import { User } from './user.entity';
// import { Role } from '../roles/role.entity';
// import { RolesModule } from '../roles/roles.module';

// @Module({
//   imports: [TypeOrmModule.forFeature([User, Role]), RolesModule],
//   providers: [UsersService],
//   controllers: [UsersController],
// })
// export class UsersModule {}

// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './user.entity';
import { RolesModule } from '../roles/roles.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    RolesModule, // Import RolesModule to provide RolesService
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}

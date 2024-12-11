import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from 'src/entities/user.entity'
import * as bcryptjs from 'bcryptjs'
@Injectable()
export class UsersService {
  async hashPassword(password: string): Promise<string> {
    const salt = await bcryptjs.genSalt(10)
    return bcryptjs.hash(password, salt)
  }

  async comparePassword(password: string, hash: string): Promise<boolean> {
    return bcryptjs.compare(password, hash)
  }

  async create(createUserDto: CreateUserDto) {
    const hashPassword = await this.hashPassword(createUserDto.password)
    const user = { ...createUserDto, password: hashPassword, active: true }
  }

  async findAll() {
    const users = await User.createQueryBuilder('user')
      .leftJoinAndSelect('user.userRoles', 'userRoles')
      .leftJoinAndSelect('userRoles.role', 'role')
      .leftJoinAndSelect('role.rolePermissions', 'rolePermissions')
      .leftJoinAndSelect('rolePermissions.permission', 'permission')
      .getMany()
    const result = users.map((user) => this.formatUserResponse(user))
    return result
  }

  async findOne(id: string) {
    const user = await User.findOne({
      where: { id },
      relations: ['userRoles', 'userRoles.role', 'userRoles.role.rolePermissions', 'userRoles.role.rolePermissions.permission']
    })
    return { ...this.formatUserResponse(user), message: `Get ${id} sucess`, status: 1000 }
  }

  formatUserResponse(user: User) {
    const roles: string[] = user.userRoles.map((userRole) => userRole.role.name)
    const permissions: string[] = user.userRoles
      .map((userRole) => userRole.role.rolePermissions.map((item) => item.permission.name))
      .reduce((a, b) => [...a, ...b])
    return { roles, permissions, ...user, userRoles: undefined, password: undefined }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}

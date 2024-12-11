import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { ApiTags, ApiResponse, ApiParam } from '@nestjs/swagger'
import { HttpStatus } from '@nestjs/common'
import { TransformInterceptor } from 'src/interceptor/transform.interceptor'

@ApiTags('User')
@UseInterceptors(TransformInterceptor)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Create User Successfully',
    schema: {
      example: {
        status: 1000,
        message: 'Created User Successfully',
        data: {
          id: '337a1df5-5d7c-4c54-8c4d-2f00f77f4ce9',
          email: 'ntdanh1298@gmail.com',
          active: true,
          phone: '+84937533477',
          roles: ['ADMIN'],
          createdAt: '',
          updatedAt: '',
          deletedAt: null,
          createdBy: '',
          updatedBy: '',
          deletedBy: null
        }
      }
    }
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Create User Successfully',
    schema: {
      example: {
        status: 1000,
        message: 'Have some issue with body',
        data: null
      }
    }
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Create User Successfully',
    schema: {
      example: {
        status: 1000,
        message: 'Have something wrong',
        data: null
      }
    }
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }

  @Get()
  findAll() {
    return this.usersService.findAll()
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    description: 'The ID of the user to retrieve',
    example: '8eb5e37b-343e-4926-99d9-d172c3bbbad1'
  })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id)
  }
}

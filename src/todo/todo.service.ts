import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
      const data: Prisma.TodoCreateInput = {
        ...createTodoDto,
      };

      return await this.prisma.todo.create({ data });
  }
  async findAll() {
    return await this.prisma.todo.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.todo.findUnique({ where: { id } });
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
      return await this.prisma.todo.update({
        where: {
          id,
        },
        data: updateTodoDto,
      });
  }

  async remove(id: string) {
    return await this.prisma.todo.delete({ where: { id } });
  }
}

import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Todo } from '../entities/todo.entity';

export class CreateTodoDto extends Todo {
  @IsString()
  @ApiProperty({
    example: 'Tarefa 1',
    description: `Nome da sua nota`,
  })
  name: string;
  @IsString()
  @ApiProperty({
    example: 'tarefa1 desc',
    description: `Desrição da sua nota`,
  })
  description: string;

  @IsString()
  userId: string
}

import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { User } from '../common/decorators/user.decorator';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { QueryTaskDto } from './dto/query-task.dto';

@ApiTags('Tasks')
@ApiBearerAuth('JWT')
@UseGuards(JwtAuthGuard)
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  create(@User() user, @Body() dto: CreateTaskDto) {
    return this.tasksService.create(user.userId, dto);
  }

  @Get()
  findAll(@User() user, @Query() q: QueryTaskDto) {
    return this.tasksService.findAll(user.userId, q);
  }

  @Get(':id')
  findOne(@User() user, @Param('id') id: string) {
    return this.tasksService.findOne(user.userId, id);
  }

  @Patch(':id')
  update(@User() user, @Param('id') id: string, @Body() dto: UpdateTaskDto) {
    return this.tasksService.update(user.userId, id, dto);
  }

  @Delete(':id')
  remove(@User() user, @Param('id') id: string) {
    return this.tasksService.remove(user.userId, id);
  }
}

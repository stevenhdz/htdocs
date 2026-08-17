import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { QueryTaskDto } from './dto/query-task.dto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async create(ownerId: string, dto: CreateTaskDto) {
    return this.prisma.task.create({
      data: {
        title: dto.title,
        description: dto.description,
        status: (dto.status as any) ?? 'PENDING',
        dueDate: dto.dueDate ? new Date(dto.dueDate) : undefined,
        ownerId
      }
    });
  }

  async findAll(ownerId: string, q: QueryTaskDto) {
    const page = q.page ?? 1;
    const limit = q.limit ?? 10;
    const skip = (page - 1) * limit;

    const where: any = { ownerId };
    if (q.status) where.status = q.status;
    if (q.search) {
      where.OR = [
        { title: { contains: q.search, mode: 'insensitive' } },
        { description: { contains: q.search, mode: 'insensitive' } }
      ];
    }

    let orderBy: any = { createdAt: 'desc' };
    if (q.sort) {
      const [field, dir] = q.sort.split(':');
      if (field && ['asc','desc'].includes((dir ?? '').toLowerCase())) {
        orderBy = { [field]: dir.toLowerCase() };
      }
    }

    const [items, total] = await Promise.all([
      this.prisma.task.findMany({ where, skip, take: limit, orderBy }),
      this.prisma.task.count({ where })
    ]);

    return {
      page, limit, total, pages: Math.ceil(total / limit), items
    };
  }

  async findOne(ownerId: string, id: string) {
    const task = await this.prisma.task.findFirst({ where: { id, ownerId } });
    if (!task) throw new NotFoundException('Task not found');
    return task;
  }

  async update(ownerId: string, id: string, dto: UpdateTaskDto) {
    await this.findOne(ownerId, id);
    return this.prisma.task.update({
      where: { id },
      data: { ...dto, dueDate: dto.dueDate ? new Date(dto.dueDate) : undefined }
    });
  }

  async remove(ownerId: string, id: string) {
    await this.findOne(ownerId, id);
    await this.prisma.task.delete({ where: { id } });
    return { deleted: true };
  }
}

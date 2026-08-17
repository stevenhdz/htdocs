import { Test } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { PrismaService } from '../prisma/prisma.service';

describe('TasksService', () => {
  let service: TasksService;
  const prismaMock = {
    task: {
      create: jest.fn(),
      findMany: jest.fn(),
      count: jest.fn(),
      findFirst: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    }
  };

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        TasksService,
        { provide: PrismaService, useValue: prismaMock }
      ],
    }).compile();
    service = module.get<TasksService>(TasksService);
    jest.clearAllMocks();
  });

  it('create() crea una tarea', async () => {
    prismaMock.task.create.mockResolvedValue({ id: 't1', title: 'A', ownerId: 'u1' });
    const res = await service.create('u1', { title: 'A' } as any);
    expect(res.id).toBe('t1');
  });

  it('findAll() pagina', async () => {
    prismaMock.task.findMany.mockResolvedValue([{ id: 't1' }]);
    prismaMock.task.count.mockResolvedValue(1);
    const res = await service.findAll('u1', { page: 1, limit: 10 } as any);
    expect(res.total).toBe(1);
    expect(res.items).toHaveLength(1);
  });
});

import { IsEnum, IsInt, IsOptional, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class QueryTaskDto {
  @ApiPropertyOptional({ description: 'Búsqueda en título/desc' })
  @IsOptional() @IsString()
  search?: string;

  @ApiPropertyOptional({ enum: ['PENDING','IN_PROGRESS','DONE'] })
  @IsOptional() @IsEnum(['PENDING','IN_PROGRESS','DONE'] as any)
  status?: 'PENDING'|'IN_PROGRESS'|'DONE';

  @ApiPropertyOptional({ example: 1 })
  @IsOptional() @Type(() => Number) @IsInt() @Min(1)
  page?: number = 1;

  @ApiPropertyOptional({ example: 10 })
  @IsOptional() @Type(() => Number) @IsInt() @Min(1)
  limit?: number = 10;

  @ApiPropertyOptional({ example: 'createdAt:desc', description: 'campo:asc|desc' })
  @IsOptional() @IsString()
  sort?: string; // e.g. 'dueDate:asc'
}

import { IsEnum, IsOptional, IsString, IsDateString, Length } from 'class-validator';
import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty()
  @IsString()
  @Length(1, 120)
  title: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ enum: ['PENDING','IN_PROGRESS','DONE'] })
  @IsOptional()
  @IsEnum(['PENDING','IN_PROGRESS','DONE'] as any)
  status?: 'PENDING'|'IN_PROGRESS'|'DONE';

  @ApiPropertyOptional()
  @IsOptional()
  @IsDateString()
  dueDate?: string;
}

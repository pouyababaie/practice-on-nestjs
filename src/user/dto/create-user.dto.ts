import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    description: 'required',
  })
  property1: string;

  @ApiPropertyOptional({
    type: Number,
    description: 'not required',
  })
  property2: number;
}

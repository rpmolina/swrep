import { ApiProperty } from '@nestjs/swagger';

export class AppInfoDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  version: string;

  @ApiProperty()
  timestamp: string;
}

export class AppCheckDto {
  @ApiProperty()
  status: string;

  @ApiProperty()
  timestamp: string;
}

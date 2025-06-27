import { ApiProperty } from '@nestjs/swagger';

export class VehicleDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  model: string;

  @ApiProperty()
  manufacturer: string;

  @ApiProperty()
  cost_in_credits: string;

  @ApiProperty()
  length: string;

  @ApiProperty()
  max_atmosphering_speed: string;

  @ApiProperty()
  crew: string;

  @ApiProperty()
  passengers: string;

  @ApiProperty()
  cargo_capacity: string;

  @ApiProperty()
  consumables: string;

  @ApiProperty()
  vehicle_class: string;

  @ApiProperty({ type: [String] })
  pilots: string[];

  @ApiProperty({ type: [String] })
  films: string[];

  @ApiProperty()
  created: string;

  @ApiProperty()
  edited: string;

  @ApiProperty()
  url: string;
}

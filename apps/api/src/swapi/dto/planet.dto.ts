import { ApiProperty } from '@nestjs/swagger';

export class PlanetDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  rotation_period: string;

  @ApiProperty()
  orbital_period: string;

  @ApiProperty()
  diameter: string;

  @ApiProperty()
  climate: string;

  @ApiProperty()
  gravity: string;

  @ApiProperty()
  terrain: string;

  @ApiProperty()
  surface_water: string;

  @ApiProperty()
  population: string;

  @ApiProperty({ type: [String] })
  residents: string[];

  @ApiProperty({ type: [String] })
  films: string[];

  @ApiProperty()
  created: string;

  @ApiProperty()
  edited: string;

  @ApiProperty()
  url: string;
}

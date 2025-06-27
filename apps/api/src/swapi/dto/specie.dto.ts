import { ApiProperty } from '@nestjs/swagger';

export class SpecieDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  classification: string;

  @ApiProperty()
  designation: string;

  @ApiProperty()
  average_height: string;

  @ApiProperty()
  skin_colors: string;

  @ApiProperty()
  hair_colors: string;

  @ApiProperty()
  eye_colors: string;

  @ApiProperty()
  average_lifespan: string;

  @ApiProperty()
  homeworld: string;

  @ApiProperty()
  language: string;

  @ApiProperty({ type: [String] })
  people: string[];

  @ApiProperty({ type: [String] })
  films: string[];

  @ApiProperty()
  created: string;

  @ApiProperty()
  edited: string;

  @ApiProperty()
  url: string;
}

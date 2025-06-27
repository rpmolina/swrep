import { ApiProperty } from '@nestjs/swagger';

export class PersonDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  height: string;

  @ApiProperty()
  mass: string;

  @ApiProperty()
  hair_color: string;

  @ApiProperty()
  skin_color: string;

  @ApiProperty()
  eye_color: string;

  @ApiProperty()
  birth_year: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  homeworld: string;

  @ApiProperty({ type: [String] })
  films: string[];

  @ApiProperty({ type: [String] })
  species: string[];

  @ApiProperty({ type: [String] })
  vehicles: string[];

  @ApiProperty({ type: [String] })
  starships: string[];

  @ApiProperty()
  created: string;

  @ApiProperty()
  edited: string;

  @ApiProperty()
  url: string;
}

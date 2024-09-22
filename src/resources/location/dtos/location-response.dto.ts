import { ApiProperty } from '@nestjs/swagger';

export class LocationResponseDTO {
  @ApiProperty()
  lat: string;

  @ApiProperty()
  lng: string;

  @ApiProperty()
  country: string;

  @ApiProperty()
  city: string;
}

import { Injectable } from '@nestjs/common';

import * as geoip from 'geoip-lite';

import { LocationResponseDTO } from './dtos';

@Injectable()
export class LocationService {
  getGeoData(ip: string): LocationResponseDTO {
    const geo = geoip.lookup(ip);

    if (!geo) {
      return null;
    }

    const { ll, country, city } = geo;

    const location: LocationResponseDTO = {
      lat: ll ? ll[0].toString() : '',
      lng: ll ? ll[1].toString() : '',
      country: country || '',
      city: city || '',
    };

    return location;
  }
}

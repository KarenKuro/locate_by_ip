import { Controller, Get, Query } from '@nestjs/common';

import { isIP } from 'net';

import { ResponseManager } from '@common/helpers';
import { ERROR_MESSAGES } from '@common/messages';

import { LocationService } from './location.service';
import { LocationResponseDTO } from './dtos';

@Controller()
export class LocationController {
  constructor(private readonly _locationService: LocationService) {}

  @Get()
  getLocation(@Query('ip') ip: string): LocationResponseDTO {
    if (!ip || (isIP(ip) !== 4 && isIP(ip) !== 6)) {
      throw ResponseManager.buildError(ERROR_MESSAGES.INCORRECT_IP_FORMAT);
    }

    const location = this._locationService.getGeoData(ip);

    if (!location) {
      throw ResponseManager.buildError(ERROR_MESSAGES.IP_NOT_FOUND);
    }

    return location;
  }
}

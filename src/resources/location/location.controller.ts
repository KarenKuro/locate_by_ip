import { Controller, Get, HttpStatus, Query } from '@nestjs/common';

import { isIP } from 'net';

import { ResponseManager } from '@common/helpers';
import { ERROR_MESSAGES } from '@common/messages';

import { LocationService } from './location.service';
import { LocationResponseDTO } from './dtos';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller()
export class LocationController {
  constructor(private readonly _locationService: LocationService) {}

  @ApiOperation({ summary: 'Location determination by ip' })
  @ApiTags('Location')
  @ApiQuery({ name: 'ip', type: String })
  @ApiResponse({
    status: 200,
    type: LocationResponseDTO,
    description: 'Location response',
  })
  @ApiBadRequestResponse({
    status: 400,
    description: 'err_incorrect_ip_format',
  })
  @ApiNotFoundResponse({ status: 404, description: 'err_ip_not_found' })
  @ApiInternalServerErrorResponse({
    status: 500,
    description: 'Internal Server Error',
  })
  @Get()
  getLocation(@Query('ip') ip: string): LocationResponseDTO {
    if (!ip || (isIP(ip) !== 4 && isIP(ip) !== 6)) {
      throw ResponseManager.buildError(ERROR_MESSAGES.INCORRECT_IP_FORMAT);
    }

    const location = this._locationService.getGeoData(ip);
    if (!location) {
      throw ResponseManager.buildError(
        ERROR_MESSAGES.IP_NOT_FOUND,
        HttpStatus.NOT_FOUND,
      );
    }

    return location;
  }
}

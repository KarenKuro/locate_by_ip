import { HttpException, HttpStatus } from '@nestjs/common';

import { IMessageResponse, IValidationErrorsResponse } from '@common/models';

export class ResponseManager {
  static buildError(
    error: IMessageResponse | IValidationErrorsResponse = null,
    status: HttpStatus = HttpStatus.BAD_REQUEST,
  ) {
    throw new HttpException(error, status);
  }
}

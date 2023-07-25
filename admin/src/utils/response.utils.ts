import {Response} from "express"
import find from "lodash/find"
import get from "lodash/get"

import {errorTypes, commonResponse, httpCodes} from "../constants"

export const successHandler = <DataResponse>(
  response: Response,
  dataResponse?: DataResponse,
): void => {
  response.json({
    ...commonResponse,
    statusCode: httpCodes.success,
    response: dataResponse,
  } as APIResponse)
}

export const errorHandler = (
  response: Response,
  errorCode: number,
  error?: CatchError,
): void => {
  const isErrorNumber = error && typeof error === "number"
  const renderErrorCode: number =
    error && isErrorNumber ? (error as number) : errorCode
  const {code, message}: ErrorType =
  find(errorTypes, {code: renderErrorCode}) || errorTypes.notFoundError
  const renderMessage = isErrorNumber ? message : error
  const errorMessage = get(
    error,
    "message",
    renderMessage || errorTypes.notFoundError.message,
  )

  response.status(code)
  response.json({
    ...commonResponse,
    statusCode: renderErrorCode,
    response: {
      code,
      title: get(error, "name", "Error"),
      message: errorMessage,
    },
  } as APIResponse)
}

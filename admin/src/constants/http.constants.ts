export const commonHeaders = {
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
}

export const commonResponse = {
  headers: commonHeaders,
}

export const httpMethods = {
  get: "GET",
  options: "OPTIONS",
  post: "POST",
}

export enum httpCodes {
  success = 200,
  NoContent = 204,
  badRequestError = 400,
  unauthorizedError = 401,
  forbiddenError = 403,
  notFoundError = 404,
  serverError = 500,
}

export const errorTypes: ErrorTypes = {
  badRequest: {
    code: httpCodes.badRequestError,
    message: "Invalid request",
  },
  unauthorizedError: {
    code: httpCodes.unauthorizedError,
    message: "The authorization token was invalid",
  },
  forbiddenError: {
    code: httpCodes.forbiddenError,
    message:
      "The user tried to access a resource they do not have access to. This could include a missing role.",
  },
  notFoundError: {
    code: httpCodes.notFoundError,
    message: "Resource or endpoint not found",
  },
  serverError: {
    code: httpCodes.serverError,
    message: "An unexpected error occurred.",
  },
}

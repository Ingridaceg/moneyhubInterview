"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorTypes = exports.httpCodes = exports.httpMethods = exports.commonResponse = exports.commonHeaders = void 0;
exports.commonHeaders = {
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
};
exports.commonResponse = {
    headers: exports.commonHeaders,
};
exports.httpMethods = {
    get: "GET",
    options: "OPTIONS",
    post: "POST",
};
var httpCodes;
(function (httpCodes) {
    httpCodes[httpCodes["success"] = 200] = "success";
    httpCodes[httpCodes["badRequestError"] = 400] = "badRequestError";
    httpCodes[httpCodes["unauthorizedError"] = 401] = "unauthorizedError";
    httpCodes[httpCodes["forbiddenError"] = 403] = "forbiddenError";
    httpCodes[httpCodes["notFoundError"] = 404] = "notFoundError";
    httpCodes[httpCodes["serverError"] = 500] = "serverError";
})(httpCodes || (exports.httpCodes = httpCodes = {}));
exports.errorTypes = {
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
        message: "The user tried to access a resource they do not have access to. This could include a missing role.",
    },
    notFoundError: {
        code: httpCodes.notFoundError,
        message: "Resource or endpoint not found",
    },
    serverError: {
        code: httpCodes.serverError,
        message: "An unexpected error occurred.",
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5jb25zdGFudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb25zdGFudHMvaHR0cC5jb25zdGFudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSxhQUFhLEdBQUc7SUFDM0IsOEJBQThCLEVBQUUsR0FBRztJQUNuQyw2QkFBNkIsRUFBRSxHQUFHO0lBQ2xDLGNBQWMsRUFBRSxrQkFBa0I7Q0FDbkMsQ0FBQTtBQUVZLFFBQUEsY0FBYyxHQUFHO0lBQzVCLE9BQU8sRUFBRSxxQkFBYTtDQUN2QixDQUFBO0FBRVksUUFBQSxXQUFXLEdBQUc7SUFDekIsR0FBRyxFQUFFLEtBQUs7SUFDVixPQUFPLEVBQUUsU0FBUztJQUNsQixJQUFJLEVBQUUsTUFBTTtDQUNiLENBQUE7QUFFRCxJQUFZLFNBT1g7QUFQRCxXQUFZLFNBQVM7SUFDbkIsaURBQWEsQ0FBQTtJQUNiLGlFQUFxQixDQUFBO0lBQ3JCLHFFQUF1QixDQUFBO0lBQ3ZCLCtEQUFvQixDQUFBO0lBQ3BCLDZEQUFtQixDQUFBO0lBQ25CLHlEQUFpQixDQUFBO0FBQ25CLENBQUMsRUFQVyxTQUFTLHlCQUFULFNBQVMsUUFPcEI7QUFFWSxRQUFBLFVBQVUsR0FBZTtJQUNwQyxVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUUsU0FBUyxDQUFDLGVBQWU7UUFDL0IsT0FBTyxFQUFFLGlCQUFpQjtLQUMzQjtJQUNELGlCQUFpQixFQUFFO1FBQ2pCLElBQUksRUFBRSxTQUFTLENBQUMsaUJBQWlCO1FBQ2pDLE9BQU8sRUFBRSxxQ0FBcUM7S0FDL0M7SUFDRCxjQUFjLEVBQUU7UUFDZCxJQUFJLEVBQUUsU0FBUyxDQUFDLGNBQWM7UUFDOUIsT0FBTyxFQUNMLG9HQUFvRztLQUN2RztJQUNELGFBQWEsRUFBRTtRQUNiLElBQUksRUFBRSxTQUFTLENBQUMsYUFBYTtRQUM3QixPQUFPLEVBQUUsZ0NBQWdDO0tBQzFDO0lBQ0QsV0FBVyxFQUFFO1FBQ1gsSUFBSSxFQUFFLFNBQVMsQ0FBQyxXQUFXO1FBQzNCLE9BQU8sRUFBRSwrQkFBK0I7S0FDekM7Q0FDRixDQUFBIn0=
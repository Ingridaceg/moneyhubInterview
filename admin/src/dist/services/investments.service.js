"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInvestmentsById = void 0;
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../constants");
const utils_1 = require("../utils");
const getInvestmentsById = (route, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const responseData = yield axios_1.default.get(route);
        if (responseData.status !== constants_1.httpCodes.success) {
            (0, utils_1.errorHandler)(response, constants_1.httpCodes.serverError);
        }
        else {
            (0, utils_1.successHandler)(response, responseData.data);
        }
    }
    catch (error) {
        (0, utils_1.errorHandler)(response, constants_1.httpCodes.serverError);
    }
});
exports.getInvestmentsById = getInvestmentsById;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52ZXN0bWVudHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZpY2VzL2ludmVzdG1lbnRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQXlCO0FBQ3pCLDRDQUFzQztBQUV0QyxvQ0FBcUQ7QUFFOUMsTUFBTSxrQkFBa0IsR0FBRyxDQUNoQyxLQUFhLEVBQ2IsUUFBa0IsRUFBa0IsRUFBRTtJQUN0QyxJQUFJO1FBQ0YsTUFBTSxZQUFZLEdBQUcsTUFBTSxlQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzNDLElBQUksWUFBWSxDQUFDLE1BQU0sS0FBSyxxQkFBUyxDQUFDLE9BQU8sRUFBRTtZQUM3QyxJQUFBLG9CQUFZLEVBQ1YsUUFBUSxFQUNSLHFCQUFTLENBQUMsV0FBVyxDQUN0QixDQUFBO1NBQ0Y7YUFBTTtZQUNMLElBQUEsc0JBQWMsRUFBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQzVDO0tBRUY7SUFBQyxPQUFPLEtBQWMsRUFBRTtRQUN2QixJQUFBLG9CQUFZLEVBQ1YsUUFBUSxFQUNSLHFCQUFTLENBQUMsV0FBVyxDQUN0QixDQUFBO0tBQ0Y7QUFDSCxDQUFDLENBQUEsQ0FBQTtBQXBCWSxRQUFBLGtCQUFrQixzQkFvQjlCIn0=
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInvestmentById = void 0;
const constants_1 = require("../constants");
const investments_service_1 = require("../services/investments.service");
const utils_1 = require("../utils");
const getInvestmentById = (response, id) => __awaiter(void 0, void 0, void 0, function* () {
    if (!id) {
        (0, utils_1.errorHandler)(response, constants_1.httpCodes.badRequestError);
    }
    const route = `${constants_1.investmentsRoute}${id}`;
    yield (0, investments_service_1.getInvestmentsById)(route, response);
});
exports.getInvestmentById = getInvestmentById;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52ZXN0bWVudHMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbnRyb2xsZXIvaW52ZXN0bWVudHMuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSw0Q0FBd0Q7QUFDeEQseUVBQWtFO0FBQ2xFLG9DQUFxQztBQUU5QixNQUFNLGlCQUFpQixHQUFHLENBQy9CLFFBQWtCLEVBQ2xCLEVBQWlCLEVBQ0YsRUFBRTtJQUNqQixJQUFJLENBQUMsRUFBRSxFQUFFO1FBQ1AsSUFBQSxvQkFBWSxFQUFDLFFBQVEsRUFBRSxxQkFBUyxDQUFDLGVBQWUsQ0FBQyxDQUFBO0tBQ2xEO0lBQ0QsTUFBTSxLQUFLLEdBQUcsR0FBRyw0QkFBZ0IsR0FBRyxFQUFFLEVBQUUsQ0FBQTtJQUN4QyxNQUFNLElBQUEsd0NBQWtCLEVBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFBO0FBQzNDLENBQUMsQ0FBQSxDQUFBO0FBVFksUUFBQSxpQkFBaUIscUJBUzdCIn0=
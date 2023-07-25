"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const constants_1 = require("../constants");
const investments_controller_1 = require("../controller/investments.controller");
const investmentRoutes = express_1.default.Router();
investmentRoutes.get(`${constants_1.investmentsRoute}/:id`, (request, response) => {
    var _a;
    (0, investments_controller_1.getInvestmentById)(response, ((_a = request === null || request === void 0 ? void 0 : request.params) === null || _a === void 0 ? void 0 : _a.id) || null);
});
exports.default = investmentRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52ZXN0bWVudC5yb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9yb3V0ZXMvaW52ZXN0bWVudC5yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzREFBa0Q7QUFDbEQsNENBQTZDO0FBQzdDLGlGQUFzRTtBQUV0RSxNQUFNLGdCQUFnQixHQUFHLGlCQUFPLENBQUMsTUFBTSxFQUFFLENBQUE7QUFFekMsZ0JBQWdCLENBQUMsR0FBRyxDQUNsQixHQUFHLDRCQUFnQixNQUFNLEVBQ3pCLENBQUMsT0FBZ0IsRUFBRSxRQUFrQixFQUFRLEVBQUU7O0lBQzdDLElBQUEsMENBQWlCLEVBQUMsUUFBUSxFQUFFLENBQUEsTUFBQSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsTUFBTSwwQ0FBRSxFQUFFLEtBQUksSUFBSSxDQUFDLENBQUE7QUFDMUQsQ0FBQyxDQUNGLENBQUE7QUFFRCxrQkFBZSxnQkFBZ0IsQ0FBQSJ9
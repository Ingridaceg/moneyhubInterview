"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const utils_1 = require("./utils");
const constants_1 = require("./constants");
const config = require("config");
const app = (0, express_1.default)();
const port = 3000;
const routes_1 = require("./routes");
app.use("/", routes_1.investmentRoutes);
app.get("*", (request, response) => {
    (0, utils_1.errorHandler)(response, constants_1.httpCodes.notFoundError);
});
app.listen(port, () => {
    console.log(`Server running on port ${config.port}`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUFrRDtBQUNsRCxtQ0FBb0M7QUFDcEMsMkNBQXFDO0FBR3JDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUVoQyxNQUFNLEdBQUcsR0FBRyxJQUFBLGlCQUFPLEdBQUUsQ0FBQTtBQUNyQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUE7QUFFakIscUNBRWlCO0FBR2pCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLHlCQUFnQixDQUFDLENBQUE7QUFHOUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFnQixFQUFFLFFBQWtCLEVBQVEsRUFBRTtJQUMxRCxJQUFBLG9CQUFZLEVBQUMsUUFBUSxFQUFFLHFCQUFTLENBQUMsYUFBYSxDQUFDLENBQUE7QUFDakQsQ0FBQyxDQUFDLENBQUE7QUFFRixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7QUFDdEQsQ0FBQyxDQUFDLENBQUEifQ==
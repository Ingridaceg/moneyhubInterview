"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.successHandler = void 0;
const find_1 = __importDefault(require("lodash/find"));
const get_1 = __importDefault(require("lodash/get"));
const constants_1 = require("../constants");
const successHandler = (response, dataResponse) => {
    response.json(Object.assign(Object.assign({}, constants_1.commonResponse), { statusCode: constants_1.httpCodes.success, response: dataResponse }));
};
exports.successHandler = successHandler;
const errorHandler = (response, errorCode, error) => {
    const isErrorNumber = error && typeof error === "number";
    const renderErrorCode = error && isErrorNumber ? error : errorCode;
    const { code, message } = (0, find_1.default)(constants_1.errorTypes, { code: renderErrorCode }) || constants_1.errorTypes.notFoundError;
    const renderMessage = isErrorNumber ? message : error;
    const errorMessage = (0, get_1.default)(error, "message", renderMessage || constants_1.errorTypes.notFoundError.message);
    response.status(code);
    response.json(Object.assign(Object.assign({}, constants_1.commonResponse), { statusCode: renderErrorCode, response: {
            code,
            title: (0, get_1.default)(error, "name", "Error"),
            message: errorMessage,
        } }));
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UudXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXNwb25zZS51dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSx1REFBK0I7QUFDL0IscURBQTZCO0FBRTdCLDRDQUFxRTtBQUU5RCxNQUFNLGNBQWMsR0FBRyxDQUM1QixRQUFrQixFQUNsQixZQUEyQixFQUNyQixFQUFFO0lBQ1IsUUFBUSxDQUFDLElBQUksQ0FBQyxnQ0FDVCwwQkFBYyxLQUNqQixVQUFVLEVBQUUscUJBQVMsQ0FBQyxPQUFPLEVBQzdCLFFBQVEsRUFBRSxZQUFZLEdBQ1IsQ0FBQyxDQUFDO0FBQ3BCLENBQUMsQ0FBQztBQVRXLFFBQUEsY0FBYyxrQkFTekI7QUFFSyxNQUFNLFlBQVksR0FBRyxDQUMxQixRQUFrQixFQUNsQixTQUFpQixFQUNqQixLQUFrQixFQUNaLEVBQUU7SUFDUixNQUFNLGFBQWEsR0FBRyxLQUFLLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDO0lBQ3pELE1BQU0sZUFBZSxHQUNuQixLQUFLLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBRSxLQUFnQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDekQsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FDdkIsSUFBQSxjQUFJLEVBQUMsc0JBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsQ0FBQyxJQUFJLHNCQUFVLENBQUMsYUFBYSxDQUFDO0lBQ3hFLE1BQU0sYUFBYSxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDdEQsTUFBTSxZQUFZLEdBQUcsSUFBQSxhQUFHLEVBQ3RCLEtBQUssRUFDTCxTQUFTLEVBQ1QsYUFBYSxJQUFJLHNCQUFVLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FDbEQsQ0FBQztJQUVGLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsUUFBUSxDQUFDLElBQUksQ0FBQyxnQ0FDVCwwQkFBYyxLQUNqQixVQUFVLEVBQUUsZUFBZSxFQUMzQixRQUFRLEVBQUU7WUFDUixJQUFJO1lBQ0osS0FBSyxFQUFFLElBQUEsYUFBRyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDO1lBQ2xDLE9BQU8sRUFBRSxZQUFZO1NBQ3RCLEdBQ2EsQ0FBQyxDQUFDO0FBQ3BCLENBQUMsQ0FBQztBQTNCVyxRQUFBLFlBQVksZ0JBMkJ2QiJ9
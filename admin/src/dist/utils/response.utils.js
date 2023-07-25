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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UudXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi91dGlscy9yZXNwb25zZS51dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSx1REFBOEI7QUFDOUIscURBQTRCO0FBRTVCLDRDQUFrRTtBQUUzRCxNQUFNLGNBQWMsR0FBRyxDQUM1QixRQUFrQixFQUNsQixZQUEyQixFQUNyQixFQUFFO0lBQ1IsUUFBUSxDQUFDLElBQUksQ0FBQyxnQ0FDVCwwQkFBYyxLQUNqQixVQUFVLEVBQUUscUJBQVMsQ0FBQyxPQUFPLEVBQzdCLFFBQVEsRUFBRSxZQUFZLEdBQ1IsQ0FBQyxDQUFBO0FBQ25CLENBQUMsQ0FBQTtBQVRZLFFBQUEsY0FBYyxrQkFTMUI7QUFFTSxNQUFNLFlBQVksR0FBRyxDQUMxQixRQUFrQixFQUNsQixTQUFpQixFQUNqQixLQUFrQixFQUNaLEVBQUU7SUFDUixNQUFNLGFBQWEsR0FBRyxLQUFLLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFBO0lBQ3hELE1BQU0sZUFBZSxHQUNuQixLQUFLLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBRSxLQUFnQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUE7SUFDeEQsTUFBTSxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUMsR0FDckIsSUFBQSxjQUFJLEVBQUMsc0JBQVUsRUFBRSxFQUFDLElBQUksRUFBRSxlQUFlLEVBQUMsQ0FBQyxJQUFJLHNCQUFVLENBQUMsYUFBYSxDQUFBO0lBQ3JFLE1BQU0sYUFBYSxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7SUFDckQsTUFBTSxZQUFZLEdBQUcsSUFBQSxhQUFHLEVBQ3RCLEtBQUssRUFDTCxTQUFTLEVBQ1QsYUFBYSxJQUFJLHNCQUFVLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FDbEQsQ0FBQTtJQUVELFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDckIsUUFBUSxDQUFDLElBQUksQ0FBQyxnQ0FDVCwwQkFBYyxLQUNqQixVQUFVLEVBQUUsZUFBZSxFQUMzQixRQUFRLEVBQUU7WUFDUixJQUFJO1lBQ0osS0FBSyxFQUFFLElBQUEsYUFBRyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDO1lBQ2xDLE9BQU8sRUFBRSxZQUFZO1NBQ3RCLEdBQ2EsQ0FBQyxDQUFBO0FBQ25CLENBQUMsQ0FBQTtBQTNCWSxRQUFBLFlBQVksZ0JBMkJ4QiJ9
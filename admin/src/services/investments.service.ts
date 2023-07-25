import axios from "axios"
import {httpCodes} from "../constants"
import {Response} from "express"
import {errorHandler, successHandler} from "../utils"

export const getInvestmentsById = async (
  route: string,
  response: Response) : Promise<void> => {
  try {
    const responseData = await axios.get(route)

    if (responseData.status !== httpCodes.success) {
      errorHandler(
        response,
        httpCodes.serverError,
      )
    } else {
      successHandler(response, responseData.data)
    }

  } catch (error: unknown) {
    errorHandler(
      response,
      httpCodes.serverError,
    )
  }
}

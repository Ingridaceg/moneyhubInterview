import axios from "axios"
import {httpCodes} from "../constants"
import {Response} from "express"
import {errorHandler} from "../utils"

export const getExternalData = async (route: string) => {
  try {
    const responseData = await axios.get(route)

    if (responseData.status === httpCodes.success || responseData.status === httpCodes.NoContent) {
      return responseData.data
    }

  } catch (error: unknown) {
    return null
  }
  return null
}


export const postDataToExternal = async (
  route: string,
  body: NonNullable<unknown>,
  response: Response) => {
  try {
    const postResponse = await axios.post(route, body)

    if (postResponse.status !== httpCodes.success && postResponse.status !== httpCodes.NoContent) {
      errorHandler(response, httpCodes.serverError)
      return false
    }

  } catch (error: unknown) {
    errorHandler(response, httpCodes.serverError)
    return false
  }
  return true
}

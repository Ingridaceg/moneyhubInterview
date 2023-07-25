import {Response} from "express"
import {httpCodes, investmentRoute} from "../constants"
import {getInvestmentsById} from "../services/investments.service"
import {errorHandler} from "../utils"

export const getInvestmentById = async (
  response: Response,
  id: string | null,
) :Promise<void> => {
  if (!id) {
    errorHandler(response, httpCodes.badRequestError)
  }
  const route = `${investmentRoute.serviceUrl}/${id}`
  await getInvestmentsById(route, response)
}

import {Response} from "express"
import {httpCodes, investmentRoute} from "../constants"
import {errorHandler, successHandler} from "../utils"
import {getExternalData, postDataToExternal} from "../services/axios.service"
import {buildInvestmentCsvData} from "../modules/investments.module"

export const getInvestmentById = async (
  response: Response,
  id: string | null,
) :Promise<void> => {
  if (!id) {
    errorHandler(response, httpCodes.badRequestError)
  }
  const route = `${investmentRoute.investmentsRoute}/${id}`
  const investment = await getExternalData(route)
  if (investment) {
    successHandler(response, investment)
  } else {
    errorHandler(response, httpCodes.serverError)
  }
}

export const getCsvByOptionalId = async (
  response: Response,
  id: string | null,
) :Promise<void> => {
  const retrieveInvestmentRoute = `${investmentRoute.investmentsRoute}`
  const sendCsvInvestmentRoute = `${investmentRoute.investmentsRoute}${investmentRoute.exportCsvRoute}`
  const investmentEndpoint = id ? `${retrieveInvestmentRoute}/${id}` : `${retrieveInvestmentRoute}`
  const investments = await getExternalData(investmentEndpoint)
  if (investments) {
    const csv = await buildInvestmentCsvData(investments)
    const sentResponse = await postDataToExternal(sendCsvInvestmentRoute, {data: csv}, response)
    if (sentResponse)
      successHandler(response, {csv})
  } else {
    errorHandler(response, httpCodes.serverError)
  }
}

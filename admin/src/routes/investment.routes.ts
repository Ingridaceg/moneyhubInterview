import express, {Request, Response} from "express"
import {investmentCsv, investmentRoute} from "../constants"
import {getCsvByOptionalId, getInvestmentById} from "../controller/investments.controller"

const investmentRoutes = express.Router()

investmentRoutes.get(
  `${investmentRoute.localInvestmentRoute}/:id`,
  (request: Request, response: Response): void => {
    getInvestmentById(response, request?.params?.id || null)
  },
)

investmentRoutes.get(
  `${investmentCsv.route}/:id?`,
  (request: Request, response: Response): void => {
    getCsvByOptionalId(response, request?.params?.id || null)
  },
)

export default investmentRoutes

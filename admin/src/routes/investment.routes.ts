import express, {Request, Response} from "express"
import {investmentRoute} from "../constants"
import {getInvestmentById} from "../controller/investments.controller"

const investmentRoutes = express.Router()

investmentRoutes.get(
  `${investmentRoute.route}/:id`,
  (request: Request, response: Response): void => {
    getInvestmentById(response, request?.params?.id || null)
  },
)

export default investmentRoutes

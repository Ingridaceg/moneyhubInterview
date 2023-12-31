import express, {Request, Response} from "express"
import {errorHandler} from "./utils"
import {httpCodes} from "./constants"
const config = require("config")
import {
  investmentRoutes,
} from "./routes"

const app = express()
const port = config.port


app.use("/", investmentRoutes)

app.get("*", (request: Request, response: Response): void => {
  errorHandler(response, httpCodes.notFoundError)
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

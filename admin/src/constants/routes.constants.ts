const config = require("config")

export const investmentRoute = {
  route: "/investments",
  serviceUrl: `${config.investmentsServiceUrl}/investments`,
}

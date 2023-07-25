const config = require("config")

export const investmentRoute = {
  localInvestmentRoute: "/investments",
  exportCsvRoute: "/export",
  serviceUrl: `${config.investmentsServiceUrl}`,
  investmentsRoute: `${config.investmentsServiceUrl}/investments`,
}

export const investmentCsv = {
  route: "/investment-csv",
}

export const financialCompaniesById = {
  route: "/companies",
  serviceUrl: `${config.financialCompaniesUrl}`,
}

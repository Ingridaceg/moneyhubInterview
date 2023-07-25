import {financialCompaniesById} from "../constants"
import {getExternalData} from "./axios.service"

export const getFinancialCompanyById = async (id: string) : Promise<Company | null> => {
  const route = `${financialCompaniesById.serviceUrl}${financialCompaniesById.route}/${id}`
  return getExternalData(route)
}

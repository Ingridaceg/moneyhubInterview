import {getFinancialCompanyById} from "../services/financial-companies.service"

export const buildInvestmentCsvData = async (investments: Investment[]): Promise<string> => {
  try {
    const content = await Promise.all(
      investments.map(async (investment: Investment) => {
        const holding = await getFinancialCompanyById(investment.holdings[0].id)
        const holdingName = holding ? (holding as Company).name : "N/A"
        const value = investment.investmentTotal * (investment.holdings[0].investmentPercentage / 100)

        return {
          User: investment.id,
          "First Name": investment.firstName,
          "Last Name": investment.lastName,
          Date: investment.date,
          Holding: holdingName,
          Value: value,
        }
      }),
    )

    // Wait for any remaining promises to resolve
    await Promise.all(content.map(item => Promise.all(Object.keys(item).map(key => item[key as never]))))

    // Convert content to CSV format
    const csvRows = content.map(item => Object.keys(item).map(key => item[key as never]).join("|"))
    const header = Object.keys(content[0]).join("|")
    return `${header},\r\n${csvRows.join(",\r\n")}`
  } catch (error) {
    console.log("Error while building CSV data:", error)
    throw error // Rethrow the error to be handled by the caller or a higher-level function.
  }
}

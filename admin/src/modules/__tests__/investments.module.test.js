import * as financialCompanyService from "../../services/financial-companies.service"
import {buildInvestmentCsvData} from "../investments.module"


describe("buildInvestmentCsvData unit tests", function() {

  const companyMock = {
    id: 1,
    name: "nametest",
    address: "any address",
    postcode: "1234",
    frn: "1243124",
  }

  const investmentMock = [{
    id: "1",
    userId: "1",
    firstName: "Billy",
    lastName: "Bob",
    investmentTotal: 1400,
    date: "2020-01-01",
    holdings: [
      {
        id: "2",
        investmentPercentage: 1,
      },
    ],
  }]
  const mockCsv = "User|First Name|Last Name|Date|Holding|Value,\r\n1|Billy|Bob|2020-01-01|nametest|14"

  it("should return csv format Data even if company name does not exists", async function() {
    const mockCsvCompany = "User|First Name|Last Name|Date|Holding|Value,\r\n1|Billy|Bob|2020-01-01|N/A|14"
    const SpyGetFinancialCompanyById = jest.spyOn(financialCompanyService, "getFinancialCompanyById")
      .mockResolvedValueOnce(null)
    const response = await buildInvestmentCsvData(
      investmentMock,
    )
    expect(response).toEqual(mockCsvCompany)
    expect(SpyGetFinancialCompanyById).toHaveBeenCalledWith(
      investmentMock[0].holdings[0].id,
    )
  })

  it("should return csv format Data", async function() {
    const SpyGetFinancialCompanyById = jest.spyOn(financialCompanyService, "getFinancialCompanyById")
      .mockResolvedValueOnce(companyMock)
    const response = await buildInvestmentCsvData(
      investmentMock,
    )
    expect(response).toEqual(mockCsv)
    expect(SpyGetFinancialCompanyById).toHaveBeenCalledWith(
      investmentMock[0].holdings[0].id,
    )
  })

  it("should throws error when something happens", async function() {
    const mockError = new Error("error test")
    const SpyGetFinancialCompanyById = jest.spyOn(financialCompanyService, "getFinancialCompanyById")
      .mockRejectedValueOnce(mockError)
    await expect(buildInvestmentCsvData(investmentMock))
      .rejects
      .toThrow(mockError)
    expect(SpyGetFinancialCompanyById).toHaveBeenCalledWith(
      investmentMock[0].holdings[0].id,
    )
  })
})

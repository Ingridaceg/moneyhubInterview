interface InvestmentHolding {
  id: string,
  investmentPercentage: number,
}
interface Investment {
  id: string,
  userId: string,
  firstName: string,
  lastName: string,
  investmentTotal: number,
  date: string,
  holdings: InvestmentHolding[],
}

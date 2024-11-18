import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Result({ input }) {
  const results = calculateInvestmentResults(input);
  const initialInvestment = input.initialInvestment ?? 0;

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>

        <tbody>
          {results.map((result, index) => {
            const totalInterest =
              result.valueEndOfYear -
              result.annualInvestment * result.year -
              initialInvestment;

            const totalInvestmentAmount = result.valueEndOfYear - totalInterest;

            return (
              <tr key={`row-${index}`}>
                <td>{result.year}</td>
                <td>{formatter.format(result.valueEndOfYear)}</td>
                <td>{formatter.format(result.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalInvestmentAmount)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

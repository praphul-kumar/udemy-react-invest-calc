import { formatter } from "../util/investment";

export default function Result({ results }) {

    console.log("Results: ", results);
  return (
    <>
      <div>
        <div id="result">
          <table>
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
              {results.map((result, index) => (
                <tr key={`row-${index}`}>
                  <td>{ result.year }</td>
                  <td>{ formatter.format(result.interest) }</td>
                  <td>{ formatter.format(result.valueEndOfYear) }</td>
                  <td>{ formatter.format(result.annualInvestment) }</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

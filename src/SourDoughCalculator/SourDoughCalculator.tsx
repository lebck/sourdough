import { Calculator } from "~/SourDoughCalculator/components/Calculator/Calculator.tsx";
import { Headline } from "~/SourDoughCalculator/components/shared/Headline/Headline.tsx";

export function SourDoughCalculator() {
  return (
    <div className="p-6">
      <Headline>Udo Calculator</Headline>
      <Calculator />
    </div>
  );
}

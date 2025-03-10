import { Calculator } from "~/SourDoughCalculator/components/Calculator/Calculator.tsx";
import { Headline } from "~/SourDoughCalculator/components/shared/Headline/Headline.tsx";

export function SourDoughCalculator() {
  return (
    <div className="max-w-[600px] p-6">
      <Headline>Udo Calculator</Headline>
      <Calculator />
    </div>
  );
}

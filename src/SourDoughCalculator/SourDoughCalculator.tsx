import { Calculator } from "~/SourDoughCalculator/components/Calculator/Calculator.tsx";
import { Headline } from "~/SourDoughCalculator/components/shared/Headline/Headline.tsx";

export function SourDoughCalculator() {
  return (
    <div className="p-6">
      <Headline>Sourdough Calculator</Headline>
      <p>Start typing to do your calculation</p>
      <Calculator />
    </div>
  );
}

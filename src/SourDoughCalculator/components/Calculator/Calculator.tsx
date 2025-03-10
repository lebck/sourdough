import { Form } from "~/SourDoughCalculator/components/Calculator/Form/Form";
import {
  Amounts,
  BaseParams,
  calculateDough,
} from "~/SourDoughCalculator/components/Calculator/types/SourDough";
import { useState } from "react";
import { Ingredients } from "~/SourDoughCalculator/components/Calculator/Ingredients/Ingredients.tsx";

const initialForm: BaseParams = {
  amountDoughGrams: 500,
  hydrationPercent: 60,
  amountSaltPercent: 2,
  amountStarterPercent: 20,
};

export function Calculator() {
  const [sourDough, setSourDough] = useState<Amounts>(
    calculateDough(initialForm),
  );

  const handleDoughChange = (dough: BaseParams) => {
    const calculatedSourDough = calculateDough(dough);
    setSourDough({ ...dough, ...calculatedSourDough });
  };

  return (
    <>
      <Form onChange={handleDoughChange} formData={initialForm} />
      <Ingredients sourDough={sourDough} />
    </>
  );
}

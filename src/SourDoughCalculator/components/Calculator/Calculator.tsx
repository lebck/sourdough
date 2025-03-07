import { Form } from "~/SourDoughCalculator/components/Calculator/Form/Form";
import {
  BaseParams,
  calculateDough,
  type SourDough,
} from "~/SourDoughCalculator/components/Calculator/types/SourDough";
import { useState } from "react";
import { IngredientCard } from "~/SourDoughCalculator/components/Calculator/IngredientCard/IngredientCard.tsx";

const emptyForm: SourDough = {
  amountDoughGrams: 0,
  hydrationPercent: 0,
  amountWaterGrams: 0,
  amountStarterGrams: 0,
  amountSaltGrams: 0,
};

export function Calculator() {
  const [sourDough, setSourDough] = useState<SourDough>(emptyForm);

  const handleDoughChange = (dough: BaseParams) => {
    const calculatedSourDough = calculateDough(dough);
    setSourDough({ ...dough, ...calculatedSourDough });
  };

  return (
    <div className="max-w-[600px]">
      <Form onChange={handleDoughChange} formData={sourDough} />
      <div className="flex mt-6">
        <IngredientCard
          name="Salt"
          amount={sourDough.amountSaltGrams.toFixed(0)}
        />
        <IngredientCard
          name="Water"
          amount={sourDough.amountWaterGrams.toFixed(0)}
        />
        <IngredientCard
          name="Starter"
          amount={sourDough.amountStarterGrams.toFixed(0)}
        />
      </div>
    </div>
  );
}

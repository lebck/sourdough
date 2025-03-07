import { Form } from "~/SourDoughCalculator/components/Calculator/Form/Form";
import {
  BaseParams,
  calculateDough,
  type SourDough,
} from "~/SourDoughCalculator/components/Calculator/types/SourDough";
import { useState } from "react";
import { IngredientCard } from "~/SourDoughCalculator/components/Calculator/Ingredients/IngredientCard/IngredientCard.tsx";
import { Ingredients } from "~/SourDoughCalculator/components/Calculator/Ingredients/Ingredients.tsx";

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
      <Ingredients sourDough={sourDough} />
    </div>
  );
}

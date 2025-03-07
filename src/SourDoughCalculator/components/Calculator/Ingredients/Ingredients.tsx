import { SourDough } from "~/SourDoughCalculator/components/Calculator/types/SourDough.ts";
import { IngredientCard } from "~/SourDoughCalculator/components/Calculator/Ingredients/IngredientCard/IngredientCard.tsx";
import { FC } from "react";

interface IngredientsProps {
  sourDough: SourDough;
}

export const Ingredients: FC<IngredientsProps> = ({ sourDough }) => {
  return (
    <div className="flex mt-6 justify-between">
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
  );
};

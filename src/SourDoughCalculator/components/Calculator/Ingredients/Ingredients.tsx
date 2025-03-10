import { Amounts } from "~/SourDoughCalculator/components/Calculator/types/SourDough.ts";
import { IngredientCard } from "~/SourDoughCalculator/components/Calculator/Ingredients/IngredientCard/IngredientCard.tsx";
import { FC } from "react";

interface IngredientsProps {
  sourDough: Amounts;
}

export const Ingredients: FC<IngredientsProps> = ({ sourDough }) => {
  return (
    <div className="mt-6 flex h-full flex-wrap justify-between">
      <IngredientCard
        name="Flour"
        amount={sourDough.amountDoughGrams.toFixed(0)}
      />
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

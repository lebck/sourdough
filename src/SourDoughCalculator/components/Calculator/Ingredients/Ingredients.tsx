import { Amounts } from "~/SourDoughCalculator/components/Calculator/types/SourDough.ts";
import { IngredientCard } from "~/SourDoughCalculator/components/Calculator/Ingredients/IngredientCard/IngredientCard.tsx";
import { FC } from "react";
import { useTranslation } from "react-i18next";

interface IngredientsProps {
  sourDough: Amounts;
}

export const Ingredients: FC<IngredientsProps> = ({ sourDough }) => {
  const { t } = useTranslation();
  return (
    <div className="mt-6 flex h-full flex-wrap justify-between gap-4">
      <IngredientCard
        name={t("flour")}
        amount={sourDough.amountDoughGrams.toFixed(0)}
      />
      <IngredientCard
        name={t("salt")}
        amount={sourDough.amountSaltGrams.toFixed(0)}
      />
      <IngredientCard
        name={t("water")}
        amount={sourDough.amountWaterGrams.toFixed(0)}
      />
      <IngredientCard
        name={t("starter")}
        amount={sourDough.amountStarterGrams.toFixed(0)}
      />
    </div>
  );
};

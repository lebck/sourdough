import { Form } from "~/SourDoughCalculator/components/Calculator/Form/Form";
import {
  Amounts,
  BaseParams,
  calculateDough,
} from "~/SourDoughCalculator/components/Calculator/types/SourDough";
import { useState } from "react";
import { Ingredients } from "~/SourDoughCalculator/components/Calculator/Ingredients/Ingredients.tsx";
import { useSourDoughStorage } from "~/SourDoughCalculator/services/SourdoughState.ts";
import { SaveDough } from "~/SourDoughCalculator/components/Calculator/SaveDough/SaveDough.tsx";

export function Calculator() {
  const { baseParams, setBaseParams, dirty } = useSourDoughStorage();

  const [sourDough, setSourDough] = useState<Amounts>(
    calculateDough(baseParams),
  );

  const handleDoughChange = (baseParams: BaseParams) => {
    setBaseParams(baseParams);

    baseParams = correctBaseParams(baseParams);
    setSourDough(calculateDough(baseParams));
  };

  return (
    <>
      <Form onChange={handleDoughChange} value={baseParams} />
      <Ingredients sourDough={sourDough} />
      {dirty && <SaveDough />}
    </>
  );
}

function correctBaseParams(baseParams: BaseParams): BaseParams {
  if (
    isNaN(baseParams.amountDoughGrams) ||
    isNaN(baseParams.hydrationPercent) ||
    isNaN(baseParams.amountStarterPercent) ||
    isNaN(baseParams.amountSaltPercent)
  ) {
    return {
      amountDoughGrams: 0,
      hydrationPercent: 0,
      amountStarterPercent: 0,
      amountSaltPercent: 0,
    };
  }

  return baseParams;
}

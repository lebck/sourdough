import { Form } from "~/SourDoughCalculator/components/Calculator/Form/Form";
import {
  Amounts,
  BaseParams,
  calculateDough,
} from "~/SourDoughCalculator/components/Calculator/types/SourDough";
import { useCallback, useState } from "react";
import { Ingredients } from "~/SourDoughCalculator/components/Calculator/Ingredients/Ingredients.tsx";
import { useSourDoughStorage } from "~/SourDoughCalculator/services/SourdoughState.ts";
import { SaveDough } from "~/SourDoughCalculator/components/Calculator/SaveDough/SaveDough.tsx";

export const Calculator = () => {
  const { baseParams, setBaseParams, dirty } = useSourDoughStorage();

  const [sourDough, setSourDough] = useState<Amounts>(
    calculateDough(baseParams),
  );

  const handleDoughChange = useCallback(
    (baseParams: BaseParams) => {
      setBaseParams(baseParams);

      baseParams = correctBaseParams(baseParams);
      setSourDough(calculateDough(baseParams));
    },
    [setBaseParams],
  );

  return (
    <>
      <Form onChange={handleDoughChange} value={baseParams} />
      <Ingredients sourDough={sourDough} />
      <SaveDough enabled={dirty} />
    </>
  );
};

const correctBaseParams = (baseParams: BaseParams): BaseParams => {
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
};

import { useSourDoughStorage } from "~/SourDoughCalculator/services/persistence/sourdoughStorage.ts";
import { useCallback, useState } from "react";
import {
  Amounts,
  BaseParams,
} from "~/SourDoughCalculator/components/Calculator/types/SourDough.ts";

export const useSourdoughService = () => {
  const { baseParams, updateBaseParams } = useSourDoughStorage();

  const [sourDough, setSourDough] = useState<Amounts>(
    calculateDough(baseParams),
  );

  const handleDoughChange = useCallback(
    (baseParams: BaseParams) => {
      updateBaseParams(baseParams);

      const amounts = calculateDough(correctNaNValues(baseParams));
      setSourDough(amounts);
    },
    [updateBaseParams],
  );

  return {
    sourDough,
    baseParams,
    handleDoughChange,
  };
};

const correctNaNValues = (baseParams: BaseParams): BaseParams => {
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

export const calculateDough = (baseParams: BaseParams): Amounts => {
  const amountWaterGrams =
    baseParams.amountDoughGrams * (baseParams.hydrationPercent / 100);
  const amountStarterGrams =
    baseParams.amountDoughGrams * (baseParams.amountStarterPercent / 100);
  const amountSaltGrams =
    baseParams.amountDoughGrams * (baseParams.amountSaltPercent / 100);

  return {
    amountDoughGrams: baseParams.amountDoughGrams,
    amountWaterGrams,
    amountStarterGrams,
    amountSaltGrams,
  };
};

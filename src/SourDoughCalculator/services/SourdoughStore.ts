import { BaseParams } from "~/SourDoughCalculator/components/Calculator/types/SourDough.ts";
const defaultData: BaseParams = {
  amountDoughGrams: 500,
  hydrationPercent: 60,
  amountSaltPercent: 2,
  amountStarterPercent: 20,
};

export const SourdoughStore = {
  get: (): BaseParams => {
    const data = window.localStorage.getItem("sourDoughCalculator");
    if (data) {
      return JSON.parse(data);
    }
    return defaultData;
  },
  set: (data: BaseParams) => {
    window.localStorage.setItem("sourDoughCalculator", JSON.stringify(data));
  },
};

import { BaseParams } from "~/SourDoughCalculator/components/Calculator/types/SourDough.ts";

const defaultData: BaseParams = {
  amountDoughGrams: 500,
  hydrationPercent: 60,
  amountSaltPercent: 2,
  amountStarterPercent: 20,
};

export class SourdoughStore {
  constructor(private localStorage: Storage) {}

  get(): BaseParams {
    const data = this.localStorage.getItem("sourDoughCalculator");
    if (data) {
      return JSON.parse(data);
    }
    return defaultData;
  }

  set(data: BaseParams) {
    this.localStorage.setItem("sourDoughCalculator", JSON.stringify(data));
  }
}

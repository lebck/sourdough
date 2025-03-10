export interface BaseParams {
  amountDoughGrams: number;
  hydrationPercent: number;
  amountSaltPercent: number;
  amountStarterPercent: number;
}

export interface Amounts {
  amountDoughGrams: number;
  amountWaterGrams: number;
  amountStarterGrams: number;
  amountSaltGrams: number;
}

export type SourDough = BaseParams & Amounts;

export function calculateDough(baseParams: BaseParams): Amounts {
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
}

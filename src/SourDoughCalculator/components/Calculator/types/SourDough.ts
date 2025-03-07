export interface BaseParams {
  amountDoughGrams: number;
  hydrationPercent: number;
}

export interface Amounts {
  amountDoughGrams: number;
  amountWaterGrams: number;
  amountStarterGrams: number;
  amountSaltGrams: number;
}

export type SourDough = BaseParams & Amounts;

export function setValue(
  sourDough: SourDough,
  key: keyof SourDough,
  value: string,
): SourDough {
  const parsedValue = Number.parseInt(value);
  if (isNaN(parsedValue)) return sourDough;

  sourDough[key] = parsedValue;

  return { ...sourDough };
}

export function calculateDough(baseParams: BaseParams): Amounts {
  const amountWaterGrams =
    baseParams.amountDoughGrams * (baseParams.hydrationPercent / 100);
  const amountStarterGrams = baseParams.amountDoughGrams * 0.2;
  const amountSaltGrams = baseParams.amountDoughGrams * 0.02;

  return {
    amountDoughGrams: baseParams.amountDoughGrams,
    amountWaterGrams,
    amountStarterGrams,
    amountSaltGrams,
  };
}

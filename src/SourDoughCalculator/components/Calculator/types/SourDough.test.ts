import { calculateDough } from "./SourDough";
import { expect, test } from "vitest";

test("should calculate the correct dough weight", () => {
  const result = calculateDough({
    amountDoughGrams: 1000,
    hydrationPercent: 75,
    amountSaltPercent: 2,
    amountStarterPercent: 20,
  });
  expect(result).toEqual({
    amountDoughGrams: 1000,
    amountWaterGrams: 750,
    amountSaltGrams: 20,
    amountStarterGrams: 200,
  });
});

test("should handle zero values correctly", () => {
  const result = calculateDough({
    amountDoughGrams: 0,
    hydrationPercent: 0,
    amountSaltPercent: 0,
    amountStarterPercent: 0,
  });
  expect(result).toEqual({
    amountDoughGrams: 0,
    amountWaterGrams: 0,
    amountSaltGrams: 0,
    amountStarterGrams: 0,
  });
});

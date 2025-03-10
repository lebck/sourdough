import { expect, test } from "vitest";
import { calculateRange } from "~/SourDoughCalculator/components/shared/Range/calculateRange.ts";

test("useRange", () => {
  expect(calculateRange(0, 10, 1)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  expect(calculateRange(0, 20, 1)).toEqual([
    0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20,
  ]);
  expect(calculateRange(0, 15, 1)).toEqual([
    0, 2, 3, 5, 6, 8, 9, 11, 12, 14, 15,
  ]);
});

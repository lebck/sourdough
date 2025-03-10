import { useMemo } from "react";

const maxRange = 11;

export const calculateRange = (min: number, max: number, step: number) => {
  const totalSteps = Math.ceil((max - min) / step) + 1;

  if (totalSteps > maxRange) {
    step = (max - min) / (maxRange - 1);
  }

  return Array.from({ length: Math.min(totalSteps, maxRange) }, (_, i) =>
    Math.ceil(min + i * step),
  );
};

export const useRange = (min: number, max: number, step: number) => {
  return useMemo(() => calculateRange(min, max, step), [min, max, step]);
};

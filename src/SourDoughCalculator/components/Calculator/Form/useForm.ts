import { BaseParams } from "~/SourDoughCalculator/components/Calculator/types/SourDough.ts";
import { useState } from "react";

export const useForm = (
  defaultValues: BaseParams,
  onChange: (params: BaseParams) => void,
) => {
  const [values, setValues] = useState(defaultValues);

  const updateBaseParam = (key: keyof BaseParams, value: number) => {
    const newValues = { ...values, [key]: value };
    setValues(newValues);
    onChange(newValues);
  };

  const createFieldHandler = (fieldName: keyof BaseParams) => ({
    name: fieldName,
    value: values[fieldName],
    onChange: (value: number) => updateBaseParam(fieldName, value),
  });

  return {
    amountDoughGrams: createFieldHandler("amountDoughGrams"),
    hydrationPercent: createFieldHandler("hydrationPercent"),
    amountSaltPercent: createFieldHandler("amountSaltPercent"),
    amountStarterPercent: createFieldHandler("amountStarterPercent"),
  };
};

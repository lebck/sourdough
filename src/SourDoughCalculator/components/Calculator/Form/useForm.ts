import { BaseParams } from "~/SourDoughCalculator/components/Calculator/types/SourDough.ts";
import { useCallback, useState } from "react";

export const useForm = (
  defaultValues: BaseParams,
  onChange: (params: BaseParams) => void,
) => {
  const [values, setValues] = useState(defaultValues);

  const updateBaseParam = useCallback(
    (key: keyof BaseParams, value: number) => {
      const newValues = { ...values, [key]: value };
      setValues(newValues);
      onChange(newValues);
    },
    [values, onChange],
  );

  const createFieldHandler = useCallback(
    (fieldName: keyof BaseParams) => ({
      name: fieldName,
      value: values[fieldName],
      onChange: (value: number) => updateBaseParam(fieldName, value),
    }),
    [values, updateBaseParam],
  );

  return {
    amountDoughGrams: createFieldHandler("amountDoughGrams"),
    hydrationPercent: createFieldHandler("hydrationPercent"),
    amountSaltPercent: createFieldHandler("amountSaltPercent"),
    amountStarterPercent: createFieldHandler("amountStarterPercent"),
  };
};

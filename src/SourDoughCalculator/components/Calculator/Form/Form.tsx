import { useCallback } from "react";
import type { BaseParams } from "~/SourDoughCalculator/components/Calculator/types/SourDough";
import { FormProvider, useForm } from "react-hook-form";
import InputWithRange from "~/SourDoughCalculator/components/shared/InputWithRange/InputWithRange.tsx";

interface FormProps {
  onChange: (data: BaseParams) => void;
  formData: BaseParams;
}

export function Form({ onChange, formData }: FormProps) {
  const handleChange = useCallback(
    (data: BaseParams) => {
      onChange(data);
    },
    [onChange],
  );

  const methods = useForm<BaseParams>({
    values: formData,
  });

  return (
    <FormProvider {...methods}>
      <form onChange={methods.handleSubmit(handleChange)} className="mt-6">
        <InputWithRange
          label="Amount flour (g)"
          name="amountDoughGrams"
          rangeOptions={{ min: 0, max: 1500, step: 50 }}
        />
        <InputWithRange
          label="Hydration (%)"
          name="hydrationPercent"
          rangeOptions={{ min: 0, max: 100, step: 5 }}
        />
      </form>
    </FormProvider>
  );
}

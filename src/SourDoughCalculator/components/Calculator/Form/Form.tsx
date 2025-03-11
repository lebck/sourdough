import { useCallback } from "react";
import type { BaseParams } from "~/SourDoughCalculator/components/Calculator/types/SourDough";
import { FormProvider, useForm } from "react-hook-form";
import InputWithRange from "~/SourDoughCalculator/components/shared/InputWithRange/InputWithRange.tsx";
import { Collapse } from "~/SourDoughCalculator/components/shared/Collapse/Collapse.tsx";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();

  return (
    <FormProvider {...methods}>
      <form onChange={methods.handleSubmit(handleChange)} className="mt-6">
        <InputWithRange
          label={t("doughForm.amountFlourGrams")}
          name="amountDoughGrams"
          rangeOptions={{ min: 0, max: 1500, step: 50 }}
        />
        <InputWithRange
          label={t("doughForm.hydrationPercent")}
          name="hydrationPercent"
          rangeOptions={{ min: 0, max: 100, step: 5 }}
        />
        <Collapse title={t("doughForm.advanced")}>
          <InputWithRange
            label={t("doughForm.amountSaltPercent")}
            name="amountSaltPercent"
            rangeOptions={{ min: 0, max: 10, step: 0.5 }}
          />
          <InputWithRange
            label={t("doughForm.amountStarterPercent")}
            name="amountStarterPercent"
            rangeOptions={{ min: 0, max: 100, step: 5 }}
          />
        </Collapse>
      </form>
    </FormProvider>
  );
}

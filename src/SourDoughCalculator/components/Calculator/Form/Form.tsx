import { useState } from "react";
import type { BaseParams } from "~/SourDoughCalculator/components/Calculator/types/SourDough";
import InputWithRange from "~/SourDoughCalculator/components/shared/InputWithRange/InputWithRange.tsx";
import { Collapse } from "~/SourDoughCalculator/components/shared/Collapse/Collapse.tsx";
import { useTranslation } from "react-i18next";

interface FormProps {
  onChange: (data: BaseParams) => void;
  value: BaseParams;
}

const useForm = (
  defaultValues: BaseParams,
  onChange: (params: BaseParams) => void,
) => {
  const [values, setValues] = useState(defaultValues);

  const updateBaseParam = (key: keyof BaseParams, value: number) => {
    const newValues = { ...values, [key]: value };
    setValues(newValues);
    onChange(newValues);
  };

  const handlers = {
    amountDoughGrams: (value: number) =>
      updateBaseParam("amountDoughGrams", value),
    hydrationPercent: (value: number) =>
      updateBaseParam("hydrationPercent", value),
    amountSaltPercent: (value: number) =>
      updateBaseParam("amountSaltPercent", value),
    amountStarterPercent: (value: number) =>
      updateBaseParam("amountStarterPercent", value),
  };

  return {
    handlers,
    values: values,
  };
};

export function Form({ onChange, value }: FormProps) {
  const { t } = useTranslation();

  const form = useForm(value, onChange);

  return (
    <form className="mt-6">
      <InputWithRange
        label={t("doughForm.amountFlourGrams")}
        name="amountDoughGrams"
        rangeOptions={{ min: 0, max: 1500, step: 50 }}
        value={form.values.amountDoughGrams}
        onChange={form.handlers.amountDoughGrams}
      />
      <InputWithRange
        label={t("doughForm.hydrationPercent")}
        name="hydrationPercent"
        rangeOptions={{ min: 0, max: 100, step: 5 }}
        value={form.values.hydrationPercent}
        onChange={form.handlers.hydrationPercent}
      />
      <Collapse title={t("doughForm.advanced")}>
        <InputWithRange
          label={t("doughForm.amountSaltPercent")}
          name="amountSaltPercent"
          rangeOptions={{ min: 0, max: 10, step: 0.5 }}
          value={form.values.amountSaltPercent}
          onChange={form.handlers.amountSaltPercent}
        />
        <InputWithRange
          label={t("doughForm.amountStarterPercent")}
          name="amountStarterPercent"
          rangeOptions={{ min: 0, max: 100, step: 5 }}
          value={form.values.amountStarterPercent}
          onChange={form.handlers.amountStarterPercent}
        />
      </Collapse>
    </form>
  );
}

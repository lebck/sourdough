import type { BaseParams } from "~/SourDoughCalculator/components/Calculator/types/SourDough";
import InputWithRange from "~/SourDoughCalculator/components/shared/InputWithRange/InputWithRange.tsx";
import { Collapse } from "~/SourDoughCalculator/components/shared/Collapse/Collapse.tsx";
import { useTranslation } from "react-i18next";
import { useForm } from "~/SourDoughCalculator/components/Calculator/Form/useForm.ts";

interface FormProps {
  onChange: (data: BaseParams) => void;
  value: BaseParams;
}

export const Form = ({ onChange, value }: FormProps) => {
  const { t } = useTranslation();

  const form = useForm(value, onChange);

  return (
    <form className="mt-6">
      <InputWithRange
        label={t("doughForm.amountFlourGrams")}
        rangeOptions={{ min: 0, max: 1500, step: 50 }}
        {...form.amountDoughGrams}
      />
      <InputWithRange
        label={t("doughForm.hydrationPercent")}
        rangeOptions={{ min: 0, max: 100, step: 5 }}
        {...form.hydrationPercent}
      />
      <Collapse title={t("doughForm.advanced")}>
        <InputWithRange
          label={t("doughForm.amountSaltPercent")}
          rangeOptions={{ min: 0, max: 10, step: 0.5 }}
          {...form.amountSaltPercent}
        />
        <InputWithRange
          label={t("doughForm.amountStarterPercent")}
          rangeOptions={{ min: 0, max: 100, step: 5 }}
          {...form.amountStarterPercent}
        />
      </Collapse>
    </form>
  );
};

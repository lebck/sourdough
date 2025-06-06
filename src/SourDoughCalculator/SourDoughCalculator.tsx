import { Calculator } from "~/SourDoughCalculator/components/Calculator/Calculator.tsx";
import { Headline } from "~/SourDoughCalculator/components/shared/Headline/Headline.tsx";
import { useTranslation } from "react-i18next";

export const SourDoughCalculator = () => {
  const { t } = useTranslation();
  return (
    <div className="m-auto max-w-[600px] p-6">
      <Headline>{t("headline")}</Headline>
      <Calculator />
    </div>
  );
};

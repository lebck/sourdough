import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useSourDoughState } from "~/SourDoughCalculator/services/SourdoughState.ts";
import { SourdoughStore } from "~/SourDoughCalculator/services/SourdoughStore.ts";

export const SaveDough: FC = () => {
  const { baseParams, setClean } = useSourDoughState();
  const { t } = useTranslation();

  const handleClick = () => {
    SourdoughStore.set(baseParams);
    setClean();
  };

  return (
    <div className="mt-6">
      <button onClick={handleClick} className="btn btn-primary">
        {t("save")}
      </button>
    </div>
  );
};

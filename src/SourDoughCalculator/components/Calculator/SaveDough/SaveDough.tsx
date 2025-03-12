import { FC } from "react";
import { useSourDoughState } from "~/SourDoughCalculator/services/SourdoughState.ts";
import { SourdoughStore } from "~/SourDoughCalculator/services/SourdoughStore.ts";
import SaveIcon from "~/assets/save.svg?react";

export const SaveDough: FC = () => {
  const { baseParams, setClean } = useSourDoughState();

  const handleClick = () => {
    SourdoughStore.set(baseParams);
    setClean();
  };

  return (
    <button
      onClick={handleClick}
      className="btn btn-circle fixed right-4 bottom-4"
    >
      <SaveIcon />
    </button>
  );
};

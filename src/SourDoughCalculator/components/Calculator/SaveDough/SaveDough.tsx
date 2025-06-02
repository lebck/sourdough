import { useSourDoughStorage } from "~/SourDoughCalculator/services/SourdoughState.ts";
import { SourdoughStore } from "~/SourDoughCalculator/services/SourdoughStore.ts";
import SaveIcon from "~/assets/save.svg?react";

interface SaveDoughProps {
  enabled: boolean;
}

export const SaveDough = ({ enabled }: SaveDoughProps) => {
  const { baseParams, setClean } = useSourDoughStorage();

  const handleClick = () => {
    SourdoughStore.set(baseParams);
    setClean();
  };

  return (
    <button
      onClick={handleClick}
      disabled={!enabled}
      className="btn btn-outline mt-6 w-full px-6"
    >
      <SaveIcon />
      Save amounts
    </button>
  );
};

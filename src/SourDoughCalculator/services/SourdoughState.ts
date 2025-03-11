import { atom } from "jotai";
import { SourdoughStore } from "~/SourDoughCalculator/services/SourdoughStore.ts";
import { useAtom } from "jotai";
import { BaseParams } from "~/SourDoughCalculator/components/Calculator/types/SourDough.ts";

const baseParams$ = atom(SourdoughStore.get());
const dirty$ = atom(false);

export const useSourDoughState = () => {
  const [dirty, setDirty] = useAtom(dirty$);
  const [baseParams, setBaseParams] = useAtom(baseParams$);

  const setBaseParamsAndDirty = (data: BaseParams) => {
    setBaseParams(data);
    setDirty(true);
  };

  return {
    baseParams,
    dirty,
    setBaseParams: setBaseParamsAndDirty,
    setClean: () => setDirty(false),
  };
};

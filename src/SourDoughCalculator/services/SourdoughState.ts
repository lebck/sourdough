import { atom, useAtom } from "jotai";
import { SourdoughStore } from "~/SourDoughCalculator/services/SourdoughStore.ts";
import { BaseParams } from "~/SourDoughCalculator/components/Calculator/types/SourDough.ts";

const baseParams$ = atom(SourdoughStore.get());
const dirty$ = atom(false);

export const useSourDoughStorage = () => {
  const [dirty, setDirty] = useAtom(dirty$);
  const [baseParams, setBaseParams] = useAtom(baseParams$);

  const updateBaseParams = (data: BaseParams) => {
    setBaseParams(data);
    setDirty(true);
  };

  return {
    baseParams,
    dirty,
    setBaseParams: updateBaseParams,
    setClean: () => setDirty(false),
  };
};

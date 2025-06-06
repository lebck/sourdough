import { atom, useAtom } from "jotai";
import { SourdoughStore } from "~/SourDoughCalculator/services/SourdoughStore.ts";
import { BaseParams } from "~/SourDoughCalculator/components/Calculator/types/SourDough.ts";
import { useCallback } from "react";

const baseParams$ = atom(SourdoughStore.get());
const dirty$ = atom(false);

export const useSourDoughStorage = () => {
  const [dirty, setDirty] = useAtom(dirty$);
  const [baseParams, setBaseParams] = useAtom(baseParams$);

  const updateBaseParams = useCallback(
    (data: BaseParams) => {
      setBaseParams(data);
      setDirty(true);
    },
    [setBaseParams, setDirty],
  );

  const setClean = useCallback(() => {
    setDirty(false);
  }, [setDirty]);

  return {
    baseParams,
    dirty,
    setBaseParams: updateBaseParams,
    setClean,
  };
};

import { atom, useAtom } from "jotai";
import { BaseParams } from "~/SourDoughCalculator/components/Calculator/types/SourDough.ts";
import { useCallback } from "react";
import { SourdoughStore } from "~/SourDoughCalculator/services/persistence/SourdoughStore.ts";

const sourdoughStore = new SourdoughStore(window.localStorage);
const baseParams$ = atom(sourdoughStore.get());
const dirty$ = atom(false);

export const useSourDoughStorage = () => {
  const [unsavedChanges, setUnsavedChanges] = useAtom(dirty$);
  const [baseParams, setBaseParams] = useAtom(baseParams$);

  const updateBaseParams = useCallback(
    (data: BaseParams) => {
      setBaseParams(data);
      setUnsavedChanges(true);
    },
    [setBaseParams, setUnsavedChanges],
  );

  const persist = useCallback(() => {
    sourdoughStore.set(baseParams);
    setUnsavedChanges(false);
  }, [setUnsavedChanges, baseParams]);

  return {
    baseParams,
    updateBaseParams,
    unsavedChanges,
    persist,
  };
};

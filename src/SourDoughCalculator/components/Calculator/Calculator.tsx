import { Form } from "~/SourDoughCalculator/components/Calculator/Form/Form";

import { Ingredients } from "~/SourDoughCalculator/components/Calculator/Ingredients/Ingredients.tsx";
import { SaveDough } from "~/SourDoughCalculator/components/Calculator/SaveDough/SaveDough.tsx";
import { useSourdoughService } from "~/SourDoughCalculator/services/sourdough/useSourdoughService.ts";
import { useSourDoughStorage } from "~/SourDoughCalculator/services/persistence/sourdoughStorage.ts";

export const Calculator = () => {
  const { handleDoughChange, baseParams, sourDough } = useSourdoughService();
  const { unsavedChanges, persist } = useSourDoughStorage();

  return (
    <>
      <Form onChange={handleDoughChange} value={baseParams} />
      <Ingredients sourDough={sourDough} />
      <SaveDough enabled={unsavedChanges} onClick={persist} />
    </>
  );
};

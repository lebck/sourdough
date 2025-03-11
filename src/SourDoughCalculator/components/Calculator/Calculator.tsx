import { Form } from "~/SourDoughCalculator/components/Calculator/Form/Form";
import {
  Amounts,
  BaseParams,
  calculateDough,
} from "~/SourDoughCalculator/components/Calculator/types/SourDough";
import { useState } from "react";
import { Ingredients } from "~/SourDoughCalculator/components/Calculator/Ingredients/Ingredients.tsx";
import { useSourDoughState } from "~/SourDoughCalculator/services/SourdoughState.ts";
import { SaveDough } from "~/SourDoughCalculator/components/Calculator/SaveDough/SaveDough.tsx";

export function Calculator() {
  const { baseParams, setBaseParams, dirty } = useSourDoughState();

  const [sourDough, setSourDough] = useState<Amounts>(
    calculateDough(baseParams),
  );

  const handleDoughChange = (dough: BaseParams) => {
    setBaseParams(dough);
    const calculatedSourDough = calculateDough(dough);
    setSourDough({ ...dough, ...calculatedSourDough });
  };

  return (
    <>
      <Form onChange={handleDoughChange} formData={baseParams} />
      <Ingredients sourDough={sourDough} />
      {dirty && <SaveDough />}
    </>
  );
}

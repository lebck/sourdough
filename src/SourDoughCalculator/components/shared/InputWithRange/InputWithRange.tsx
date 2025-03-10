import { type FieldValues, type Path } from "react-hook-form";
import { Range } from "~/SourDoughCalculator/components/shared/Range/Range.tsx";
import { Label } from "~/SourDoughCalculator/components/shared/Label/Label.tsx";
import { InputNumber } from "~/SourDoughCalculator/components/shared/InputNumber/InputNumber.tsx";

type InputWithRangeProps<FormValues extends FieldValues> = {
  label: string;
  name: Path<FormValues>;
  rangeOptions?: {
    min: number;
    max: number;
    step: number;
  };
  defaultValue?: number;
};

const InputWithRange = <FormValues extends FieldValues>({
  label,
  name,
  rangeOptions,
}: InputWithRangeProps<FormValues>) => {
  return (
    <div className="mt-6" data-testid={InputWithRange.testIDs.test}>
      <Label htmlFor={name}>{label}:</Label>
      <div className="flex flex-col items-center gap-5 sm:flex-row">
        <InputNumber name={name} />
        {rangeOptions && <Range {...rangeOptions} name={name} />}
      </div>
    </div>
  );
};

export default InputWithRange;

InputWithRange.testIDs = {
  test: "foo",
};

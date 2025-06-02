import { Range } from "~/SourDoughCalculator/components/shared/Range/Range.tsx";
import { Label } from "~/SourDoughCalculator/components/shared/Label/Label.tsx";
import { InputNumber } from "~/SourDoughCalculator/components/shared/InputNumber/InputNumber.tsx";

type InputWithRangeProps = {
  label: string;
  name: string;
  rangeOptions?: {
    min: number;
    max: number;
    step: number;
  };
  value: number;
  onChange: (value: number) => void;
};

const InputWithRange = ({
  label,
  name,
  rangeOptions,
  value,
  onChange,
}: InputWithRangeProps) => {
  return (
    <div className="mt-6" data-testid={InputWithRange.testIDs.test}>
      <Label htmlFor={name}>{label}:</Label>
      <div className="flex flex-col items-center gap-5 sm:flex-row">
        <InputNumber name={name} onChange={onChange} value={value} />
        {rangeOptions && (
          <Range
            onChange={onChange}
            value={value}
            {...rangeOptions}
            name={name}
          />
        )}
      </div>
    </div>
  );
};

export default InputWithRange;

InputWithRange.testIDs = {
  test: "foo",
};

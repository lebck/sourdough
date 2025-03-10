import {
  FieldValues,
  type Path,
  PathValue,
  useFormContext,
} from "react-hook-form";
import { useRange } from "~/SourDoughCalculator/components/shared/Range/calculateRange.ts";
import { ChangeEvent } from "react";

export interface RangeProps<FormValues extends FieldValues> {
  name: Path<FormValues>;
  min: number;
  max: number;
  step?: number;
}

export const Range = <FormValues extends FieldValues>({
  name,
  min,
  max,
  step = 1,
}: RangeProps<FormValues>) => {
  const { watch, setValue } = useFormContext<FormValues>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTypedValue(e.target.value);
  };

  const setTypedValue = (value: string) => {
    setValue(name, typedValue<FormValues>(Number.parseInt(value)));
  };

  const range = useRange(min, max, step);

  return (
    <div className="mt-3 w-full">
      <input
        data-testid={Range.testIDs.range}
        min={min}
        max={max}
        step={step}
        type="range"
        className="range range-xs pointer-coarse:range-xl block w-full touch-pan-y"
        id={name}
        onChange={handleChange}
        value={watch(name)}
      />
      <div className="-mx-2.5 mt-2 flex cursor-pointer justify-between text-xs">
        {range.map((value) => (
          <div
            data-testid={Range.testIDs.rangeItem(value)}
            key={value}
            className="flex flex-col text-center"
            style={{ width: `${100 / range.length}%` }}
            onClick={() => setTypedValue(`${value}`)}
          >
            <span>|</span>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const typedValue = <FormValues extends FieldValues>(value: unknown) =>
  value as PathValue<FormValues, Path<FormValues>>;

Range.testIDs = {
  rangeItem: (n: number) => `rangeItem${n}`,
  range: "range",
};

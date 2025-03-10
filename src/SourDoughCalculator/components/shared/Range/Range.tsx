import { ChangeEvent } from "react";
import {
  FieldValues,
  type Path,
  PathValue,
  useFormContext,
} from "react-hook-form";
import { calculateRange } from "~/SourDoughCalculator/components/shared/Range/calculateRange.ts";

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
  const { register, setValue } = useFormContext<FormValues>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTypedValue(e.target.value);
  };

  const setTypedValue = (value: unknown) =>
    setValue(name, typedValue<FormValues>(value));

  const range = calculateRange(min, max, step);

  return (
    <div className="w-full">
      <input
        min={min}
        max={max}
        step={step}
        type="range"
        className="range range-xs pointer-coarse:range-xl block w-full touch-pan-y"
        id={name}
        {...register(name)}
        onChange={handleChange}
      />
      <div className="flex justify-between -mx-2.5 mt-2 text-xs cursor-pointer">
        {range.map((value) => (
          <div
            key={value}
            className="flex flex-col text-center"
            style={{ width: `${100 / range.length}%` }}
            onClick={() => setTypedValue(value)}
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

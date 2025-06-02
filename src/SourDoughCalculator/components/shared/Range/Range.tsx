import { useRange } from "~/SourDoughCalculator/components/shared/Range/calculateRange.ts";
import { ChangeEvent, useMemo } from "react";

export interface RangeProps {
  name: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
}

export const Range = ({
  onChange,
  name,
  value,
  min,
  max,
  step = 1,
}: RangeProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTypedValue(e.target.value);
  };

  const setTypedValue = (value: string) => {
    onChange(Number.parseInt(value));
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
        value={useParsedValue(value)}
      />
      <div className="-mx-2.5 mt-2 flex cursor-pointer justify-between text-xs">
        {range.map((step) => (
          <div
            data-testid={Range.testIDs.rangeItem(step)}
            key={step}
            className="flex flex-col text-center"
            style={{ width: `${100 / range.length}%` }}
            onClick={() => setTypedValue(`${step}`)}
          >
            <span>|</span>
            <span>{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const useParsedValue = (value: number) => {
  return useMemo(() => {
    if (isNaN(value)) return 0;
    return value;
  }, [value]);
};

Range.testIDs = {
  rangeItem: (n: number) => `rangeItem${n}`,
  range: "range",
};

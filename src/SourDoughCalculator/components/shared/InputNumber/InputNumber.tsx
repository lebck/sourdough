import { ChangeEvent, FC, useCallback, useMemo } from "react";

interface InputProps {
  name: string;
  value: number;
  onChange: (value: number) => void;
}

export const InputNumber: FC<InputProps> = ({ name, onChange, value }) => {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange(parseInt(event.target.value));
    },
    [onChange],
  );

  return (
    <input
      data-testid={InputNumberTestID}
      type="number"
      className="input mt-3 block w-20 self-start"
      id={name}
      value={useParsedValue(value)}
      onChange={handleChange}
    />
  );
};

const useParsedValue = (value: number) => {
  return useMemo(() => {
    if (isNaN(value)) return "";
    return value;
  }, [value]);
};

export const InputNumberTestID = "inputNumber";

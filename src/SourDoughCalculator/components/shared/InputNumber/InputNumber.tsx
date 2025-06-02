import { ChangeEvent, FC } from "react";

interface InputProps {
  name: string;
  value: number;
  onChange: (value: number) => void;
}

export const InputNumber: FC<InputProps> = ({ name, onChange, value }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(parseInt(event.target.value));
  };

  return (
    <input
      data-testid={InputNumberTestID}
      type="number"
      className="input mt-3 block w-20 self-start"
      id={name}
      value={value}
      onChange={handleChange}
    />
  );
};

export const InputNumberTestID = "inputNumber";

import { ChangeEvent, FC } from "react";
import {
  FieldValues,
  type Path,
  PathValue,
  useFormContext,
} from "react-hook-form";

interface InputProps {
  name: string;
}

export const InputNumber: FC<InputProps> = ({ name }) => {
  const { register, setValue, watch } = useFormContext<FieldValues>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(name, e.target.value as PathValue<FieldValues, Path<FieldValues>>);
  };

  const inputProps = register(name, { valueAsNumber: true });

  return (
    <input
      {...inputProps}
      data-testid={InputNumberTestID}
      type="number"
      className="input mt-3 block w-20 self-start"
      id={name}
      value={watch(name) ?? ""}
      onChange={handleChange}
    />
  );
};

export const InputNumberTestID = "inputNumber";

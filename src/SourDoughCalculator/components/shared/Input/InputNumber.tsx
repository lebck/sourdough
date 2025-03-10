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
  const { register, setValue } = useFormContext<FieldValues>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(name, e.target.value as PathValue<FieldValues, Path<FieldValues>>);
  };

  return (
    <input
      type="number"
      className="input block w-20 self-start"
      id={name}
      {...register(name)}
      onChange={handleChange}
    />
  );
};

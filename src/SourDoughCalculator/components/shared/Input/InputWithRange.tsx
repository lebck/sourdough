import {
  useFormContext,
  type RegisterOptions,
  type FieldValues,
  type Path,
  PathValue,
} from "react-hook-form";
import { ChangeEvent } from "react";

type InputWithRangeProps<FormValues extends FieldValues> = {
  label: string;
  name: Path<FormValues>;
  validationRules?: RegisterOptions<FormValues, Path<FormValues>>;
  rangeOptions?: {
    min?: number;
    max?: number;
    step?: number;
  };
};

const InputWithRange = <FormValues extends FieldValues>({
  label,
  name,
  validationRules,
  rangeOptions,
}: InputWithRangeProps<FormValues>) => {
  const { register, setValue } = useFormContext<FormValues>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(name, e.target.value as PathValue<FormValues, Path<FormValues>>);
  };

  return (
    <div className="mt-6">
      <label className="label" htmlFor={name}>
        {label}:
      </label>
      <div className="flex flex-col sm:flex-row gap-5 items-center">
        <input
          type="number"
          className="input block w-20 self-start"
          id={name}
          {...register(name, validationRules)}
          onChange={handleChange}
        />
        <input
          min={rangeOptions?.min}
          max={rangeOptions?.max}
          step={rangeOptions?.step}
          type="range"
          className="range block w-full"
          id={name}
          {...register(name, validationRules)}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default InputWithRange;

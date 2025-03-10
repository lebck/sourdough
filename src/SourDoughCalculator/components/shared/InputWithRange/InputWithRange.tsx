import {
  type FieldValues,
  type Path,
  PathValue,
  type RegisterOptions,
  useFormContext,
} from "react-hook-form";
import { ChangeEvent } from "react";
import { Range } from "~/SourDoughCalculator/components/shared/Range/Range.tsx";

type InputWithRangeProps<FormValues extends FieldValues> = {
  label: string;
  name: Path<FormValues>;
  validationRules?: RegisterOptions<FormValues, Path<FormValues>>;
  rangeOptions?: {
    min: number;
    max: number;
    step: number;
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
        {rangeOptions && <Range {...rangeOptions} name={name} />}
      </div>
    </div>
  );
};

export default InputWithRange;

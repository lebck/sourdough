interface FieldProps {
  value: number;
  label: string;
  name: string;
  onChange: (value: string) => void;
}

export function Field({ value, label, onChange, name }: FieldProps) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        className="block border"
        name={name}
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}

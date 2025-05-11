
interface InspectionTypeCheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}

export const InspectionTypeCheckbox = ({
  id,
  label,
  checked,
  onChange,
}: InspectionTypeCheckboxProps) => {
  return (
    <>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="inspection-checkbox"
      />
      <label htmlFor={id} className="font-semibold text-sm">{label}</label>
    </>
  );
};

type TextFieldProps = {
  label: string;
  name: string;
  type: "text" | "email" | "password" | "button" | "number" | "url" | string;
  placeholder?: string;
  disabled?: boolean;
};

const TextField = ({
  label,
  name,
  type,
  placeholder,
  disabled,
}: TextFieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        disabled={disabled}
        placeholder={placeholder}
        className="border border-gray-500 rounded-md p-2"
      />
    </div>
  );
};

export default TextField;

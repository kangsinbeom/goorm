import * as s from "./styles";

interface InputProp {
  title: string;
  id: string;
  type: "number" | "text";
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  title,
  id,
  type,
  placeholder,
  value,
  onChange,
}: InputProp) => {
  return (
    <s.Input>
      <label htmlFor={id}>{title}</label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </s.Input>
  );
};

export default Input;

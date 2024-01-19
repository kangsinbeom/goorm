import * as s from "./styles";

interface InputProp {
  title: string;
  id: string;
  type: "number" | "text";
  placeholder?: string;
}

const Input = ({ title, id, type, placeholder }: InputProp) => {
  return (
    <s.Input>
      <label htmlFor={id}>{title}</label>
      <input type={type} id={id} placeholder={placeholder} />
    </s.Input>
  );
};

export default Input;

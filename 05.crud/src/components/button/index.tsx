import * as s from "./styles";
import Icon from "../icon";

interface ButtonPorps {
  title: string;
  type: "submit" | "button";
  icon: "send" | "trash";
}

const Button = ({ title, type, icon }: ButtonPorps) => {
  return (
    <s.Button type={type}>
      {title}
      <Icon icon={icon} />
    </s.Button>
  );
};

export default Button;

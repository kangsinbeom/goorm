import * as s from "./styles";
import Icon from "../icon";

interface ButtonPorps {
  title: string;
  type: "submit" | "button";
  icon: "send" | "trash";
  onClick: () => void;
}

const Button = ({ title, type, icon, onClick }: ButtonPorps) => {
  return (
    <s.Button type={type} onClick={onClick}>
      {title}
      <Icon icon={icon} />
    </s.Button>
  );
};

export default Button;

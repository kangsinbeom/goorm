import { FaTrash } from "react-icons/fa";
import { HiPencil } from "react-icons/hi2";
import { IoMdSend } from "react-icons/io";

interface IconPorps {
  icon: "send" | "trash" | "pencil";
  color?: string;
  onClick?: () => void;
}

const Icon = ({ icon, color, onClick }: IconPorps) => {
  switch (icon) {
    case "send":
      return <IoMdSend color={color} onClick={onClick} />;
    case "trash":
      return <FaTrash color={color} onClick={onClick} />;
    case "pencil":
      return <HiPencil color={color} onClick={onClick} />;
  }
};

export default Icon;

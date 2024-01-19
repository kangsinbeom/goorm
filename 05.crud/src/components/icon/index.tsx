import { FaTrash } from "react-icons/fa";
import { HiPencil } from "react-icons/hi2";
import { IoMdSend } from "react-icons/io";

interface IconPorps {
  icon: "send" | "trash" | "pencil";
  color?: string;
}

const Icon = ({ icon, color }: IconPorps) => {
  switch (icon) {
    case "send":
      return <IoMdSend color={color} />;
    case "trash":
      return <FaTrash color={color} />;
    case "pencil":
      return <HiPencil color={color} />;
  }
};

export default Icon;

import { useState } from "react";
import { useInput } from "../../hooks/useInput";
import Icon from "../icon";
import * as s from "./styles";
import Input from "../input";
export interface ItemType {
  title: string;
  cost: string;
}
interface ItemProps {
  item: ItemType;
  id: number;
  handleDelete: (id: number) => void;
  handlePut: (id: number, title: string, cost: string) => void;
}
const Item = ({ item, id, handleDelete, handlePut }: ItemProps) => {
  const { title, cost } = item;
  const [putState, setPutState] = useState<boolean>(false);
  const [form, onChange] = useInput({ newTitle: title, newCost: cost });
  const togglePut = () => {
    setPutState((prev) => !prev);
    handlePut(id, form.newTitle, form.newCost);
  };
  return (
    <s.Item>
      {putState ? (
        <>
          <Input
            title="지출 항목"
            id="newTitle"
            type="text"
            onChange={onChange}
            value={form.newTitle}
          />
          <Input
            title="비용"
            id="newCost"
            type="number"
            onChange={onChange}
            value={form.newCost}
          />
        </>
      ) : (
        <>
          <p>{title}</p>
          <p>{cost}</p>
        </>
      )}
      <s.IconBox>
        <Icon icon="pencil" color="green" onClick={togglePut} />
        <Icon icon="trash" color="red" onClick={() => handleDelete(id)} />
      </s.IconBox>
    </s.Item>
  );
};

export default Item;

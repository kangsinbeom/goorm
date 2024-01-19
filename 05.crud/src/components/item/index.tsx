import Icon from "../icon";
import * as s from "./styles";
export interface ItemType {
  title: string;
  cost: string;
}

const Item = ({ item }: { item: ItemType }) => {
  const { title, cost } = item;
  return (
    <s.Item>
      <p>{title}</p>
      <p>{cost}</p>
      <s.IconBox>
        <Icon icon="pencil" color="green" />
        <Icon icon="trash" color="red" />
      </s.IconBox>
    </s.Item>
  );
};

export default Item;

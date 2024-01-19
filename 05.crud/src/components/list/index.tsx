import Item from "../item";
import Button from "../button";
import * as s from "./styles";
const ITEMARRAY = [{ key: "1", title: "dinner", cost: "20000" }];
const List = () => {
  return (
    <s.List>
      {ITEMARRAY.map((item, index) => (
        <Item item={item} key={index} />
      ))}
      <Button title="목록 지우기" type="button" icon="trash" />
    </s.List>
  );
};

export default List;

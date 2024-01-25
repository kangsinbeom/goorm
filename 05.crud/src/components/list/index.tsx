import Item from "../item";
import Button from "../button";
import * as s from "./styles";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { numberingListArray } from "../../recoil/selector";
import { listArray } from "../../recoil/atoms";

export interface ItemState {
  title: string;
  cost: string;
}

const List = () => {
  const numberingList = useRecoilValue(numberingListArray);
  const setList = useSetRecoilState(listArray);

  const handleDelete = (id: number) => {
    const newList = numberingList.filter((item) => item.number !== id);
    setList(newList);
  };
  const handlePut = (id: number, title: string, cost: string) => {
    const newPost = { title, cost };
    const newList = numberingList.map((item) =>
      item.number === id ? newPost : item
    );
    setList(newList);
  };
  return (
    <s.List>
      {numberingList &&
        numberingList.map((item, index) => (
          <Item
            item={item}
            key={index}
            id={index}
            handleDelete={handleDelete}
            handlePut={handlePut}
          />
        ))}
      <Button
        title="목록 지우기"
        type="button"
        icon="trash"
        onClick={() => setList([])}
      />
    </s.List>
  );
};

export default List;

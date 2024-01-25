import { selector } from "recoil";
import { listArray } from "./atoms";
import { ItemState } from "../components/list";

interface NumberedArray extends ItemState {
  number: number;
}

export const numberingListArray = selector<NumberedArray[]>({
  key: "numberingListArray",
  get: ({ get }) => {
    const array = get(listArray);
    return array.map((item, index) => ({ ...item, number: index }));
  },
});

export const totalPrice = selector<number>({
  key: "totalPrice",
  get: ({ get }) => {
    const array = get(listArray);
    return array.reduce((acc, item) => acc + Number(item.cost), 0);
  },
});

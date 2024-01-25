import { atom } from "recoil";
import { ItemState } from "../components/list";
const ITEMARRAY = [{ title: "dinner", cost: "20000" }];

export const listArray = atom<ItemState[]>({
  key: "listArray",
  default: ITEMARRAY,
});

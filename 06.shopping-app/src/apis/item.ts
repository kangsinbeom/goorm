import { collection, getDocs } from "firebase/firestore";
import { store } from "./firebase";
import { ItemValue } from "../models/cart";

export const getItems = async () => {
  const itemRef = collection(store, "ITEM");
  const itemSnapshot = await getDocs(itemRef);
  const items = itemSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as ItemValue),
  }));
  return { items };
};

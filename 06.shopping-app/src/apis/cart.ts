import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { ItemValue } from "../models/cart";
import { store } from "./firebase";
import { ItemProps } from "../components/home/Item";

export const getCarts = async (userId: string) => {
  const cartRef = collection(store, "CART", userId, "ITEM");
  const cartSnapshot = await getDocs(cartRef);

  return cartSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as ItemValue),
  }));
};

export const setCart = async ({
  item,
  userId,
}: {
  item: ItemProps;
  userId: string;
}) => {
  const userCartRef = doc(store, "CART", userId);
  const itemRef = doc(collection(userCartRef, "ITEM"), item.id);
  const docSnap = await getDoc(itemRef);
  if (docSnap.exists()) {
    await deleteDoc(itemRef);
  } else {
    await setDoc(itemRef, item);
  }
  return docSnap.exists();
};

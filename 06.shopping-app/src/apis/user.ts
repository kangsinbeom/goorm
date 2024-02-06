import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, store } from "./firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { FormValues } from "../models/user";

export const signup = async (form: FormValues) => {
  const { email, password, name } = form;
  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  await updateProfile(user, { displayName: name });
  const newUser = {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
  };
  await setDoc(doc(collection(store, "USER"), user.uid), newUser);
};

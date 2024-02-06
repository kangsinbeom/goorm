import { atom } from "recoil";
import { User } from "../models/user";

export const userAtoms = atom<User | null>({
  key: "auth/User",
  default: null,
});

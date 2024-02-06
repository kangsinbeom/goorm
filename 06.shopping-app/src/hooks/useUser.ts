import { useRecoilValue } from "recoil";
import { userAtoms } from "../atom/user";

const useUser = () => {
  return useRecoilValue(userAtoms);
};

export default useUser;

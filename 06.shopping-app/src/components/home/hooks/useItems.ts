import { useQuery } from "react-query";
import { getItems } from "../../../apis/item";

const useItems = () => {
  return useQuery(["items"], () => getItems());
};

export default useItems;

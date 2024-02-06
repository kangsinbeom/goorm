import { useQuery } from "react-query";
import { getCarts } from "../../../apis/cart";

const useCarts = ({ userId }: { userId: string }) => {
  return useQuery(["bucket", userId], () => getCarts(userId));
};

export default useCarts;

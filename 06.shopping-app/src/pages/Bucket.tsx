import BucketItem from "../components/bucket/BucketItem";
import useCarts from "../components/bucket/hooks/useCarts";
import Flex from "../components/shared/Flex";
import useUser from "../hooks/useUser";

const BucketPage = () => {
  const user = useUser();
  const { data, isLoading } = useCarts({ userId: user?.uid as string });
  if (data == null || isLoading) return null;
  return (
    <Flex direction="column" style={{ margin: "40px" }}>
      {data.map((item) => (
        <BucketItem key={item.id} item={item} />
      ))}
    </Flex>
  );
};

export default BucketPage;

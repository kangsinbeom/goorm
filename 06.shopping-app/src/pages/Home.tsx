import ItemList from "../components/home/ItemList";
import Button from "../components/shared/Button";
import Flex from "../components/shared/Flex";
import Text from "../components/shared/Text";

const categorys = ["All", "Nike", "Adidas", "Puma", "Nerdy"];

const HomePage = () => {
  return (
    <Flex direction="column" align="center">
      <Text typography="t1" bold={true} style={{ marginTop: "20px" }}>
        Products
      </Text>
      <Flex style={{ gap: "20px", marginTop: "20px" }}>
        {categorys.map((category) => (
          <Button key={category}>{category}</Button>
        ))}
      </Flex>
      <ItemList />
    </Flex>
  );
};
export default HomePage;

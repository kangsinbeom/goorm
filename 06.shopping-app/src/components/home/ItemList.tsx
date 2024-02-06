import { css } from "@emotion/react";
import Flex from "../shared/Flex";
import Item from "./Item";
import useItems from "./hooks/useItems";

const ItemList = () => {
  const { data, isLoading } = useItems();

  if (data == null || isLoading) return null;
  return (
    <Flex css={itemContainer} justify="center">
      {data.items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Flex>
  );
};

const itemContainer = css`
  margin-top: 40px;
  flex-wrap: wrap;
  gap: 20px;
`;

export default ItemList;

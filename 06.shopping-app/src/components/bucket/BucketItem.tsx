import React from "react";
import { ItemProps } from "../home/Item";
import Flex from "../shared/Flex";
import Text from "../shared/Text";

const BucketItem = ({ item }: { item: ItemProps }) => {
  const { mainImageURL, name, price } = item;
  return (
    <Flex align="center">
      <img src={mainImageURL} alt="" />
      <Text>{name}</Text>
      <Text>{price}</Text>
    </Flex>
  );
};

export default BucketItem;

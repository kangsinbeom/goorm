import { css } from "@emotion/react";
import Flex from "../shared/Flex";
import Text from "../shared/Text";
import { colors } from "../../styles/colorPalette";
import { Link } from "react-router-dom";
import Button from "../shared/Button";
import { MouseEvent } from "react";
import { setCart } from "../../apis/cart";
import useUser from "../../hooks/useUser";
import { ItemValue } from "../../models/cart";

export interface ItemProps extends ItemValue {
  id: string;
}

const Item = ({ item }: { item: ItemProps }) => {
  const user = useUser();
  const { id, price } = item;
  const handleClickButton = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    await setCart({ item, userId: user?.uid as string });

    alert("장바구니에 담기");
  };
  return (
    <Link to={`/${id}`}>
      <Flex direction="column" align="center" css={itemContainerStyles}>
        <img src={item.mainImageURL} width={200} height={250} />
        <Text>아이템 이름</Text>
        <Flex css={bottomBoxStyles} align="center">
          <Button onClick={handleClickButton}>장바구니 담기</Button>
          <Text>{`${price}원`}</Text>
        </Flex>
      </Flex>
    </Link>
  );
};

const itemContainerStyles = css`
  width: 300px;
  height: 400px;
  padding: 30px;
  box-sizing: border-box;
  border: 1px solid ${colors.grey};
  gap: 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const bottomBoxStyles = css`
  gap: 20px;
  & button {
    flex: 1;
  }
`;

export default Item;

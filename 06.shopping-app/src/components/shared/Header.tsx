import styled from "@emotion/styled";
import Flex from "./Flex";
import Text from "./Text";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { signOut } from "firebase/auth";
import { auth } from "../../apis/firebase";

const Header = () => {
  const user = useUser();
  const navigate = useNavigate();
  return (
    <Container>
      <Flex justify="space-between">
        <Text bold={true} color="purple" onClick={() => navigate("/")}>
          shop
        </Text>
        <Flex align="center" css={iconBoxStyles}>
          <Shopping onClick={() => navigate("/bucket")} />
          <Person />
          {user ? (
            <Logout onClick={() => signOut(auth)} />
          ) : (
            <Login onClick={() => navigate("/login")} />
          )}
        </Flex>
      </Flex>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  padding: 20px 40px;
  box-shadow: 0px 2px 5px 2px #8080801f;
`;

const iconBoxStyles = css`
  gap: 24px;
`;

interface IconProps {
  onClick?: () => void;
}

const Shopping = ({ onClick }: IconProps) => {
  return (
    <svg
      onClick={onClick}
      className="feather feather-shopping-cart"
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
};
const Person = () => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
    >
      <title />
      <g data-name="Layer 19" id="Layer_19">
        <path
          className="cls-1"
          d="M16,17a8,8,0,1,1,8-8A8,8,0,0,1,16,17ZM16,3a6,6,0,1,0,6,6A6,6,0,0,0,16,3Z"
        />
        <path
          className="cls-1"
          d="M23,31H9a5,5,0,0,1-5-5V22a1,1,0,0,1,.49-.86l5-3a1,1,0,0,1,1,1.72L6,22.57V26a3,3,0,0,0,3,3H23a3,3,0,0,0,3-3V22.57l-4.51-2.71a1,1,0,1,1,1-1.72l5,3A1,1,0,0,1,28,22v4A5,5,0,0,1,23,31Z"
        />
      </g>
    </svg>
  );
};

const Login = ({ onClick }: IconProps) => {
  return (
    <svg
      onClick={onClick}
      enableBackground="new 0 0 800 800"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 800 800"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
    >
      <g>
        <path d="M240,661.3h96v85.3c0,11.7,6.4,22.4,16,27.7c5.3,3.2,10.7,4.3,16,4.3c5.3,0,11.7-1.1,17.1-4.3l192-117.3   c9.6-6.4,14.9-17.1,14.9-27.7V74.7c0,0,0,0,0-1.1c0-2.1,0-4.3-1.1-6.4c0,0,0,0,0-1.1v-1.1c-1.1-2.1-1.1-4.3-2.1-6.4   c0,0,0-1.1-1.1-1.1c-1.1-2.1-3.2-4.3-4.3-5.3l-1.1-1.1c-2.1-2.1-3.2-3.2-5.3-4.3l0,0l0,0c-2.1-1.1-4.3-2.1-7.5-3.2h-1.1   c-4.3-1.1-6.4-1.1-8.5-1.1H240c-18.1,0-32,13.9-32,32v554.7C208,647.5,221.9,661.3,240,661.3z M400,210.1l128-77.9v480l-128,77.9   V210.1z" />
      </g>
    </svg>
  );
};

const Logout = ({ onClick }: IconProps) => {
  return (
    <svg
      onClick={onClick}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clipRule="evenodd"
        d="M6 4C5.44772 4 5 4.44771 5 5L5 19C5 19.5523 5.44772 20 6 20H14C14.5523 20 15 20.4477 15 21C15 21.5523 14.5523 22 14 22H6C4.34315 22 3 20.6569 3 19L3 5C3 3.34314 4.34315 2 6 2L14 2C14.5523 2 15 2.44772 15 3C15 3.55229 14.5523 4 14 4L6 4ZM15.2929 7.29289C15.6834 6.90237 16.3166 6.90237 16.7071 7.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071C14.9024 16.3166 14.9024 15.6834 15.2929 15.2929L17.5858 13H9C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11H17.5858L15.2929 8.70711C14.9024 8.31658 14.9024 7.68342 15.2929 7.29289Z"
        fill="black"
        fillRule="evenodd"
      />
    </svg>
  );
};

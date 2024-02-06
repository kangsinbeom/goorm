import { css } from "@emotion/react";
import Flex from "../shared/Flex";
import TextField from "../shared/TextField";
import Spacing from "../shared/Spacing";
import Text from "../shared/Text";
import Button from "../shared/Button";
import { useNavigate } from "react-router-dom";
import { FormValues } from "../../models/user";
import { useInput } from "../../hooks/useInput";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import validator from "validator";

const LoginForm = ({
  handleSubmit,
}: {
  handleSubmit: (form: Pick<FormValues, "email" | "password">) => void;
}) => {
  const navigate = useNavigate();
  const [dirty, setDirty] = useState<
    Partial<Pick<FormValues, "email" | "password">>
  >({});
  const [form, onChange] = useInput<Pick<FormValues, "email" | "password">>({
    password: "",
    email: "",
  });
  const handleBlur = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setDirty((prev) => ({
      ...prev,
      [name]: "true",
    }));
  }, []);
  const errors = useMemo(() => validate(form), [form]);
  return (
    <Flex align="center" justify="center" style={{ marginTop: "40px" }}>
      <Flex direction="column" css={inputBoxStyles}>
        <Text bold={true} typography="t1" style={{ textAlign: "center" }}>
          로그인
        </Text>
        <TextField
          label="이메일"
          onChange={onChange}
          value={form.email}
          hasError={Boolean(dirty.email) && Boolean(errors.email)}
          helpMessage={dirty.email ? errors.email : ""}
          onBlur={handleBlur}
          name="email"
        />
        <Spacing size={30} />
        <TextField
          label="비밀번호"
          onChange={onChange}
          value={form.password}
          hasError={Boolean(dirty.password) && Boolean(errors.password)}
          helpMessage={dirty.password ? errors.password : ""}
          onBlur={handleBlur}
          name="password"
          type="password"
        />
        <Spacing size={30} />
        <Button onClick={() => handleSubmit(form)}>로그인하기</Button>
        <Spacing size={10} />
        <Text
          typography="t6"
          color="grey"
          css={linkStyles}
          onClick={() => navigate("/signup")}
        >
          아이디가 없으신가요?
        </Text>
      </Flex>
    </Flex>
  );
};

const linkStyles = css`
  text-align: center;
  cursor: pointer;
`;

const inputBoxStyles = css`
  width: 500px;
  height: 400px;
  padding: 30px;
  box-sizing: border-box;
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

const validate = (formValue: Pick<FormValues, "email" | "password">) => {
  const errors: Partial<Pick<FormValues, "email" | "password">> = {};
  if (validator.isEmail(formValue.email) === false) {
    errors.email = "이메일을 확인해주세요";
  }

  if (formValue.password.length < 8) {
    errors.password = "비밀번호를 8글자 이상 입력해주세요";
  }
  return errors;
};

export default LoginForm;

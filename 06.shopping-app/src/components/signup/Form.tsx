import { css } from "@emotion/react";
import Flex from "../shared/Flex";
import TextField from "../shared/TextField";
import Spacing from "../shared/Spacing";
import Text from "../shared/Text";
import Button from "../shared/Button";
import { useInput } from "../../hooks/useInput";
import validator from "validator";
import { FormValues } from "../../models/user";
import { ChangeEvent, useCallback, useMemo, useState } from "react";

const SignupForm = ({
  handleSubmit,
}: {
  handleSubmit: (form: FormValues) => void;
}) => {
  const [dirty, setDirty] = useState<Partial<FormValues>>({});
  const [form, onChange] = useInput<FormValues>({
    name: "",
    password: "",
    rePassword: "",
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
  const isPossible = Object.keys(errors).length === 0;
  return (
    <Flex align="center" justify="center" style={{ marginTop: "40px" }}>
      <Flex direction="column" css={inputBoxStyles}>
        <Text bold={true} typography="t1" style={{ textAlign: "center" }}>
          회원가입
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
        <TextField
          label="비밀번호확인"
          onChange={onChange}
          value={form.rePassword}
          hasError={Boolean(dirty.rePassword) && Boolean(errors.rePassword)}
          helpMessage={dirty.rePassword ? errors.rePassword : ""}
          onBlur={handleBlur}
          name="rePassword"
          type="password"
        />
        <Spacing size={30} />
        <TextField
          label="아이디"
          onChange={onChange}
          value={form.name}
          hasError={Boolean(dirty.name) && Boolean(errors.name)}
          helpMessage={dirty.name ? errors.name : ""}
          onBlur={handleBlur}
          name="name"
        />
        <Spacing size={50} />

        <Button
          onClick={() => handleSubmit(form)}
          disabled={isPossible === false}
        >
          회원가입하기
        </Button>
      </Flex>
    </Flex>
  );
};

const inputBoxStyles = css`
  width: 500px;
  padding: 30px;
  box-sizing: border-box;
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

const validate = (formValue: FormValues) => {
  const errors: Partial<FormValues> = {};
  if (validator.isEmail(formValue.email) === false) {
    errors.email = "이메일을 확인해주세요";
  }

  if (formValue.password.length < 8) {
    errors.password = "비밀번호를 8글자 이상 입력해주세요";
  }

  if (formValue.rePassword.length < 8) {
    errors.rePassword = "비밀번호를 8글자 이상 입력해주세요";
  } else if (
    validator.equals(formValue.password, formValue.rePassword) === false
  ) {
    errors.rePassword = "비밀번호를 확인해주세요";
  }
  if (formValue.name.length < 2) {
    errors.name = "이름은 2글자 이상 작성해주세요";
  }
  return errors;
};

export default SignupForm;

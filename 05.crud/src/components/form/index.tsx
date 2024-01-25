import Input from "../input";
import * as s from "./styles";
import Button from "../button";
import { useInput } from "../../hooks/useInput";
import { toast } from "react-toastify";
import { FormEvent } from "react";
import { useSetRecoilState } from "recoil";
import { listArray } from "../../recoil/atoms";
const Form = () => {
  const [form, onChange] = useInput({ title: "", cost: "0" });
  const setList = useSetRecoilState(listArray);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setList((prev) => (prev ? [...prev, form] : [form]));
  };
  return (
    <s.Form onSubmit={onSubmit}>
      <s.InputBox>
        <Input
          title="지출 항목"
          id="title"
          type="text"
          placeholder="예) 렌트비"
          onChange={onChange}
          value={form.title}
        />
        <Input
          title="비용"
          id="cost"
          type="number"
          onChange={onChange}
          value={form.cost}
        />
      </s.InputBox>
      <Button
        title="제출"
        type="submit"
        icon="send"
        onClick={() => toast.success("adfasd")}
      />
    </s.Form>
  );
};

export default Form;

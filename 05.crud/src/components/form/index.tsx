import Input from "../input";
import * as s from "./styles";
import Button from "../button";
const Form = () => {
  return (
    <s.Form>
      <s.InputBox>
        <Input
          title="지출 항목"
          id="title"
          type="text"
          placeholder="예) 렌트비"
        />
        <Input title="비용" id="cost" type="number" />
      </s.InputBox>
      <Button title="제출" type="submit" icon="send" />
    </s.Form>
  );
};

export default Form;

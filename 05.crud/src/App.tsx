import { useRecoilValue } from "recoil";
import "./App.css";

import Form from "./components/form";
import List from "./components/list";
import { totalPrice } from "./recoil/selector";

function App() {
  const total = useRecoilValue(totalPrice);
  return (
    <>
      <div className="app">
        <h1>예산 계산기</h1>
        <div className="main">
          <Form />
          <List />
        </div>
        <div className="total">총 지출: {total}원</div>
      </div>
    </>
  );
}

export default App;

import "./App.css";

import Form from "./components/form";
import List from "./components/list";

function App() {
  return (
    <div className="app">
      <h1>예산 계산기</h1>
      <div className="main">
        <Form />
        <List />
      </div>
      <div className="total">총 지출: 1200원</div>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import BucketPage from "./pages/Bucket";
import Header from "./components/shared/Header";
import SignupPage from "./pages/Signup";
import DetailPage from "./pages/Detail";
import TestPage from "./pages/Test";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/bucket" Component={BucketPage} />
        <Route path="/login" Component={LoginPage} />
        <Route path="/signup" Component={SignupPage} />
        <Route path="/:id" Component={DetailPage} />
        <Route path="/test" Component={TestPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

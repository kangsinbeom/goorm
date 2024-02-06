import { useNavigate } from "react-router-dom";
import { signup } from "../apis/user";
import SignupForm from "../components/signup/Form";
import { FormValues } from "../models/user";

const SignupPage = () => {
  const navigate = useNavigate();
  const handleSubmit = async (form: FormValues) => {
    try {
      await signup(form);
      navigate("/");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
      <SignupForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default SignupPage;

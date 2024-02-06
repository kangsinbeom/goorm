import { useCallback } from "react";
import LoginForm from "../components/login/Form";
import { FormValues } from "../models/user";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../apis/firebase";

const LoginPage = () => {
  const navigate = useNavigate();
  const handleSubmit = useCallback(
    async (form: Pick<FormValues, "email" | "password">) => {
      const { email, password } = form;
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/");
      } catch (e) {
        if (e instanceof FirebaseError) {
          if (e.code === "auth/wrong-password") {
            alert("계정정보를 다시 확인해주세요");
          }
          alert("잠시 후 다시 시도해주세요");
        }
      }
    },
    [navigate]
  );
  return (
    <div>
      <LoginForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default LoginPage;

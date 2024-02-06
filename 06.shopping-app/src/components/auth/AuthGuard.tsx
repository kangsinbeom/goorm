import { onAuthStateChanged } from "firebase/auth";
import { useSetRecoilState } from "recoil";
import { userAtoms } from "../../atom/user";
import { auth } from "../../apis/firebase";
import { useState } from "react";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const [initialize, setInitialize] = useState<boolean>(false);
  const setUser = useSetRecoilState(userAtoms);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser({
        uid: user.uid,
        displayName: user.displayName ?? "",
        email: user.email ?? "",
      });
    } else {
      setUser(null);
    }

    setInitialize(true);
  });

  if (!initialize) {
    return <div>인증 처리중... 로딩중...</div>;
  }
  return <>{children}</>;
};

export default AuthGuard;

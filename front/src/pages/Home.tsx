import { signInWithPopup, User } from "firebase/auth";
import { FC, memo } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
// import { useRecoilState } from "recoil";

import { auth, provider } from "../firebase";
// import { userState } from "../store/userState";

export const Home: FC = memo(() => {
  const [user] = useAuthState(auth);
  // const [userInfo, setUserInfo] = useRecoilState<User | null | undefined>(
  //   userState
  // );
  // setUserInfo(user);
  // const setUser = useRecoilState(userState);
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Googleアカウントでログインしました。");
        console.log(result);
        // console.log(userInfo);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>App Name</h1>
      {user ? (
        <>
          <img src={auth.currentUser?.photoURL ?? undefined} />
          {/* <p>{userInfo?.email}</p> */}
          <button onClick={() => auth.signOut()}>サインアウト</button>
        </>
      ) : (
        <button onClick={signInWithGoogle}>Googleアカウントでログイン</button>
      )}
    </div>
  );
});
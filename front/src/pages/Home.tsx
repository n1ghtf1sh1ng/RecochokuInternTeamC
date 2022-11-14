import { signInWithPopup, User } from "firebase/auth";
import { FC, memo } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
// import { useRecoilState } from "recoil";

import { auth, provider } from "../firebase";
// import { userState } from "../store/userState";

export const Home: FC = memo(() => {
  let navigate = useNavigate();
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
        console.log(user?.uid);
        navigate("/schedule");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={"bg-orange-100 text-center h-screen"}>
      <div className={"mt-8"}>
        <h1
          className={
            "bg-orange-300  mt-5 my-10 mb-10 p-20 rounded-md text-8xl font-bold font-mono text-slate-500"
          }
        >
          [bot-i]
        </h1>
        {user ? (
          <>
            <img src={auth.currentUser?.photoURL ?? undefined} />
            {/* <p>{userInfo?.email}</p> */}
            <button onClick={() => auth.signOut()}>サインアウト</button>
          </>
        ) : (
          <button
            className={
              "bg-slate-100 mx-10 my-24 px-8 py-20 rounded-md text-3xl"
            }
            onClick={signInWithGoogle}
          >
            Googleアカウントでログイン
          </button>
        )}
      </div>
    </div>
  );
});

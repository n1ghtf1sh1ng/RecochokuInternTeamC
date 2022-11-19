import { signInWithPopup } from "firebase/auth";
import { FC, memo } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { auth, provider } from "../firebase";
import { userState } from "../store/userState";

export const Home: FC = memo(() => {
  let navigate = useNavigate();
  const setUserData = useSetRecoilState(userState);
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        console.log("Googleアカウントでログインしました。");
        console.log(auth.currentUser?.displayName);
        setUserData({
          name: auth.currentUser?.displayName,
          photoURL: auth.currentUser?.photoURL,
        });
        navigate("/profile");
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
            "bg-orange-300  mt-5 my-10 mb-10 p-20 rounded-md text-5xl font-bold"
          }
        >
          App Name
        </h1>
        {auth.currentUser?.displayName ? (
          <>
            <img
              src={auth.currentUser?.photoURL ?? undefined}
              alt="profile-icon"
            />
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

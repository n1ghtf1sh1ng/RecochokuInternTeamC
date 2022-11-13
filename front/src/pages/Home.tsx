// import { signInWithPopup, User } from "firebase/auth";
// import { FC, memo } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// // import { useRecoilState } from "recoil";

// import { auth, provider } from "../firebase";
// // import { userState } from "../store/userState";

// export const Home: FC = memo(() => {
//   const [user] = useAuthState(auth);
//   // const [userInfo, setUserInfo] = useRecoilState<User | null | undefined>(
//   //   userState
//   // );
//   // setUserInfo(user);
//   // const setUser = useRecoilState(userState);
//   const signInWithGoogle = () => {
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         console.log("Googleアカウントでログインしました。");
//         console.log(result);
//         // console.log(userInfo);
//         console.log(user);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div className ={"bg-orange-100 text-center h-screen"}>
//       <div className = {"mt-8"}>
//         <h1  className = {"bg-orange-300  mt-5 my-10 mb-10 p-20 rounded-md text-5xl font-bold"}>App Name</h1>
//         {user ? (
//           <>
//             <img src={auth.currentUser?.photoURL ?? undefined} />
//             {/* <p>{userInfo?.email}</p> */}
//             <button onClick={() => auth.signOut()}>サインアウト</button>
//           </>
//         ) : (
//           <button className = {"bg-slate-100 mx-10 my-24 px-8 py-20 rounded-md text-3xl"}  onClick={signInWithGoogle}>Googleアカウントでログイン</button>
//         )}
//       </div>
//     </div>
//   );
// });


<div className="bg-orange">
  <div
    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    className="box-content w-full p-4 border-0 mx-auto justify-center relative h-screen"
  >
    <div className="text-center pt-12">
      <h1 className="text-white md:text-8xl sm:text-7xl text-6xl px-4 font-black mt-20 mb-16">アプリの名前</h1>
      <ul className="my-12">
        <li className="my-8">
        {user ? (
//           <>
//             <img src={auth.currentUser?.photoURL ?? undefined} />
//             {/* <p>{userInfo?.email}</p> */}
//             <button onClick={() => auth.signOut()}>サインアウト</button>
//           </>
//         ) : (
//           <button className = {"bg-slate-100 mx-10 my-24 px-8 py-20 rounded-md text-3xl"}  onClick={signInWithGoogle}>Googleアカウントでログイン</button>
//         )}
        </li>
        <li>
          <button
            className="text-white font-black text-lg w-48 rounded-lg bg-yellow-400 shadow-yellow1 px-4 py-2 mb-4 hover:bg-yellow-500 hover:shadow-yellow2"
            onClick={() => navigate("/home")}
          >
            ゲストで始める
          </button>
        </li>
      </ul>
      <div className="text-white mt-20">
        登録は
          <Link to="/sign-up" className="text-blue-500 hover:opacity-80">こちら</Link>
      </div>
    </div>
  </div>
</div>
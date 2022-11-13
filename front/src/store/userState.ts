import { atom, RecoilState } from "recoil";
import { User } from "firebase/auth";

type UserState = User | null;

export const userState = atom<UserState>({
  key: "userState",
  default: null,
  dangerouslyAllowMutability: true,
})

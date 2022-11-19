import { atom } from "recoil";

import { UserState } from "../types/UserState";

export const userState = atom<UserState | null>({
  key: "userState",
  default: null
})

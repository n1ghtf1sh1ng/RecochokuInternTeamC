import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Profile, Schedule } from "../pages";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="schedule" element={<Schedule />} />
    </Routes>
  );
});

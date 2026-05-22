import { Route, Routes } from "react-router";
import { Home } from "../pages/home/home";
import { Schedule } from "../pages/schedule/schedule";
import { Teams } from "../pages/teams/teams";
export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/teams" element={<Teams />} />
    </Routes>
  );
}

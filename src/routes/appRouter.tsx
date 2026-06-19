import { Route, Routes } from "react-router";
import { Home } from "../pages/home/home";
import { PageSchedule } from "../pages/schedule/schedule";
import { Teams } from "../pages/teams/teams";
import { PageResults } from "../pages/results/results"

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/schedule" element={<PageSchedule/>} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/results" element={<PageResults/>}/>
    </Routes>
  );
}

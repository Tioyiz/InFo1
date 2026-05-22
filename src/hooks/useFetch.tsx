import { useState, useEffect } from "react";
import {
  getChampionshipDrivers,
  getChampionshipTeams,
  getCircuits,
  getSesion,
  getResults,
  getDrivers,
} from "../api/services/fetchdata";

export function useFetch() {
  const [circuits, setCircuits] = useState();
  const [session, setSession] = useState();
  const [result, setResult] = useState();
  const [drivers, setDrivers] = useState();
  const [teamChamp, setTeamChamp] = useState();
  const [driversChamp, setDriversChamp] = useState();
  const countryName = "United States";
  const sesssionName = "Race";

  const delay = () => new Promise((resolve) => setTimeout(resolve, 500));

  useEffect(() => {
    async function fetchdata() {
      const circ = await getCircuits();
      setCircuits(circ);
    }

    fetchdata();
  }, []);

  return {
    circuits,
    session,
    result,
    drivers,
    teamChamp,
    driversChamp,
  };
}

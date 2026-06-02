import { useState, useEffect } from "react";
import {
  getChampionshipDrivers,
  getChampionshipTeams,
  getCircuits,
  getSesion,
  getResults,
  getDrivers,
  getAllSessions, 
  getGrid
} from "../api/services/fetchdata";

export function useFetch() {
  const [circuits, setCircuits] = useState();
  const [session, setSession] = useState();
  const [result, setResult] = useState();
  const [drivers, setDrivers] = useState();
  const [teamChamp, setTeamChamp] = useState();
  const [driversChamp, setDriversChamp] = useState();
  const [allSessions, setAllSessions] = useState()
  const [grid, setGrid] = useState()
  const [loading, setLoading] = useState(false)

  const countryName = "United States";
  const sesssionName = "Race";
  
  let sessionKey:Number|undefined = ''
  
  const delay = () => new Promise((resolve) => setTimeout(resolve, 500));

  useEffect(() => {
    async function fetchdata() {
     try {
        setLoading(true)
     
      const dataCircuit = await getCircuits();
      setCircuits(circ);
      
      const dataSession = await getSesion(countryName, sesssionName)
      setSession(dataSession)
      sessionKey = dataSession[0].session_key 
      
      await delay()
      
      const data_cha_drv = await getChampionshipDrivers(sessionKey)
      setDriversChamp(data_cha_drv)
      
      const data_cha_teams = await getChampionshipTeams(sessionKey)
      setTeamChamp(data_cha_teams)
      
      await delay()
      
      const dataResults = await getResults(sessionKey)
      setResult(dataResults)
      
      const dataDrivers = await getDrivers(sessionKey)
      setDrivers(dataDrivers)
      
      await delay()
      
      const dataAllSessions = await getAllSessions(countryName)
      setAllSessions(dataAllSessions)
      
      const dataGrid = await getGrid(sessionKey)
      setGrid(dataGrid)
     } catch (e) {
       console.log(e)
     }finally{
       setLoading(false)
     }
      
      
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
    allSessions, 
    grid, 
    countryName, 
    sesssionName, 
    loading
  };
}

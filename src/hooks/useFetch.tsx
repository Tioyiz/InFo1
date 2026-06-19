import { useState, useEffect } from "react";
import {
  getChampionshipDrivers,
  getChampionshipTeams,
  getCircuits,
  getSesion,
  getResults,
  getDrivers,
  getAllSessions, 
  getGridKey, 
  getGrid
} from "../api/services/fetchdata";
import { delay } from "../utils/functions";
import { Circuits, Drivers, DriversChampionship, Grid, Results, Session, TeamsChampionship } from "../types/types";

export function useFetch() {
  const [circuits, setCircuits] = useState<Circuits[]>([]);
  const [session, setSession] = useState<Session[]>([]);
  const [result, setResult] = useState<Results[]>([]);
  const [drivers, setDrivers] = useState<Drivers[]>([]);
  const [teamChamp, setTeamChamp] = useState<TeamsChampionship[]>([]);
  const [driversChamp, setDriversChamp] = useState<DriversChampionship[]>([]);
  const [allSessions, setAllSessions] = useState<Session[]>([])
  const [grid, setGrid] = useState<Grid[]>([])
  const [allResults, setAllResults] = useState(() =>{
    const data = localStorage.getItem('allResults')
    return  data ? JSON.parse(data) : []
  } )
  
  const [loading, setLoading] = useState<boolean>(false)

  //results
  const countryName = "United States";
  const sessionName = "Race";
  let sessionKey:Number 
 
  //grid
  const gridS = "Qualifying"
  let gridkey
  
  //next race
  const nextRace = 'Barcelona'
  
  
  
  
  useEffect(() =>{
    localStorage.setItem('allResults', JSON.stringify(allResults))
  }, [allResults]) 

  useEffect(() => {
    async function fetchdata() {
     try {
        setLoading(true)
     
      const dataCircuit = await getCircuits();
      setCircuits(dataCircuit);
      
      const dataSession = await getSesion(countryName, sessionName)
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
      setAllResults( (prev : Results[][]) =>{
          const exist = 
            prev.some(pv =>pv.some(p =>p.session_key === dataResults[0].session_key))
           
          return exist ? [...prev] : [...prev, dataResults] 
        } ) 
      
      const dataDrivers = await getDrivers(sessionKey)
      setDrivers(dataDrivers)
      
      await delay()
      
      const dataAllSessions = await getAllSessions(nextRace)
      setAllSessions(dataAllSessions)
      
      const gridKey = await getGridKey(countryName, gridS)
        gridkey = gridKey[0].session_key
        
      const dataGrid = await getGrid(gridkey)
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
    sessionName, 
    allResults,
    nextRace, 
    loading
  };
}

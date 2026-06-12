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

export function useFetch() {
  const [circuits, setCircuits] = useState();
  const [session, setSession] = useState();
  const [result, setResult] = useState();
  const [drivers, setDrivers] = useState();
  const [teamChamp, setTeamChamp] = useState();
  const [driversChamp, setDriversChamp] = useState();
  const [allSessions, setAllSessions] = useState()
  const [grid, setGrid] = useState()
  const [allResults, setAllResults] = useState(() =>{
    const data = localStorage.getItem('allResults')
    return JSON.parse(data) || []
  } )
  
  const [loading, setLoading] = useState(false)

  //results
  const countryName = "United States";
  const sessionName = "Race";
  let sessionKey:Number|undefined = ''
 
  //grid
  const gridS = 'Qualifying'
  let gridkey
  
  //next race
  const nextRace = 'Barcelona'
  
  
  const delay = () => new Promise((resolve) => setTimeout(resolve, 500));
  
  useEffect(() =>{
    localStorage.setItem('allResults', JSON.stringify(allResults))
  }, [allResults]) 

  useEffect(() => {
    async function fetchdata() {
     try {
        setLoading(true)
     
      const dataCircuit = await getCircuits();
      setCircuits(circ);
      
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
      setAllResults( prev =>{
          const exist = 
            prev.some(pv =>pv.some(p =>p.session_key === dataResultados[0].session_key))
           
          return exist ? [...prev] : [...prev, dataResultados] 
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
    allSessions, 
    nextRace, 
    loading
  };
}

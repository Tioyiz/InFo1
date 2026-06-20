
import { useFetch } from "../../hooks/useFetch";
import { DriversChampionships } from "../../components/driversChampionship";
import { NextRace } from "../../components/nextRace";
import { SessionsDate } from "../../components/sessionsDate";
import { Schedule } from "../../components/schedule";
import { LastResults } from "../../components/raceResults";
import { Teams } from "../../components/teamsChampionship";
import { Loader } from "../../components/loader";
import "./home.css"

export function Home() {
 const {
    circuits,
    session,
    result,
    drivers,
    teamChamp,
    driversChamp,
    countryName, 
    sessionName,
    allSessions, 
    nextRace, 
    loading
  } = useFetch();

  return (
    <main>
     {
       loading ?
       <Loader/> :
       <main>
              <DriversChampionships
                campeonato={driversChamp}
                pilotos={drivers}
              />
              <div className='right-cont'>
               
              <div className='date-sessions'>
              <NextRace
               nextRace={nextRace}
               circuitos={circuits}/>
              <SessionsDate
                nextRace={nextRace}
                sessions={allSessions}
              />
              </div>
              <Schedule
                circuitos={circuits}
              />
              <div className='results-teams'>
               <LastResults
                results={result}
                pilotos={drivers}
                countryName={countryName}
                sesionName={sessionName}
               />
              <Teams
                equipos={teamChamp}
                pilotos={drivers}
               />
               </div>
              </div>
            </main>  
     }
     
     
    </main>
  )
}

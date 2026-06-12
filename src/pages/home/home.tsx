import { Link } from "react-router";
import { getCircuits, getSesion } from "../../api/services/fetchdata";
import { useFetch } from "../../hooks/useFetch";
import {Loader}  from "../../components/loader.tsx"
import { useState } from "react";
import "../home.css"

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
              <DriversChampionship
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
               <Results
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

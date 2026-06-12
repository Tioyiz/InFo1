import {getDate} from '../utils'

function SessionsDate({ nextRace,sessions }) {
  if (!sessions) return <h3>No hay datos de sesión</h3>;
  
  return (
    <section className='sessions-date'>
       <h2>GP {nextRace} | Sessions</h2>
     {
       sessions.map((ses, i) =>
         <div key={i}>
           <h3>
            {getDate(ses.date_start, ses.date_end).dateGP.split('-')[0]}
           </h3>
           <div>
            <h2> { ses.session_name}</h2>
            <h3> { getDate(ses.date_start, ses.date_end).dateSessions }</h3>
           </div>
         </div>
        )
     }
   </section>
  ) 
}
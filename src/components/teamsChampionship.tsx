import { Drivers, TeamsChampionship } from "../types/types"
import { teamLogos } from "../utils/functions"


type Props = {
  equipos : TeamsChampionship[], 
  pilotos : Drivers[]
}

export function Teams({ equipos, pilotos }:Props) {
  
  const newData = equipos.map(equipo => {
    const info = pilotos.find(obj => obj.team_name === equipo.team_name)
    
    return {
     ...equipo,
     ...info,
     logo : teamLogos[equipo.team_name]
    }
    
  })
  
  
  return (
    <section className='teams'>
      <h1> Campeonato de Equipos </h1>
       {
        newData.map((equipo, idx) => 
         <div key={idx}
          className='positions'
          style={{
           background :  `linear-gradient(150deg, #${equipo.team_colour}dd, #1f1f1f, #1f1f1f, #1f1f1f )`
         }}
         >
         <div>
          <h3>{ equipo.position_current }</h3>
          <img src={equipo.logo}/>
          <h2>  { equipo.team_name }</h2>
         </div>
          <h2>{ equipo.points_current }pts</h2>
         </div>
        )
      }
    </section>
  )
}
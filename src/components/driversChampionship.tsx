import { Drivers, DriversChampionship } from "../types/types"

type Props = {
  campeonato : DriversChampionship[], 
  pilotos : Drivers[]
}

export function DriversChampionship({ campeonato, pilotos }:Props) {
  
  const newData = campeonato.map(piloto => {
    const info = pilotos.find(obj => obj.driver_number === piloto.driver_number)
    return Object.assign(piloto, info)
    
  })  
  
  return (
    <section className='drivers' >
      <h1> Campeonato de Pilotos </h1>
      {
        newData.map((piloto, idx) => 
         <div key={idx}
         className='positions'
         style={{
           background :  `linear-gradient(150deg, #${piloto.team_colour}dd, #1f1f1f, #1f1f1f, #1f1f1f )`
         }}
         >
         <div>
          <h3>{ piloto.position_current }</h3 >
         
           <img src={ piloto.headshot_url }/>
           <h2>{ piloto.broadcast_name }</h2>
           <span>  { piloto.team_name} </span>
          </div>
          <h3>{ piloto.points_current } pts</h3>
         </div>
        )
      }
      
    </section>
  )
}
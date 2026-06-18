import { Drivers, Grid } from "../types/types"
import { getDriverData, getTime } from "../utils/functions"

type Props = {
  grid : Grid[], 
  pilotos : Drivers[]
}

function Grid({ grid, pilotos }:Props) {
  if (pilotos.length == 0 ) {
    return null
  }
 
 const driversName = getDriverData({results:grid, pilotos} )
  
  return(
    <section className='grid'>
      <h1>Parrilla de Salida</h1>
      <div className='div'>
      {
        grid.map((g, i) =>
         <div key={i} className='grid-card'
           style={
              {
                borderRight: `5px solid #${driversName[i]?.team_colour}`  
              }
            }
         > 
           <h2> { g.position } </h2>
           <div className='grid-img'
            style={
              {
                background:`radial-gradient(circle,#${driversName[i]?.team_colour}80 0%, #${driversName[i]?.team_colour}20 10%, transparent 100%)`, 
                
              }
            }
           >
            <img src={ driversName[i]?.headshot_url }/>
           </div>
           <div className='grid-info'
             style={
              {
                background:`radial-gradient(circle,#${driversName[i]?.team_colour}80 0%, #${driversName[i]?.team_colour}40 10%, transparent 100%)`
              }
            } 
           >
             <h4>
               { driversName[i]?.first_name }
             </h4>
             <h3>
               { driversName[i]?.last_name }
             </h3>
             <h4>
               { getTime(g.lap_duration) }
             </h4>
           </div>
         </div>
        )
      }
      </div>
    </section> 
  ) 
}
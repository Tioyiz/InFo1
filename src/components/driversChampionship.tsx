export function DriversChampionship({ campeonato, pilotos }) {
  
  const newData = campeonato.map(piloto => {
    const info = pilotos.find(obj => obj.driver_number === piloto.driver_number)
    return Object.assign(piloto, info)
    
  })
  
  return (
    <section className='drivers' >
      <h1> Campeonato de Pilotos </h1>
      {
        newData.map((piloto, idx) => 
         <div key={idx} >
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
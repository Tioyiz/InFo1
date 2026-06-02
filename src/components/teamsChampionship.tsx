

export function Teams({ equipos, pilotos }) {
  
  const newData = equipos.map(equipo => {
    const info = pilotos.find(obj => obj.team_name === equipo.team_name)
    info['logo'] = teamLogos[equipo.team_name]
    return Object.assign(equipo, info)
    
  })
  
  
  return (
    <section className='teams'>
      <h1> Campeonato de Equipos </h1>
       {
        newData.map((equipo, idx) => 
         <div key={idx} >
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
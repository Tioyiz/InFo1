const teamLogos = {
  Alpine: '/Img/teams/alpine.jpeg',
  'Red Bull Racing': '/Img/teams/redbull.jpg',
  McLaren: '/Img/teams/mclaren.jpg',
  Mercedes: '/Img/teams/mercedes.jpeg',
  Ferrari: '/Img/teams/ferrari.png',
  'Aston Martin': '/Img/teams/aston.jpeg',
  Cadillac: '/Img/teams/cadillac.jpeg',
  'Haas F1 Team': '/Img/teams/hass.png',
  'Racing Bulls': '/Img/teams/rb.png',
  Audi: '/Img/teams/audi.png',
  Williams: '/Img/teams/willians.png'
} 


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
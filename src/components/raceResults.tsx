export function Results({ results, countryName, pilotos,
  sesionName }) {
  
  if ( results.length === 0) {
    return null
  }
  
  const winner = pilotos.find(d => d.driver_number === results[0].driver_number)
  
  const driversName = results.map(res => pilotos.find(pil => pil.driver_number === res.driver_number)).slice(1)
  
  const format = (n) => String(n).padStart(2, '0')
  
  const totalSegundos = results[0].duration
  const horas = Math.floor(totalSegundos / 3600)
  const minutos = Math.floor((totalSegundos % 3600) / 60)
  const segundos = (totalSegundos % 60).toFixed(3)
  const tiempo = `${format(horas)}:${format(minutos)}:${format(Math.floor(segundos))}`
  
  return (
    <section className='race-results'
     
     >
      <h2>Resultados de ultima sesion - {sesionName}</h2>
      <h3>Gran Premio de {countryName}</h3>
      
     <div>
       <div className='winner'
         style={{
          background:`linear-gradient(45deg, #${winner.team_colour},#${winner.team_colour}, #362941, #333 )`
         }}
         >
         <img className='winner-img'src={winner.headshot_url}/>
         <div > 
          <h4>Ganador</h4>
          <h2>{winner.full_name}</h2>
          <h3>{winner.team_name}</h3>
          <h5>{tiempo}</h5>
         </div>
       </div>
       {
        <table>
         <tbody>
          {
           results.slice(1).map((res,idx)=>
            <tr key={idx}>
             <td> {res.position}.-</td>
             <td> 
              <img src={driversName[idx] .headshot_url}/>
             </td>
             <td> 
              {driversName[idx].broadcast_name}
             </td>
             <td> {res.gap_to_leader} </td>
             <td> {res.points} pts</td>
           </tr>) 
          } 
         </tbody>
        </table>
       }
      </div>
    </section>
  )
}
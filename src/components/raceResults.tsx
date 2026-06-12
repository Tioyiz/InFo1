export function Results({ results, countryName, pilotos,
  sesionName }) {
  
  if ( results.length === 0) {
    return null
  }
  
  const winner = pilotos.find(d => d.driver_number === results[0].driver_number)
  
  const driversName = getDriverData(results, pilotos).slice(1)
  
  const totalSegundos = results[0].duration
  
  const tiempo = getTime(totalSegundos)
  
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
             <td>{res.position == 'null' ? 'dnf' : res.position} </td>
             <td> 
              <img src={driversName[idx] .headshot_url}/>
             </td>
             <td> 
              {driversName[idx].broadcast_name}
             </td>
             <td> +{res.gap_to_leader === null ? '-' : res.gap_to_leader}  </td>
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
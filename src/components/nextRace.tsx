import {useCounter} from '../../hooks/useCounterToNextRace.tsx'

function NextRace({circuitos, nextRace}) {
  const date = new Date(next.date_end).getTime()
  const {counter} = useCounter({date})
  
  if (circuitos.length === 0) return null
  
  const next = circuitos.find(circ => circ.country_name === nextRace)
  
  return(
    <section className='next-race'>
      <h2> Proxima Carrera</h2>
      <p>
        { next.meeting_official_name } - {next.location}
      </p>
      <h3>
        { getDate(next.date_start, next.date_end).dateGP }
      </h3>
      <img src={next.circuit_image}/>
      <h3> Race Start : { getDate(next.date_start, next.date_end).dateRace} (GMT {next.gmt_offset})
      </h3>
      <span> 
        
      </span>
      
    </section>
  )
}
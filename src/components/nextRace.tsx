import { useCounter } from "../hooks/useCounterToNextRace"
import { Circuits } from "../types/types"
import { getDate } from "../utils/functions"

type Props = {
  circuitos : Circuits[], 
  nextRace : string
}

export function NextRace({circuitos, nextRace}:Props) {
  
  if (circuitos.length === 0) return null
  
  const next = circuitos.find(circ => circ.location === nextRace) 
  
  const date = new Date(next?.date_end ?? 0 ).getTime()
  const {counter} = useCounter({date}) 
  
  return(
    <section className='next-race'>
      <h2> Proxima Carrera</h2>
      <p>
        { next?.meeting_official_name } - {next?.location}
      </p>
      <h3>
        { getDate(next?.date_start ?? 0, next?.date_end ?? 0).dateGP }
      </h3>
      <img src={next?.circuit_image}/>
      <h3> Race Start : { getDate(next?.date_start ?? 0, next?.date_end ?? 0).dateRace} (GMT {next?.gmt_offset})
      </h3>
      <span> 
        { counter }
      </span>
      
    </section>
  )
}
import { Link } from 'react-router'
import { getDate } from '../utils/functions'


export function Schedule({ circuitos }) {
  
  return (
    <section className='schedule'>
      {
        circuitos.map((circ, i) =>
        <Link to='/schedule' state={{ circuit: circ.location}}>
         <div key={i} id={circ.location} className='circuit-card'>
          <div>
            <img src={ circ.country_flag }/>
            <span>
              { getDate(circ.date_start, circ.date_end ).dateRace}
            </span>
          </div>
          <div>
             <span>
              { circ.country_name }
            </span>
             <span>
              { circ.location }
            </span>
          </div>
         </div>
        </Link>
        )
      }
    </section>
  )
}
import {getDate} from '../utils'

function Schedule({ circuitos }) {
  
  return (
    <section className='schedule'>
      {
        circuitos.map((circ, i) =>
         <div key={i} className='circuit-card'>
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
        )
      }
    </section>
  )
}
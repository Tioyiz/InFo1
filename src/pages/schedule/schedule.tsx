import {useState, useEffect } from 'react'
import { useLocation } from "react-router"
import { useFetch } from "../../hooks/useFetch";
import { getData } from '../../api/endpoint';
import { delay } from '../../utils/functions';
const BASE_URL = "https://api.openf1.org/v1";

export function PageSchedule(){
  const { circuits } = useFetch()
  const [data, setData] = useState([])
  const [loading, setLoading ] = useState(false)
  
  const location = useLocation()
  const { circuit } = location.state
  
  useEffect(() =>{
    const $el = document.getElementById(circuit)
    if(!$el) return null 
    $el.scrollIntoView({
      behavior : 'smooth', 
      block : 'start'
    }) 
  }, [circuit])  
  
useEffect(() => {
  const getDatos = async () => {
    setLoading(true)
    const results = []

    for (const circuito of circuits) {
      
      const res = await getData(
        `${BASE_URL}/sessions?location=${circuito.location}&year=2026`) 

      results.push(res)
      // Esperar 350ms entre llamadas
      await delay(300)
    }
    setLoading(false)
    setData(results)
  }

  getDatos()
}, [])


  
  return(
    <main className='page-schedule'>
     <div className='schedule-card'>
      {
        circuitos.map((circ,i) =>
         <section
          key={i}
          className='schedule-info'
          id={circ.location}
         >
          {
            circ.is_cancelled && 
             <span className='cancelled' >
               cancelado
             </span>
          }
          
          <div className='img'>
            <span>
              { circ.circuit_type }
            </span>
             <img className='circ-img' src={circ.circuit_image}/> 
          </div>
          <div className='info'>
           <h1>
             { circ.meeting_official_name }
           </h1>
           <h2>
             <img className='race-img' src={circ.country_flag}/>
             { circ.meeting_name } - {circ.location}
           </h2>
           <h3>
            { getDate(circ.date_start, circ.date_end).dateGP }
           </h3>
          </div>
        </section>
        )
      }
     </div>
     
    {
      loading 
       ? <Loader/> 
       :  <div className='sessions-card' >
           {
            data.map((sessions, id) =>
             <section key={id}
              className='schedule-sessions'>
             {
              sessions.map((ses, i) => 
               <div key={i} className='card-sessions'>
                 <h2>
                  {getDate(ses.date_start, ses.date_end).dateGP.split('-')[0]}
                 </h2>
                 <div>
                  <h3> { ses.session_name}</h3>
                  <h4> { getDate(ses.date_start, ses.date_end).dateSessions} </h4>
                 </div>
               </div>
              )
             }
             </section>
            )
           }
         </div> 
    }
    </main>
  )
}
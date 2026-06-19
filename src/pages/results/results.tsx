import { useFetch } from "../../hooks/useFetch";
import { Drivers, Results } from "../../types/types";

import "./results.css"

type NewData = Results & Drivers

export function PageResults(){
  
  const { allResults, drivers, circuits} = useFetch()
  
  if (!drivers  ||   circuits.length == 0) return null
  
  const newData:NewData[][] = allResults.map( (result:Results[]) =>
             result.map(( re, i ) =>{
             const info = drivers.find( (p:Drivers) => p.driver_number === re.driver_number)
            
             return {
              ...re, 
             ...info
             }
             } )
        )  
  
  const getNameGP = (key:number) =>  circuits.find( cir => cir.meeting_key === key )?.meeting_name ?? ""
  
  
  return(
    <main className='page-results'>
      {
        newData.map( (results, idx:number) =>
          <section key={idx} className='card-results'>
            <h1> 
              { getNameGP(results[0].meeting_key) }
            </h1>
            <div className='podio'>
              {
                results.slice(0,3).map(( res, i) => 
                  <div key={i} 
                    style={{
                      background: `linear-gradient(180deg, #${res.team_colour}, #000000ee )` 
                    }}
                    className='top'>
                    <span>{ res.position }</span>
                    <img src={ res.headshot_url}/>
                    <h2
                     style={{
                       background: `#${res.team_colour}`
                     }}
                    >{ res.last_name}</h2>
                  </div>
                )
              } 
            </div>
            <table>
              <tbody>
               {
                 results.slice(3).map((res,idx)=>
                    <tr key={idx}>
                     <td>
                      {res.position === null ? 'dnf' : res.position}
                     </td>
                     <td> 
                       <img src={ res.headshot_url}/>
                     </td>
                     <td> 
                        {res.full_name}
                     </td>
                     <td>
                       +{res.gap_to_leader === null ? '-' : res.gap_to_leader} 
                     </td>
                     <td> {res.points} pts</td>
                   </tr>
                  ) 
                } 
              </tbody>
            </table>
          </section>
        )
      }
    </main>
  )
}
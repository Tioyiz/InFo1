function Grid({ grid, pilotos }) {
  if (pilotos.length == 0 ) {
    return null
  }
 const driversName = getDriverData(grid, pilotos)
  
  
  
  return(
    <section className='grid'>
      {
        grid.map((g, i) =>
         <div key={i}> 
           <span> { g.position } </span>
           <div className='d-img'>
            <img src={ driversName[i].headshot_url }/>
           </div>
           <div>
             <span>
               { driversName[i].first_name }
             </span>
             <span>
               { driversName[i].last_name }
             </span>
             <span>
               { getTime(g.lap_duration) }
             </span>
           </div>
         </div>
        )
      }
      
    </section> 
  ) 
}
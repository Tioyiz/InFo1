import { Drivers, Grid, Results } from "../types/types"

export const teamLogos = {
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
  Williams: '/Img/teams/williams.png'
}

const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
  
export function getDate (start:number, end:number){
    const dateS = new Date(start)
    const dateE =  new Date(end)
  
    const month = dateS.getUTCMonth()
    const starts = dateS.getDate()
    const ends = dateE.getDate() 
    
    const startHours = dateS.getUTCHours().toString().padStart(2,'0')
    
    const startMinutes = dateS.getUTCHours().toString().padStart(2,'0')
    
    const endHours = dateE.getUTCHours().toString().padStart(2,'0')
    const endMinutes = dateE.getUTCMinutes().toString().padStart(2,'0')
   
    return {
      dateGP : `${months[month]} ${starts}-${ends}`, 
      dateRace : `${endHours}:${endMinutes}`, 
      dateSessions : `${startHours}:${startMinutes} - ${endHours}:${endMinutes}`
    }
    
  } 
 
  type Props = {
    results : Grid[] | Results[],
    pilotos : Drivers[]
  }
  export const getDriverData = ({results, pilotos}:Props ) => results.map(res => pilotos.find(pil => pil.driver_number === res.driver_number)) 
  
 export const format = (n:number) => String(n).padStart(2, '0')
 
export const getTime = (time:number) => {
    
    const min = Math.floor(time / 60)
    const seg = (time % 60)
    const hour = Math.floor(time / 3600)
    const gap = `${min}:${format(seg)}`
    const duration =  `${format(hour)}:${format(min)}:${format(Math.floor(seg))}`
    const length = time.toString().length
    return length > 5 ? duration : gap 
  } 

  export const delay = () => new Promise((resolve) => setTimeout(resolve, 500));
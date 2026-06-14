import { Link } from "react-router"

export function Header() {
  return (
    <header>
    <div className='header'>
      <img 
       className='logo'
       src='./info1.jpg'/>
    
      <nav>
        <Link className='button' 
         to='/'>Dashboard</Link>
        <Link className='button'
         to='/schedule'>Schedule</Link>
        <Link className='button' 
         to='/teams'>Equipos</Link>
        <Link className='button' 
         to='/results'>Results</Link>
      </nav>
      
      <Link className='button' to={'#'}>comming...</Link>
    </div>
    </header>
  )
}
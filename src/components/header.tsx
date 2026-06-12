import { Link } from "react-router"

export function Header() {
  return (
    <header>
    <div className='header'>
      <img 
       className='logo'
       src='./info1.jpg'/>
    
      <nav>
        <Link to={'/'}>Dashboard</Link>
        <Link to={'/schedule'}>Schedule</Link>
        <Link to={'/teams'}>Equipos</Link>
        <Link to={'/results'}>Results</Link>
      </nav>
      
      <Link to={'#'}>comming...</Link>
    </div>
    </header>
  )
}
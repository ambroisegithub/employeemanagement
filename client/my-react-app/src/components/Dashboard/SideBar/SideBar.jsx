
import './SideBar.scss'
import { NavLink } from 'react-router-dom'
const SideBar = () => {
  return (
    <div className='sideBarContainer'>
            <NavLink to='/dashboard' >Home</NavLink>
            <NavLink to='/dashboard/blog'>Dashboard</NavLink>
            <NavLink to='/dashboard/user'>About</NavLink>
    </div>
  )
}

export default SideBar

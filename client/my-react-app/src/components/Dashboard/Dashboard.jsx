import SideBar from './SideBar/SideBar.jsx'
import { Outlet} from 'react-router-dom'
import NavSideBar from "./SideBar/NavSideBar.jsx"

import './Dashboard.scss'
const  Dashboard = ()=> {
  return (
<div>
<NavSideBar/>

    <div className='SidebarLink'>
          <div style={{width:"20%",height:"100vh",backgroundColor:"#05108d4f"}}>
               <SideBar/>
          </div>

         <div style={{backgroundColor:"red",width:"80%",height:"100vh"}}>
              <Outlet ></Outlet>
         </div>
    </div>

</div>
  )
}

export default Dashboard

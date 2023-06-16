import './App.css'
import  {BrowserRouter,Routes,Route} from 'react-router-dom'

import Nav from "./components/Navigation/Nav"
function App() {

  return (

      <div>
    

<BrowserRouter>
<Nav/>
<Routes>

<Route  index ="">

</Route>

</Routes>

</BrowserRouter>

      </div>
    
  
  )
}

export default App

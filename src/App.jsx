import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'; 

function App() {

  return (
    <div className="grid grid-rows-[auto,1fr] min-h-screen">
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App

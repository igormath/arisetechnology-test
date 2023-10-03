import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'; 

function App() {

  return (
    <>
    <header className="bg-primary h-20 w-full">
      <Navbar/>
    </header>
    <Outlet/>
    </>
  )
}

export default App

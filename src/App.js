
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ThemeSwitch from './components/ThemeSwitch/ThemeSwitch';
import Welcome from './components/Welcome/Welcome';
import AllRoutes from './Routes/AllRoutes'
function App() {
  const [Enter,setEnter] = useState(false)
  useEffect(()=>{
     setTimeout(()=>{
           setEnter(true)
     },5500)
  },[])
  return (
    <div className="App">
      
      <Navbar/>
      {Enter?<AllRoutes/>:<Welcome/>}
      <ThemeSwitch/>
    </div>
  );
}

export default App;

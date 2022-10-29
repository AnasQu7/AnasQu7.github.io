
import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ThemeSwitch from './components/ThemeSwitch/ThemeSwitch';
import AllRoutes from './Routes/AllRoutes'
function App() {
  const navigate = useNavigate()
  useEffect(()=>{
     setTimeout(()=>{
           navigate('/aboutme')
     },5500)
  },[])
  return (
    <div className="App">
      
      <Navbar/>
      <AllRoutes/>
      <ThemeSwitch/>
    </div>
  );
}

export default App;

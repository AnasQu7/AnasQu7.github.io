
import Navbar from './components/Navbar/Navbar';
import ThemeSwitch from './components/ThemeSwitch/ThemeSwitch';

import Home from './Routes/Home/Home';
function App() {
  
  return (
    <div className="App">
      
      <Navbar/>
       <Home/>
      <ThemeSwitch/>
    </div>
  );
}

export default App;

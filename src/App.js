import Navbar from './components/Navbar/Navbar';
import ThemeSwitch from './components/ThemeSwitch/ThemeSwitch';
import AllRoutes from './Routes/AllRoutes'
function App() {
  
  return (
    <div className="App">
      
      <Navbar/>
      <AllRoutes/>
      <ThemeSwitch/>
    </div>
  );
}

export default App;

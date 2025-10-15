
import Navbar from './components/Navbar/Navbar';
import ThemeSwitch from './components/ThemeSwitch/ThemeSwitch';
import { ChatWidget } from 'wiskerai-react-widget';

import Home from './Routes/Home/Home';
import { useNavigate } from 'react-router-dom';
import { Link, scroller } from 'react-scroll';
import { ThemeContext } from './Context/ThemeContextProvider';
import { useContext } from 'react';

function App() {
  // const navigate = useNavigate()
  const { toggleTheme, Theme } = useContext(ThemeContext);

  const handleRedirect = (url) => {
      // navigate(url)
       if(url === "/THEME"){
        toggleTheme()
        return
      }
      console.log(url)
      let urlArr = url.split(" ")
      if(urlArr.length > 1){
        url = urlArr.join("-").toLowerCase()
      }
      console.log("the url is ", url)
      scroller.scrollTo(url, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -100
      })
    }

 const chatSettings = {
    agentId: "68eee4d2cef4f88cc3562938",
    voice: "Charon",
    onRedirect : handleRedirect
  };
 const darkChatSettings = {
    agentId: "68eee4d2cef4f88cc3562938",
    primaryColor: "#2198bc",
    secondaryColor: "#123C69",
    backgroundColor: "#06101c",
    voice: "Charon",
    onRedirect : handleRedirect
  };
  return (
    <div className="App">
      <ChatWidget settings={Theme ? darkChatSettings : chatSettings} />
      <Navbar/>
       <Home/>
      <ThemeSwitch/>
    </div>
  );
}

export default App;

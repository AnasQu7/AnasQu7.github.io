import { Route ,Routes } from "react-router-dom";
import Welcome from "./Welcome/Welcome";
import Aboutme from "./Aboutme/Aboutme";
import Contact from "./Contact/Contact";
import Projects from "./Project/Projects";
import Skills from "./Skills/Skills";
import Resume from "./Resume/Resume";


function AllRoutes() {
  return (
   <Routes>
    <Route path="/" element={<Welcome/>}/>
    <Route path="/aboutme" element={<Aboutme/>}/>
    <Route path="/skills" element={<Skills/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/resume" element={<Resume/>}/>
   </Routes>
  )
}

export default AllRoutes
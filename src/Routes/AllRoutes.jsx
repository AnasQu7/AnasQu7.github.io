import { Route ,Routes } from "react-router-dom";
import Aboutme from "./Aboutme/Aboutme";
import Contact from "./Contact/Contact";
import Projects from "./Project/Projects";


function AllRoutes() {
  return (
   <Routes>
    <Route path="/" element={<Aboutme/>}/>
    {/* <Route path="/aboutme" element={}/> */}
    {/* <Route path="/skills" element={}/> */}
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/contact" element={<Contact/>}/>
   </Routes>
  )
}

export default AllRoutes
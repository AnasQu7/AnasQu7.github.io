import {Box, Text} from "@chakra-ui/react"
import { useContext } from "react"
import {Link} from 'react-scroll'
import { ThemeContext } from "../../Context/ThemeContextProvider"
import NavMenu from "../NavMenu/NavMenu"
import './style.css'
function Navbar() {
  const {Theme} = useContext(ThemeContext)
 
  return (
    <>
    <Box
    transition="2s"
    pl={8} pr={8} position="fixed" top={0} right={0} left={0} zIndex={2000} alignItems="center" justifyContent="space-between" display="flex" h="70px" w="100%" bg={Theme? "black" : "white"}>
     <Box className="heading">
     <h2>M.A Quraishi</h2>
     </Box>
    
     <Box display={{lg:"flex",md:"none",sm:"none",base:"none"}} visibility={{lg:"initial",md:"hidden",sm:"hidden",base:"hidden"}}  w="50%" justifyContent="space-evenly" >
      <Link spy={true} smooth={true} offset={-150} duration={500}  to="/" ><Text color='rgb(10, 71, 109)' className="hover" variant='outline'>Home</Text></Link>
      <Link spy={true} smooth={true} offset={-180} duration={500} to="/aboutme" ><Text color='rgb(10, 71, 109)' className="hover" variant='outline'>About Me</Text></Link>
      <Link spy={true} smooth={true} offset={-90} duration={500}  to="/skills" ><Text color='rgb(10, 71, 109)' className="hover" variant='outline'>Skills</Text>  </Link>
      <Link spy={true} smooth={true} offset={-150} duration={500}  to="/projects" ><Text color='rgb(10, 71, 109)' className="hover" variant='outline'>Projects</Text></Link>
      <Link spy={true} smooth={true} offset={-150} duration={500}  to="/contact" ><Text color='rgb(10, 71, 109)' className="hover" variant='outline'>Contact</Text></Link>
      <Link spy={true} smooth={true} offset={-150} duration={500}  to="/"><Text color='rgb(10, 71, 109)' className="hover" variant='outline'>Resume</Text></Link>
     </Box>
     <NavMenu />
    </Box></>
  )
}

export default Navbar
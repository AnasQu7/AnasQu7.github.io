import {Box, Button, Text} from "@chakra-ui/react"
import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { ThemeContext } from "../../Context/ThemeContextProvider"
// import { ThemeContext } from "../../Context/ThemeContextProvider"
import NavMenu from "../NavMenu/NavMenu"
// import Menu from "../NavMenu/NavMenu"
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
      <Link to="/aboutme" ><Text color='rgb(10, 71, 109)' className="hover" variant='outline'>About Me</Text></Link>
      <Link to="/Skills" ><Text color='rgb(10, 71, 109)' className="hover" variant='outline'>Skills</Text>  </Link>
      <Link to="/Projects" ><Text color='rgb(10, 71, 109)' className="hover" variant='outline'>Projects</Text></Link>
      <Link to="/Contact" ><Text color='rgb(10, 71, 109)' className="hover" variant='outline'>Contact</Text></Link>
      <Text onClick={()=>{
        window.open('https://drive.google.com/file/d/1Lfzd1CVfZ756PigWVKUQtyQS75lbFFPw/view?usp=sharing')
      }} color='rgb(10, 71, 109)' className="hover" variant='outline'>Resume</Text>
     </Box>
     <NavMenu />
    </Box></>
  )
}

export default Navbar
import {Box, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React, { useContext } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import { Link } from 'react-scroll'
import { ThemeContext } from '../../Context/ThemeContextProvider'
function NavMenu() {
  const {Theme} = useContext(ThemeContext)
  return (
    <Box display={{lg:"none",md:"block",sm:"block",base:"block"}} visibility={{lg:"hidden",md:"initial",sm:"initial",base:"initial"}} >
    <Menu>
  <MenuButton as={Button} colorScheme='blue' border="0px" variant='outline' >
    <GiHamburgerMenu/>
  </MenuButton>
  <MenuList color="blue.500"  bg={Theme?"black":"white"} >
    <Link spy={true} smooth={true} offset={-150} duration={500} to = "/"><MenuItem>Home</MenuItem></Link>
    <Link spy={true} smooth={true} offset={-120} duration={500} to = "/aboutme"><MenuItem>About Me</MenuItem></Link>
    <Link spy={true} smooth={true} offset={-90} duration={500} to = "/skills"><MenuItem>Skills</MenuItem></Link>
    <Link spy={true} smooth={true} offset={-150} duration={500} to = "/projects"><MenuItem>Projects</MenuItem></Link>
    <Link spy={true} smooth={true} offset={-150} duration={500} to = "/contact"><MenuItem>Contact</MenuItem></Link>
    <Link spy={true} smooth={true} offset={-150} duration={500} to = "/"><MenuItem>Resume</MenuItem></Link>
    
  </MenuList>
</Menu>
    </Box>
  )
}

export default NavMenu
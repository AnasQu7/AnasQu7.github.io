import {Box, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React, { useContext } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import { Link } from 'react-router-dom'
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
    <Link to = "/"><MenuItem>Home</MenuItem></Link>
    <Link to = "/aboutme"><MenuItem>About Me</MenuItem></Link>
    <Link to = "/skills"><MenuItem>Skills</MenuItem></Link>
    <Link to = "/projects"><MenuItem>Projects</MenuItem></Link>
    <Link to = "/contact"><MenuItem>Contact</MenuItem></Link>
    <Link to = "/resume"><MenuItem>Resume</MenuItem></Link>
    
  </MenuList>
</Menu>
    </Box>
  )
}

export default NavMenu
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
    <Link to = "/aboutme"><MenuItem>About Me</MenuItem></Link>
    <Link to = "/skills"><MenuItem>Skills</MenuItem></Link>
    <Link to = "/projects"><MenuItem>Projects</MenuItem></Link>
    <Link to = "/contact"><MenuItem>Contact</MenuItem></Link>
    <MenuItem onClick={()=>{
        window.open('https://drive.google.com/file/d/1Lfzd1CVfZ756PigWVKUQtyQS75lbFFPw/view?usp=sharing')
      }}>Resume</MenuItem>
    
  </MenuList>
</Menu>
    </Box>
  )
}

export default NavMenu
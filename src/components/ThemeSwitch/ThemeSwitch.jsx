import { Box, Flex, Switch } from '@chakra-ui/react'
import React, { useContext} from 'react'
import { ThemeContext } from '../../Context/ThemeContextProvider'
import {BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs'
function ThemeSwitch() {
  const {toggleTheme , Theme} = useContext(ThemeContext)
    console.log(Theme)
  return (
    <Box position="fixed" display="flex"  alignItems="center" height="30px" bottom="20px" right="20px" >
        {!Theme?<BsSunFill color='gold' size={30}/>:
        <BsFillMoonStarsFill color='white' size={30}/>}
        <Flex ml={5} justifyContent="center">
        <Switch  size='lg' isChecked={Theme} colorScheme={'yellow'} onChange={toggleTheme}/>
        </Flex>
    </Box>
  )
}

export default ThemeSwitch
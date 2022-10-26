import { Box, Flex, Switch } from '@chakra-ui/react'
import React, { useContext} from 'react'
import { ThemeContext } from '../../Context/ThemeContextProvider'
import { HiLightBulb } from 'react-icons/hi'
import { FaLightbulb } from 'react-icons/fa'
function ThemeSwitch() {
  const {toggleTheme , Theme} = useContext(ThemeContext)
    console.log(Theme)
  return (
    <Box position="fixed" display="flex"  alignItems="center" height="30px" bottom="20px" right="20px" >
        {!Theme ? <HiLightBulb size={40} color="gold"/>:<FaLightbulb size={25} color='white'/>}
        <Flex ml={5} justifyContent="center">
        <Switch  size='lg' isChecked={!Theme} colorScheme={'yellow'} onChange={toggleTheme}/>
        </Flex>
    </Box>
  )
}

export default ThemeSwitch
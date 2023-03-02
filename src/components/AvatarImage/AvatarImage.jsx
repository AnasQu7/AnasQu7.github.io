import { Box, Image } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContextProvider'
import "./style.css"
function AvatarImage({img}) {
  const {Theme} = useContext(ThemeContext)
  return (
    <Box>
       
	<Box 
    transition="2s"
  className={Theme ? "avatarDark" : "avatar"}>
		
			<Image ml="9px" mt="9px" src={img} alt="Mohammad Anas Quraishi" />
		
	</Box>
	
</Box>


  )
}

export default AvatarImage
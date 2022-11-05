import { Box } from '@chakra-ui/react'

import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContextProvider'
import './style.css'
function Stats({Card}) {
    // console.log(props)
    const {Theme} = useContext(ThemeContext)
  return (
    <Box
    transition="2s"
    w={{ lg: "80vw", md: "90vw", sm: "90vw", base: "90vw" }}
    mb="50px"
    p={{ lg: 10, md: 6, sm: 20, base: 20 }}
    className={Theme ? "statsContainerDark" : "statsContainer"}
  >
    
    {<Card/>}
    
  </Box>
  )
}

export default Stats
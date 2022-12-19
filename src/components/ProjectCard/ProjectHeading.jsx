import { Box, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContextProvider'

function ProjectHeading() {
    const {Theme} = useContext(ThemeContext)
  return (
    <Box
    transition="2s"
    
    className={Theme ? 'projectContainerDark' : 'projectContainer'}>
    <Text px={50} fontSize="2.7em" className={Theme ? "neonText" : ""}>Projects</Text>
      </Box>
  )
}

export default ProjectHeading
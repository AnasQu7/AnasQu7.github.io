import React, { useContext } from 'react'
import Bio from '../../components/Bio/Bio'
import AvatarImage from '../../components/AvatarImage/AvatarImage'
import { Box } from '@chakra-ui/react'
import { ThemeContext } from '../../Context/ThemeContextProvider'
import "./style.css"
import { motion } from 'framer-motion'
function Aboutme() {
  const {Theme} = useContext(ThemeContext)
  
  return (
<Box gap={50} id="/aboutme" flexDirection={{lg:'row',md:'column',sm:'column',base:'column'}} className="inner-header flex">
<AvatarImage img="/images/Avatar.png"/>
<Bio/>
</Box>
    
  )
}

export default Aboutme
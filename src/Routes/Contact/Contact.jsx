import React, { useContext } from 'react'
import { Box } from '@chakra-ui/react'
import { ThemeContext } from '../../Context/ThemeContextProvider'
import "./style.css"
import ContactCard from '../../components/ContactCard/ContactCard';
function Contact() {
    const {Theme} = useContext(ThemeContext)
  return (
  <Box id="/contact">

    <Box gap={50}  flexDirection={{lg:'row',md:'column',sm:'column',base:'column'}} className="inner-header flex">
     <ContactCard/>
    </Box>
  </Box>
    
    
   
  )
}

export default Contact
import { Box, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'
import { ThemeContext } from '../../Context/ThemeContextProvider'
import "./style.css"


function Bio() {
  const {Theme} = useContext(ThemeContext)
  const navigate = useNavigate();

 const content = "I am looking forward to start a career as a web developer with a reputed firm driven by technology. Ability to translate business requirements into technical solutions and increasing my scope of knowledge in the field of Computer Science."

  return (
    <Box
    transition="2s"
    w={{lg : "50vw" , md : '90vw' , sm : '90vw' , base : '90vw'}} mb="50px" p={6} className={Theme ? 'bioContainerDark' : 'bioContainer'}>
      
       <Text fontSize={35} fontWeight='50px' color='rgba(0,172,193,1)'>Mohd Anas Quraishi</Text>
       <Text fontSize={20} fontWeight='50px'>Full Stack Web Developer</Text>
       <Text p={6}>
        {content}
       </Text>
       <Box my="50px" width="100%" h="50px">
      <Link spy={true} smooth={true} offset={-150} duration={500} to='/contact'>
       <Box margin="auto" className="hire-btn">
        <span>HIRE ME</span>
    </Box>
        </Link>
       </Box>
    </Box>
  )
}

export default Bio
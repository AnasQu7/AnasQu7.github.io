import { Box, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'
import { ThemeContext } from '../../Context/ThemeContextProvider'
import "./style.css"


function Bio() {
  const {Theme} = useContext(ThemeContext)
  const navigate = useNavigate();

 const content = "Full Stack Software Engineer with over 2 years of experience in developing scalable, secure, and high-performance applications. Skilled in both frontend and backend development, AI integrations, and system optimization. Passionate about creating seamless, intelligent, and user-focused digital solutions."

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
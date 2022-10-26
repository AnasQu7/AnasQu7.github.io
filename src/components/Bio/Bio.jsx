import { Box, Heading, Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../../Context/ThemeContextProvider'
import "./style.css"


function Bio() {
  const {Theme} = useContext(ThemeContext)
  const navigate = useNavigate();

 const content = "I am looking forward to start a career as a web developer with a reputed firm driven by technology. Ability to translate business requirements into technical solutions and increasing my scope of knowledge in the field of Computer Science."

  return (
    <Box
    transition="2s"
    w={{lg : "50vw" , md : '70vw' , sm : '80vw' , base : '80vw'}} mb="50px" p={6} className={Theme ? 'bioContainerDark' : 'bioContainer'}>
      <Text fontSize={25} fontWeight='bold'> Hello,</Text>
       <Text fontSize={35} fontWeight='50px' color='rgba(0,172,193,1)'>I'm Mohd Anas Quraishi</Text>
       <Text fontSize={20} fontWeight='50px'>Full Stack Web Developer</Text>
       <Text p={6}>
        {content}
       </Text>
       <Box my="50px" width="100%" h="50px">
       <Box margin="auto" onClick={()=>{
        navigate('/contact')
       }} className="hire-btn">
      <span>HIRE ME</span>
    </Box>
       </Box>
    </Box>
  )
}

export default Bio
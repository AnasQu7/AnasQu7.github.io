import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../../Context/ThemeContextProvider'
import './style.css'
function HomeCard() {
    const navigate = useNavigate()
    const {Theme} = useContext(ThemeContext)
  return (
    <Box
    transition="2s"
    w={{ lg: "80vw", md: "90vw", sm: "90vw", base: "90vw" }}
    mb="50px"
    p={{ lg: 10, md: 6, sm: 20, base: 20 }}
    className={Theme ? "homeContainerDark" : "homeContainer"}
  >
    <Flex justifyContent='space-evenly' flexDirection={{lg:'roe' , md:'row' , sm:'column-reverse' , base:'column-reverse'}}>
        <Box display='flex' alignItems="center" width={{lg:"40%" , md:'40%', sm:'100%' , base:'100%' }}>
    <Image  w="100%" src ="/images/home-profile.png" />

        </Box>
    <Box width={{lg:"40%" , md:'40%', sm:'100%' , base:'100%' }} py={50} display='flex' alignItems={'center'} justifyContent="center">
        <Box width='100%'>

        <Text fontWeight='bold' fontSize={35}>
        Hello, I'm Anas
        </Text>
        <Text fontSize={30}>
            I'm a full-stack web developer.
        </Text>
        <Flex justifyContent='space-evenly' marginTop="50px" w="100%">
        <Button colorScheme='blue' variant='outline' onClick={()=>{
            navigate('/aboutme')
        }} >About me</Button>
        <Button colorScheme='blue' variant='outline' onClick={()=>{
            navigate('/resume')
        }} >Resume</Button>
        </Flex>
        </Box>
    </Box>
    </Flex>
  </Box>
  )
}

export default HomeCard
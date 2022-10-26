import { Box, Button, Flex, Input, Text, Textarea, useToast } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../Context/ThemeContextProvider'
import "./style.css"
import { MdEmail } from 'react-icons/md';
import { IoMdCall } from 'react-icons/io';
import { SiDiscord, SiNetlify } from 'react-icons/si';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';


function ContactCard() {
    const {Theme} = useContext(ThemeContext)
    const [Inp , setInp] = useState({})
    const toast = useToast()
    const id = 'test-toast'
    function copyNumber(e) {
   
      const copyText = "+917310044004"
    
    console.log(e.target.textContent)
 
      navigator.clipboard.writeText(copyText);
      
      if (!toast.isActive(id)) {
        toast({
          id,
          title: '+91 7310044004 copied!',
        })
      }
      // alert("Copied the text: " + copyText);
    }
    const mail = ()=>{
      window.open('https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=mohammadanasquresh@gmail.com&cc&bcc&su&body')
    }
    function handleForm (e){
       setInp({...Inp,[e.target.name] : e.target.value})
    }
    
  return (
    <Flex
    flexDirection={{lg:'row', md:'column' , sm:'column' , base : 'column'}}
    justifyContent="space-evenly"
    transition="2s"
    w={{lg : "80vw" , md : '80vw' , sm : '90vw' , base : '80vw'}} mb="50px" p={6} className={Theme ? 'bioContainerDark' : 'bioContainer'}>
      <Box
      w={{lg:"400px",md:'100%' , sm:'100%',base:'100%'}} p={15}>
        <Text className={Theme ? "neonText" : "simptext"} fontSize={35}>Contact Me</Text>
        <Box mt={50} w="100%">
         <Flex alignItems='center' justifyContent={{lg:'left' , md:'center' , sm:undefined , base: undefined}} gap={{lg:"35px" , md : '35px' , sm:'10px',base:'10px'}} my={8}>
          <Box><MdEmail className={Theme?"contacticonDark":"contacticon"} onClick={mail} size={30}/></Box>
          <Box><Text  color={Theme?"white" : " rgb(20, 132, 202)"} fontSize={{lg:undefined,md:undefined ,sm:'smaller',base:'smaller'}} onClick={mail} className='contactinfo'>mohammadanasquresh@gmail.com</Text></Box>
          </Flex>
         <Flex justifyContent={{lg:'left' , md:'center' , sm:undefined , base: undefined}} gap={{lg:"35px" , md : '35px' , sm:'10px',base:'10px'}} my={8}><Box><IoMdCall className={Theme?"contacticonDark":"contacticon"} size={30} onClick={copyNumber} /></Box><Box>
         <Text color={Theme?"white" : " rgb(20, 132, 202)"} className='contactinfo' onClick={copyNumber} >+91 7310044004</Text>
        </Box> </Flex>
         <Flex mt={50} justifyContent="space-evenly">
            <FaGithubSquare onClick={()=>{
              window.open('https://github.com/AnasQu7')  
            }} className={Theme?"contacticonDark":"contacticon"} size={50}/>
            <FaLinkedin onClick={()=>{
              window.open('https://www.linkedin.com/in/anas-quraishi-7b9927214/')  
            }} className={Theme?"contacticonDark":"contacticon"} size={50}/>
            <SiDiscord onClick={()=>{
              window.open('https://discord.com/users/Anas_19')  
            }} className={Theme?"contacticonDark":"contacticon"} size={50}/>
            <SiNetlify onClick={()=>{
              window.open('https://app.netlify.com/teams/mohammadanasquresh/overview')  
            }} className={Theme?"contacticonDark":"contacticon"} size={50}/>
            </Flex>
        </Box>
      </Box>
      <Flex alignItems="center" flexDirection='column' gap='20px' justifyContent="space-evenly"  w={{lg:"50%",md:'100%' , sm:'100%',base:'100%'}} p={15}>
        <Input name='name' onChange={handleForm} placeholder="Your Name" />
        <Input name='email' onChange={handleForm} type="email" placeholder="Your Email" />
        <Textarea name='body' onChange={handleForm} placeholder='Your Message' />
        <Button colorScheme="blue" w="50%" variant={Theme?"outline":undefined} onClick={()=>{
          if(Inp.name&&Inp.email&&Inp.body){
            console.log(Inp);
            window.open(`https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=mohammadanasquresh@gmail.com&cc&bcc&su&body=${Inp.body}`)
          }else{
            if (!toast.isActive(id)) {
              toast({
                id,
                title: 'Please fill all details',
                status: 'error'
              })
            }
          }
        }} >Submit</Button>
       </Flex>
    </Flex>
  )
}

export default ContactCard
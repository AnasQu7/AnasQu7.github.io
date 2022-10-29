import { Box, Button, Image, Text} from '@chakra-ui/react'
import React, { useContext } from 'react'
import { BsDownload, BsLink } from 'react-icons/bs';
import { ThemeContext } from '../../Context/ThemeContextProvider'
import "./style.css"
function ResumeCard() {
  const {Theme} = useContext(ThemeContext)
  return (
    <Box
    transition="2s"
    w={{ lg: "60vw", md: "80vw", sm: "90vw", base: "90vw"}} p={50} className={Theme ? 'resumeContainerDark' : 'resumeContainer'}
    >
      
      <Text
        mb="50px"
        fontSize="2.7em"
        className={Theme ? "neonText" : ""}
      >
        Resume
      </Text>
      <Box display='flex'  gap={50}  justifyContent='space-evenly' flexDirection={{lg : 'row' , md:'column' , sm: 'column' , base : 'column'}}>
         <Box display='flex' justifyContent='center'>
          <Image borderRadius={20} maxH='65vh' src='/images/resume.png'/>
          </Box>
         <Box display='flex' flexDirection={{lg : 'column' , md:'row' , sm: 'row' , base : 'row'}} justifyContent='space-evenly' >
          <Button onClick={()=>{
            window.open('https://drive.google.com/file/d/1Lfzd1CVfZ756PigWVKUQtyQS75lbFFPw/view')
          }} p='30px' colorScheme='blue' variant={Theme?'outline':'solid'}>
            <BsLink size='40px'/>
          </Button>
          <Button p='30px' colorScheme='blue' variant={Theme?'outline':'solid'}>
            <BsDownload onClick={()=>{
              window.location.href='https://drive.google.com/u/0/uc?id=1Lfzd1CVfZ756PigWVKUQtyQS75lbFFPw&export=download'
            }} size='40px'/>
          </Button>
         </Box>
         </Box>
    </Box>
    
  )
}

export default ResumeCard
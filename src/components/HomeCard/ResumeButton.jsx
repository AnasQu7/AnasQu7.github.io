import { Button, ButtonGroup, IconButton } from '@chakra-ui/react';
import React from 'react'
import { AiOutlineDownload } from 'react-icons/ai';
import { Link } from 'react-scroll';

function ResumeButton() {
  return (
     <ButtonGroup size='md' colorScheme='blue' isAttached variant='outline'>
       <Button onClick={()=>{
            window.open('https://drive.google.com/file/d/1Lfzd1CVfZ756PigWVKUQtyQS75lbFFPw/view')
          }}>Resume</Button>
       <IconButton onClick={()=>{
              window.location.href='https://drive.google.com/u/0/uc?id=1Lfzd1CVfZ756PigWVKUQtyQS75lbFFPw&export=download'
            }} aria-label='Add to friends' icon={<AiOutlineDownload />} />
     </ButtonGroup>
  )
}

export default ResumeButton
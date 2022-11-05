import { Flex, Image } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContextProvider'

function GitStats() {
    const {Theme} = useContext(ThemeContext)
  return (
    <Flex justifyContent='center'  alignItems='center' >
        <Image src={`https://github-readme-stats.vercel.app/api/top-langs/?username=AnasQu7&bg_color=${Theme?"0c0d0e00":"f0f8ff"}&theme=tokyonight&hide_border=true`}/>
    </Flex>
  )
}

export default GitStats
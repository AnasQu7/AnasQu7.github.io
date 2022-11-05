import { Flex, Image } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContextProvider'

function GitStats1() {
    const {Theme} = useContext(ThemeContext)
  return (
    <Flex justifyContent='center'  alignItems='center' >
        <Image src={`https://github-readme-stats.vercel.app/api?username=AnasQu7&count_private=true&show_icons=true&bg_color=${Theme?"0c0d0e00":"f0f8ff"}&theme=tokyonight&hide_border=true`}/>
        </Flex>
  )
}

export default GitStats1
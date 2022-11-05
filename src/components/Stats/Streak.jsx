import { Box, Image } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContextProvider'

function Streak() {
    const {Theme} = useContext(ThemeContext)
  return (
    <Box display='flex' justifyContent='center' alignItems='center' >
        <Image src={`https://github-readme-streak-stats.herokuapp.com?user=AnasQu7&theme=${Theme?"buefy-dark":"buefy"}&background=${Theme?"0c0d0e00":"aliceblue"}&hide_border=true&border_radius=4.4`}/>
    </Box >
  )
}

export default Streak
// [![GitHub Streak](https://github-readme-streak-stats.herokuapp.com?user=AnasQu7&theme=midnight-purple&hide_border=true&border_radius=4.4)](https://git.io/streak-stats)
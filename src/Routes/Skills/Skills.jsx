import { Box } from '@chakra-ui/react'
import React, { useContext} from 'react'
import { ThemeContext } from '../../Context/ThemeContextProvider'

import "./style.css"
import SkillsCard from '../../components/SkillsCard/SkillsCard'
import { motion } from 'framer-motion'

function Skills() {
    const {Theme} = useContext(ThemeContext)
  return (
<Box gap='75px' flexDirection='column' className="inner-header flex">
<SkillsCard heading={'SKILLS'} skills={['JavaScript' , 'React' , 'Node' , 'express' , 'mongoDb' , 'typeScript', 'redux' , 'socket.io' , 'nextjs', 'html' , 'css' ]}/>
<SkillsCard heading={'TOOLS'} skills={['windows','linux','heroku','render' , 'netlify' , 'vercel' , 'vscode' ]}/>
{/* <SkillsCard heading={'Skills'} skills={['JavaScript' , 'React' , 'Node' , 'express' , 'mongoDb' , 'typeScript']}/>
<SkillsCard heading={'Skills'} skills={['JavaScript' , 'React' , 'Node' , 'express' , 'mongoDb' , 'typeScript']}/> */}
</Box>

  )
}

export default Skills
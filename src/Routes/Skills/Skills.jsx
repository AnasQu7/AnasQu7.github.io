import { Box } from '@chakra-ui/react'
import React, { useContext} from 'react'
import { ThemeContext } from '../../Context/ThemeContextProvider'

import "./style.css"
import SkillsCard from '../../components/SkillsCard/SkillsCard'

function Skills() {
    const {Theme} = useContext(ThemeContext)
  return (
    <Box>
      <Box pt="100px" className={Theme? "headerDark" : "header"}>

<Box gap='75px' flexDirection='column' className="inner-header flex">
<SkillsCard heading={'SKILLS'} skills={['JavaScript' , 'React' , 'Node' , 'express' , 'mongoDb' , 'typeScript', 'redux' , 'socket.io' , 'nextjs', 'html' , 'css' ]}/>
<SkillsCard heading={'TOOLS'} skills={['windows','linux','heroku','render' , 'netlify' , 'vercel' , 'vscode' ]}/>
{/* <SkillsCard heading={'Skills'} skills={['JavaScript' , 'React' , 'Node' , 'express' , 'mongoDb' , 'typeScript']}/>
<SkillsCard heading={'Skills'} skills={['JavaScript' , 'React' , 'Node' , 'express' , 'mongoDb' , 'typeScript']}/> */}
</Box>


<Box>
<svg className="waves" xmlns="http://www.w3.org/2000/svg" 
xmlnsXlink="http://www.w3.org/1999/xlink"

viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
<defs>
<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>
<g className="parallax">
<use xlinkHref="#gentle-wave" x="48" y="0" fill={Theme ? "rgba(010,010,010,0.7)"  : "rgba(255,255,255,0.7)"} />
<use xlinkHref="#gentle-wave" x="48" y="3" fill={Theme ? "rgba(010,010,010,0.5)"  : "rgba(255,255,255,0.5)"} />
<use xlinkHref="#gentle-wave" x="48" y="5" fill={Theme ? "rgba(010,010,010,0.3)"  : "rgba(255,255,255,0.3)"} />
<use xlinkHref="#gentle-wave" x="48" y="7" fill={Theme ? "000" : "#fff"} />
</g>
</svg>
</Box>


</Box>



<Box className="content flex" color="#55ad" bg={Theme ? "#000" : "#fff"}>
  <p>Somewhere, something incredible is waiting to be known.</p>
</Box>

    </Box>
  )
}

export default Skills
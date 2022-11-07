import { Box } from '@chakra-ui/react'
import React, { useContext } from 'react'
import HomeCard from '../../components/HomeCard/HomeCard'
import GitStats from '../../components/Stats/GitStats'
import GitStats1 from '../../components/Stats/GitStats1'
import Stats from '../../components/Stats/Stats'
import StatsCard from '../../components/Stats/StatsCard'
import Streak from '../../components/Stats/Streak'

import { ThemeContext } from '../../Context/ThemeContextProvider'
import Aboutme from '../Aboutme/Aboutme'
import Contact from '../Contact/Contact'
import Projects from '../Project/Projects'
import Skills from '../Skills/Skills'

function Home() {
    const {Theme} = useContext(ThemeContext)
  return (
    
    <Box>
      
    <Box pt="100px" className={Theme? "headerDark" : "header"}>
    
    <Box gap={50} flexDir="column" className="inner-header flex">
    
    <HomeCard/>

     <Aboutme/>
    <Box id="/skills">
     <Skills/>
    <Stats Card={StatsCard}/>
    <Stats Card={Streak}/>
    <Stats Card={GitStats1}/> 
    <Stats Card={GitStats}/>
    </Box>
    
     <Projects/>
     <Contact/>
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
      <p>“Courage is like a muscle. We strengthen it by use.”</p>
    </Box>
    
        </Box>
  )
}

export default Home
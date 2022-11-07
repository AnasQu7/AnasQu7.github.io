import React, { useContext } from 'react'
import { Box } from '@chakra-ui/react'
import { ThemeContext } from '../../Context/ThemeContextProvider'
import "./style.css"
import ResumeCard from '../../components/ResumeCard/ResumeCard'
import { motion } from 'framer-motion'
function Resume() {
  const {Theme} = useContext(ThemeContext)
  
  return (
    <Box>
      
<Box pt="100px" className={Theme? "headerDark" : "header"}>

<motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
<Box gap={50} flexDirection={{lg:'row',md:'column',sm:'column',base:'column'}} className="inner-header flex">
<ResumeCard/>
</Box>
      </motion.div>


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



<Box color="#55ad" className="content flex" bg={Theme ? "#000" : "#fff"}>
  <p>“It is never too late to be what you might have been.”</p>
</Box>

    </Box>
  )
}

export default Resume
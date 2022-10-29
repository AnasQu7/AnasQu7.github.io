import { Box } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../Context/ThemeContextProvider'
import ProjectsCard from '../../components/ProjectCard/ProjectsCard'
import "./style.css"
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
function Projects() {
  const {Theme} = useContext(ThemeContext)
  const projectData = [
    {   id : 1 ,
      image : "/images/projects/tripoto.png", 
      description : "Tripoto is a social platform to share and discover travel experiences." , 
      feature : ["User Authentication","Explore","Forum"] ,
      title : "Tripoto" ,
      tech : ["JavaScript" ,"React" ,"Redux" , "ChakraUI" ] , 
      git : "https://github.com/AnasQu7/opposite-representative-709" , 
      dl : "https://trpipto-cloned.netlify.app/"
    },
    {   id : 2 ,
      image : "/images/projects/ssense.png", 
      description : "Ssense is a global technology platform operating at community, and commerce." , 
      feature : ["User Authentication","E-Commerce","Sorting" , "Filter" , "Search"] ,
      title : "Ssense" ,
      tech : ["JavaScript" ,"Html" , "Css" ] , 
      git : "https://github.com/AnasQu7/innate-partner-2755" , 
      dl : "https://euphonious-sable-199f27.netlify.app/"
    }
    ,
    {   id : 3 ,
      image : "/images/projects/kimaye.png", 
      description : "Kimaye is free online fruit ordering platform." , 
      feature : ["User Authentication","E-Commerce","Sorting" , "Filter" , "Search"] ,
      title : "Kimaye" ,
      tech : ["JavaScript" ,"Html" , "Css" ] , 
      git : "https://github.com/Ajay470/Team-squalid-wire" , 
      dl : "https://boisterous-hotteok-75bc34.netlify.app/"
    },
    {   id : 4 ,
      image : "/images/projects/chathat.png", 
      description : "Chat-Hat is created by me where we can chat with our friends and family" , 
      feature : ["Group Chat","Connected Users","Notification"] ,
      title : "Chat-Hat" ,
      tech : ["JavaScript" ,"React" ,"Socket.io" , "ChakraUI" ] , 
      git : "https://github.com/AnasQu7/Chat-App" , 
      dl : "https://chat-hat.netlify.app/"
    },
    {   id : 5 ,
      image : "/images/projects/youtube.png", 
      description : "YouTube is a video sharing service where users can watch, like, share, comment and upload their own videos." , 
      feature : ["Vedio Streaming","Search"] ,
      title : "Youtube" ,
      tech : ["JavaScript" , "Html" ,"Css"  ] , 
      git : "" , 
      dl : "https://heroic-syrniki-3cfb29.netlify.app/"
    },
    {   id : 6 ,
      image : "/images/projects/starwars.png", 
      description : "All characters of Star Wars. " , 
      feature : ["Search","Character Details"] ,
      title : "Star Wars" ,
      tech : ["JavaScript" , "Html" ,"Css" ] , 
      git : "" , 
      dl : "https://roaring-mochi-08b523.netlify.app"
    },
    {   id : 7 ,
      image : "/images/projects/uboric.png", 
      description : "Uboric is a e-commerce site." , 
      feature : ["Search","E-Commerce","Cart","Sort","Filter"] ,
      title : "Uboric" ,
      tech : ["JavaScript" , "Html" ,"Css" ] , 
      git : "https://github.com/Amrutha010/uboric-clone" , 
      dl : "https://shimmering-kleicha-ab30ef.netlify.app"
    },
    {   id : 8 ,
      image : "/images/projects/calculator.png", 
      description : "To calculate simple mathematical terms." , 
      feature : ["Multiplication","Devision","Subtraction","Addition"] ,
      title : "Calculator" ,
      tech : ["JavaScript" , "Html" ,"Css" ] , 
      git : "" , 
      dl : "https://fancy-biscuit-dec798.netlify.app/"
    }
    
  ]
  const [Pro , setPro] = useState(0)
  return (
    <Box>
      <Box zIndex="2000" position="fixed" left="15px" top="50%" onClick={()=>{
         if(Pro===0){
          setPro(projectData.length-1)
         }else{
          setPro(Pro-1)
         }
      }} ><IoIosArrowBack color={Theme?'white':'Black' }size={30}/></Box>
     <Box zIndex="2000" position="fixed" right="15px" top="50%" onClick={()=>{
         if(Pro===projectData.length-1){
          setPro(0)
         }else{
          setPro(Pro+1)
         }
     }} ><IoIosArrowForward color={Theme?'white':'Black' }size={30}/></Box>
<Box pt="100px" className={Theme? "headerDark" : "header"}>

<Box gap={50} flexDirection={{lg:'row',md:'column',sm:'column',base:'column'}} className="inner-header flex">
<ProjectsCard props={projectData[Pro]}/>
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
  <p>“Worry is a misuse of imagination.”</p>
</Box>

    </Box>
  )
}

export default Projects
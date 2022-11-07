import { Box, Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../Context/ThemeContextProvider'
import ProjectsCard from '../../components/ProjectCard/ProjectsCard'
import "./style.css"
import { motion } from 'framer-motion'
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
  const nextProject = ()=>{
    if(Pro===projectData.length-1){
      setPro(0)
     }else{
       setPro(Pro+1)
     }
   }
   const preProject = ()=>{
    if(Pro===0){
      setPro(projectData.length-1)
    }else{
      setPro(Pro-1)
    }
  }
  return (
  <Box width='100%' id="/projects">
<Box gap={50} className="inner-header flex">
     <Box>
<ProjectsCard props={projectData[Pro]} nextProject={nextProject} preProject={preProject}/>
    </Box>
   
</Box>
    </Box>
  )
}

export default Projects
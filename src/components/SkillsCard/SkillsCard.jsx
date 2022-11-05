import { Box, SimpleGrid, Text} from "@chakra-ui/react";
import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContextProvider";
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";
import { SiExpress, SiHeroku, SiHtml5, SiMongodb, SiNetlify, SiNodedotjs, SiReact, SiRedux, SiSocketdotio, SiTypescript, SiVercel, SiVisualstudio, SiWindows } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { HiOutlineCubeTransparent } from "react-icons/hi";
import { DiLinux } from "react-icons/di";
import "./style.css";

function SkillsCard(props) {
  const {skills,heading} = props
    const { Theme } = useContext(ThemeContext);
    const skillsObj = {
      JavaScript : <TbBrandJavascript size='70%' />, 
      React : <SiReact size='70%' /> ,
      Node : <SiNodedotjs  size='70%' /> , 
      express : <SiExpress size='70%' />, 
      mongoDb : <SiMongodb size='70%' /> , 
      typeScript : <SiTypescript size='70%' />,
      redux : <SiRedux size='70%' />,
      'socket.io': <SiSocketdotio size='70%' />,
      nextjs : <TbBrandNextjs size='70%'/>,
      html : <SiHtml5 size='70%' />,
      css : <IoLogoCss3 size='70%' />,
      heroku : <SiHeroku size='70%'/>  ,
      render : <HiOutlineCubeTransparent size='70%'/>,
      windows : <SiWindows size='70%'/>,
      linux : <DiLinux size='70%'/> ,
      netlify : <SiNetlify size='70%'/> ,
      vercel : <SiVercel size='70%'/>,
      vscode : <SiVisualstudio size='70%'/>
    }
  return (
    <Box
      transition="2s"
      w={{ lg: "80vw", md: "90vw", sm: "90vw", base: "90vw" }}
      mb="50px"
      p={{ lg: 10, md: 6, sm: 20, base: 20 }}
      className={Theme ? "skillContainerDark" : "skillContainer"}
    >
      <Text
        fontSize="2.7em"
        className={Theme ? "neonText" : ""}
      >
        {heading}
      </Text>
      <SimpleGrid p={{lg:4,md:5,sm:'0px',base:'0px'}} gap={8} columns={{lg:5 , md : 4 , sm:2 , base:2}}>
        {skills.map((e,i)=>{
            return <Box >
            <Box border='1px solid ' borderRadius={20} margin='auto' display='flex' flexDirection='column' gap={2} alignItems="center" textAlign="center" p={6} w={{"xl":'170px',lg:"140px",md:'140px',sm:'100px',base:'100px'}} key={i}>
              {skillsObj[e]}
              <Text textTransform='uppercase'>{e}</Text> 
            </Box>
            </Box>
        })}
      </SimpleGrid>
    </Box>

  )
}

export default SkillsCard
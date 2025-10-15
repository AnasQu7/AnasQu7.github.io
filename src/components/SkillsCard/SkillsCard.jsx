import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContextProvider";
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";
import { 
   SiAmazondynamodb,
   SiAntdesign,
   SiBootstrap,
   SiChakraui,
   SiExpress,
   SiFastapi,
   SiGraphql,
   SiHeroku,
   SiHtml5,
   SiMongodb,
   SiMysql,
   SiNetlify,
   SiNodedotjs,
   SiPostgresql,
   SiPython,
   SiReact,
   SiRedis,
   SiRedux,
   SiServerless,
   SiSocketdotio,
   SiTailwindcss,
   SiTypescript,
   SiVercel,
   SiVisualstudio,
   SiWindows,
   SiAwsamplify, 
   SiAwslambda, 
   SiAmazonaws, 
   SiAmazoncloudwatch, 
   SiAmazonec2, 
  //  SiAmazoncognito, 
   SiAmazonsqs, 
   SiAmazonrds, 
   SiAmazonsimpleemailservice, 
   SiAmazons3, 
   SiGoogle
  } from "react-icons/si";
import { FaAws, FaRobot } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { HiOutlineCubeTransparent } from "react-icons/hi";
import { DiLinux } from "react-icons/di";
import "./style.css";
import { GiIdCard } from "react-icons/gi";

function SkillsCard(props) {
  const { skills, heading } = props
  const { Theme } = useContext(ThemeContext);
  const skillsObj = {
    JavaScript: <TbBrandJavascript size='70%' />,
    Reactjs: <SiReact size='70%' />,
    Nodejs: <SiNodedotjs size='70%' />,
    express: <SiExpress size='70%' />,
    mongoDb: <SiMongodb size='70%' />,
    typeScript: <SiTypescript size='70%' />,
    redux: <SiRedux size='70%' />,
    'socket.io': <SiSocketdotio size='70%' />,
    nextjs: <TbBrandNextjs size='70%' />,
    html: <SiHtml5 size='70%' />,
    css: <IoLogoCss3 size='70%' />,
    heroku: <SiHeroku size='70%' />,
    render: <HiOutlineCubeTransparent size='70%' />,
    windows: <SiWindows size='70%' />,
    linux: <DiLinux size='70%' />,
    netlify: <SiNetlify size='70%' />,
    vercel: <SiVercel size='70%' />,
    vscode: <SiVisualstudio size='70%' />,
    aws: <FaAws size='88%' />,
    graphQl: <SiGraphql size="70%" />,
    python: <SiPython size="70%" />,
    tailwindcss: <SiTailwindcss size="70%" />,
    bootstrap: <SiBootstrap size="70%" />,
    chakraui: <SiChakraui size="70%" />,
    antdesign: <SiAntdesign size="70%" />,
    serverless: <SiServerless size="70%" />,
    fastapi: <SiFastapi size="70%" />,
    dynamoDB: <SiAmazondynamodb size="70%" />,
    mongoDB: <SiMongodb size="70%" />,
    postgreSQL: <SiPostgresql size="70%" />,
    mySQL: <SiMysql size="70%" />,
    redis: <SiRedis size="70%" />,
    amplify: <SiAwsamplify size="70%" />,
    sqs: <SiAmazonsqs size="70%" />,
    ses: <SiAmazonsimpleemailservice size="70%" />,
    s3: <SiAmazons3 size="70%" />,
    ec2: <SiAmazonec2 size="70%" />,
    cognito: <GiIdCard size="70%"/>,
    lambda: <SiAwslambda size="70%" />,
    rds: <SiAmazonrds size="70%" />,
    cloudwatch: <SiAmazoncloudwatch size="70%" />,
    aws: <SiAmazonaws size="70%" />,
    mcpServer: <FaRobot size="88%" />,      // MCP server → Node.js as placeholder
    googleADK: <SiGoogle size="70%" />,          // Google ADK → Google icon
    langraph: <FaRobot size="88%" />,          // Langraph → GraphQL icon as placeholder
    gemini: <SiGoogle size="70%" />,  
    chatgpt:   <FaRobot size="88%" />     // Google ADK → Google icon
  }
  return (
    <Box
      transition="2s"
      w={{ lg: "80vw", md: "90vw", sm: "90vw", base: "90vw" }}
      mb="50px"
      p={{ lg: 10, md: 6, sm: 20, base: 10 }}
      className={Theme ? "skillContainerDark" : "skillContainer"}
    >
      <Text
        fontSize="2.7em"
        className={Theme ? "neonText" : ""}
      >
        {heading}
      </Text>
      <SimpleGrid p={{ lg: 4, md: 5, sm: '0px', base: '0px' }} rowGap={6} gap={{ lg: 8, md: 6, sm: 4, base: 0 }} columns={{ lg: 5, md: 4, sm: 3, base: 2 }}>
        {skills.map((e, i) => {
          return <Box >
            <Box border='1px solid' borderRadius={20} margin='auto' display='flex' flexDirection='column' gap={2} alignItems="center" textAlign="center" p={6} w={{ "xl": '170px', lg: "140px", md: '140px', sm: '100px', base: '100px' }} key={i}>
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
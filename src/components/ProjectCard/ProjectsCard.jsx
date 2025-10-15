import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState, useRef } from "react";
import { FaExternalLinkAlt, FaGithubAlt } from "react-icons/fa";
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
import { ThemeContext } from "../../Context/ThemeContextProvider";
import "./style.css";
import { HiOutlineCubeTransparent } from "react-icons/hi";
import { DiLinux } from "react-icons/di";
import { GiIdCard } from "react-icons/gi";

function ProjectsCard({ props  }) {
  const { images, description, title, tech, git, dl, feature } = props;
  const { Theme } = useContext(ThemeContext);
  const [current, setCurrent] = useState(0);
  const [sliding, setSliding] = useState(false);
  const timeoutRef = useRef();

  // Auto-change image every 3 seconds
  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(timeoutRef.current);
  }, [current, images.length]);

  const handleNext = () => {
    setSliding(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setSliding(false);
    }, 400); // match transition duration
  };

  const handlePrev = () => {
    setSliding(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
      setSliding(false);
    }, 400);
  };

  const techStack = {
    JavaScript : <TbBrandJavascript size='50%' />, 
    React : <SiReact size='50%' /> ,
    Node : <SiNodedotjs  size='50%' /> , 
    Express : <SiExpress size='50%' />, 
    MongoDb : <SiMongodb size='50%' /> , 
    TypeScript : <SiTypescript size='50%' />,
    Redux : <SiRedux size='50%' />,
    'Socket.io': <SiSocketdotio size='50%' />,
    Nextjs : <TbBrandNextjs size='50%'/>,
    Html : <SiHtml5 size='50%' />,
    Css : <IoLogoCss3 size='50%' />,
    ChakraUI : <SiChakraui size='50%'/>
  }

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
      mb="500px"
      p={{ lg: 10, md: 6, sm: 5, base: 10 }}
      py="30px"
      className={Theme ? "projectContainerDark" : "projectContainer"}
      display='flex'
      gap="25px"
      margin='auto'
      id = {"/"+title.split(" ").join("-").toLowerCase()}
    >
      <Box>
        <Text
          mb="20px"
          display={{ lg: "none", md: "none", sm: "block", base: "block" }}
          visibility={{
            lg: "hidden",
            md: "hidden",
            sm: "initial",
            base: "initial",
          }}
          fontSize="2.7em"
          color="#0ba9ca" 
        >
          {title}
        </Text>
        <Box
          display="flex"
          justifyContent="space-evenly"
          flexDirection={{ lg: "row", md: "row", sm: "column", base: "column" }}
        >
          <Box w={{ lg: "40%", md: "40%", sm: "100%", base: "100%" }}>
            <Box w="100%" h="70%" display="flex" alignItems="center" justifyContent="center" position="relative" overflow="hidden">
              {/* Carousel with sliding transition */}
              <Button onClick={handlePrev} position="absolute" left="0" zIndex="1" variant="ghost" size="sm">&lt;</Button>
              <Box
                display="flex"
                w="100%"
                h="100%"
                transition="transform 0.4s cubic-bezier(0.4,0,0.2,1)"
                style={{
                  transform: `translateX(-${current * 100}%)`
                }}
              >
                {images.map((img, idx) => (
                  <Image
                    key={idx}
                    w="100%"
                    h="auto"
                    flexShrink={0}
                    src={img}
                    alt={`project-img-${idx}`}
                  />
                ))}
              </Box>
              <Button onClick={handleNext} position="absolute" right="0" zIndex="1" variant="ghost" size="sm">&gt;</Button>
            </Box>
            <SimpleGrid
              columnGap={15}
              columns={{ lg: 4, md: 3, sm: 4, base: 2 }}
              mb="20px"
              mt="20px"
              gap="5px"
              alignItems="center"
            >
              {tech.map((e, i) => (
                <Box key={i}>
                  <Box p={4} margin='auto' border="1px solid" borderRadius="20px" w='80px' display='flex' alignItems='center' justifyContent='center'>{techStack?.[e] || skillsObj[e]}</Box>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
          <Box
            w={{ lg: "40%", md: "40%", sm: "100%", base: "100%" }}
            h="100%"
            textAlign="center"
          >
            <Text
              mb="30px"
              display={{ lg: "block", md: "block", sm: "none", base: "none" }}
              visibility={{
                lg: "initial",
                md: "initial",
                sm: "hidden",
                base: "hidden",
              }}
              color="#0ba9ca" 
              fontSize="2.7em"
            >
              {title}
            </Text>
            <Text>{description}</Text>
            <Text color="#0ba9ca" fontSize="30px" mb="20px" mt="30px">
              Features
            </Text>
            {feature.map((e, i) => (
              <Text key={i}>{e}</Text>
            ))}
            <Flex justifyContent="space-evenly" mt="60px">
              {git ? (
                <Button
                  colorScheme={Theme ? "white" : "blue"}
                  onClick={() => window.open(git)}
                  variant="outline"
                  p={6}
                >
                  <FaGithubAlt size={30}/>
                </Button>
              ) : ""}
              <Button
                colorScheme={Theme ? "white" : "blue"}
                onClick={() => window.open(dl)}
                variant="outline"
                p={6}
              >
                <FaExternalLinkAlt size={30}/>
              </Button>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProjectsCard;
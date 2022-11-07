import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { FaExternalLinkAlt, FaGithubAlt } from "react-icons/fa";
import { TbBrandJavascript, TbBrandNextjs } from "react-icons/tb";
import { SiChakraui, SiExpress, SiHtml5, SiMongodb, SiNodedotjs, SiReact, SiRedux, SiSocketdotio, SiTypescript } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";

import { ThemeContext } from "../../Context/ThemeContextProvider";
import "./style.css";

function ProjectsCard({ props }) {
  const { image, description, title, tech, git, dl, feature } = props;
  const { Theme } = useContext(ThemeContext);
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
  return (
    <Box
      transition="2s"
      w={{ lg: "80vw", md: "90vw", sm: "90vw", base: "90vw" }}
      mb="50px"
      p={{ lg: 10, md: 6, sm: 20, base: 20 }}
      className={Theme ? "projectContainerDark" : "projectContainer"}
    >
      <Text mb='30px'  fontSize="2.7em" className={Theme ? "neonText" : ""}>Projects</Text>
      <Text
        mb="50px"
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
          <Box w="100%" h="70%" display="flex" alignItems="center">

          <Image  w="100%" textAlign="center" src={image} />
          </Box>
          <SimpleGrid
            columnGap={15}
            columns={{ lg: 4, md: 3, sm: 2, base: 2 }}
            
            mb="20px"
            mt="20px"
            gap="5px"
            
            alignItems="center"
          >
            {tech.map((e) => {
              return (
                <Box>
                  {/* {let x =  } */}
                  <Box p={4}  margin='auto' border="1px solid" borderRadius="20px" w='80px' display='flex' alignItems='center' justifyContent='center'>{techStack[e]}</Box>
                </Box>
              );
            })}
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

          {feature.map((e) => {
            return <Text>{e}</Text>;
          })}

          <Flex justifyContent="space-evenly" mt="60px">
            {git?<Button
              colorScheme={Theme ? "white" : "blue"}
              onClick={() => {
                window.open(git);
                
              }}
              variant="outline"
              p={6}
            >
             <FaGithubAlt size={30}/>
            </Button>:""}
            <Button
              colorScheme={Theme ? "white" : "blue"}
              onClick={() => {
                window.open(dl);
  
              }}
              variant="outline"
              p={6}
            >
              <FaExternalLinkAlt size={30}/>
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default ProjectsCard;

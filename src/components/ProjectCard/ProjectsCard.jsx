import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContextProvider";
import "./style.css";

function ProjectsCard({ props }) {
  const { image, description, title, tech, git, dl, feature } = props;
  const { Theme } = useContext(ThemeContext);

  return (
    <Box
      transition="2s"
      w={{ lg: "80vw", md: "90vw", sm: "90vw", base: "90vw" }}
      mb="50px"
      p={{ lg: 10, md: 6, sm: 20, base: 20 }}
      className={Theme ? "projectContainerDark" : "projectContainer"}
    >
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
        className={Theme ? "neonText" : ""}
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
            columns={{ lg: 3, md: 2, sm: 2, base: 2 }}
            h="30%"
            mb="20px"
            mt="20px"
            gap="5px"
            fontFamily="cursive"
            alignItems="center"
          >
            {tech.map((e) => {
              return (
                <Box w="100%" border="1px solid" borderRadius="20px">
                  <Text>{e}</Text>
                </Box>
              );
            })}
          </SimpleGrid>
        </Box>
        <Box
          w={{ lg: "40%", md: "40%", sm: "100%", base: "100%" }}
          fontFamily="cursive"
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
            fontSize="2.7em"
            className={Theme ? "neonText" : ""}
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
            >
              Git Hub
            </Button>:""}
            <Button
              colorScheme={Theme ? "white" : "blue"}
              onClick={() => {
                window.open(dl);
  
              }}
              variant="outline"
            >
              DEPLOYED LINK
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default ProjectsCard;

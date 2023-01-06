import React from 'react'

import { Box, Flex, Text } from '@chakra-ui/react'
import ReactTooltip from 'react-tooltip';
import GitHubCalendar from "react-github-calendar";

function StatsCard() {
    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 7;
      
        return contributions.filter((day,i) => {
          const date = new Date(day.date);
          const monthOfDay = date.getMonth();
      
          return (
            i>=133
          );
        });
      };
    
  return (
    <Box>
      <Text fontWeight='bold' fontSize={30} mb={10}>Days I Code</Text>
    <Flex
    justifyContent='center'
    alignItems='center'>
        <GitHubCalendar 
        username="AnasQu7"
        transformData={selectLastHalfYear}
        blockSize={20}
        >
            <ReactTooltip delayShow={10} html/>
        </GitHubCalendar>
    </Flex>
        </Box>
  )
}

export default StatsCard
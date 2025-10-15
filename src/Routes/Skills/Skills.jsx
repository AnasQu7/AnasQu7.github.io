import { Box } from '@chakra-ui/react'
import React, { useContext} from 'react'
import { ThemeContext } from '../../Context/ThemeContextProvider'

import "./style.css"
import SkillsCard from '../../components/SkillsCard/SkillsCard'
import { motion } from 'framer-motion'

function Skills() {
    const {Theme} = useContext(ThemeContext)
  return (
<Box gap='75px' flexDirection='column' className="inner-header flex">
<SkillsCard heading={'LANGUAGES'} skills={['JavaScript' , 'typeScript',"python", 'html' , 'css' ]}/>
<SkillsCard heading={'FRONTEND'} skills={[ 'Reactjs' , 'nextjs','redux' , 'socket.io' , "tailwindcss", "bootstrap" , "chakraui" , "antdesign"]}/>
<SkillsCard heading={'BACKEND'} skills={['serverless', 'Nodejs' , 'express', "graphQl", "fastapi" ]}/>
<SkillsCard heading={'DATABASE'} skills={["dynamoDB", "mongoDB", "postgreSQL", "mySQL", "redis"]}/>
<SkillsCard heading={'AWS'} skills={["amplify", "sqs", "ses", "s3", "ec2", "cognito", "lambda", "rds", "cloudwatch",]}/>
<SkillsCard heading={'AI TECHNOLOGIES'} skills={["mcpServer", "googleADK", "langraph", "gemini", "chatgpt"]}/>
<SkillsCard heading={'TOOLS'} skills={['windows','linux','heroku','render' , 'netlify' , 'vercel' , 'vscode', "aws" ]}/>
{/* <SkillsCard heading={'Skills'} skills={['JavaScript' , 'React' , 'Node' , 'express' , 'mongoDb' , 'typeScript']}/>
<SkillsCard heading={'Skills'} skills={['JavaScript' , 'React' , 'Node' , 'express' , 'mongoDb' , 'typeScript']}/> */}
</Box>

  )
}

export default Skills
import { Box } from '@chakra-ui/react'
import React from 'react'
import ProjectsCard from '../../components/ProjectCard/ProjectsCard'
import "./style.css"
import ProjectHeading from '../../components/ProjectCard/ProjectHeading'
function Projects() {
  const personalprojectData = [
    {
      id: 8,
      images: [
        "/images/projects/wai.png",
        "/images/projects/wai2.png",
        "/images/projects/wai3.png",
        "/images/projects/wai4.png",
        "/images/projects/wai5.png",
        "/images/projects/wai6.png",
        "/images/projects/wai7.png",
        "/images/projects/wai8.png",
        "/images/projects/wai9.png",
        "/images/projects/wai10.png",
        "/images/projects/wai11.png"
      ],
      description: "Wisker AI is a subscription-based AI platform that provides intelligent chatbots and voice agents. I developed this platform from scratch, integrating AI chatbots for everyone, navigation support, voice agents, customizable agents, an npm package for easy integration, and secure domain verification, along with subscription-based payment handling.",
      feature: [
        "AI Chatbot for All Users",
        "Voice Agent Integration",
        "Navigation Support",
        "Customizable Agents",
        "NPM Package for Easy Integration",
        "Domain Verification",
        "Developer Guide",
        "Subscription-Based Payments"
      ],
      title: "Wisker AI",
      tech: [
        "Node",
        "Express",
        "socket.io",
        "python",
        "mongoDB",
        "aws",
        "nextjs",
        "langraph",

      ],
      dl: "https://ai.app.techwisker.com/"
    },
    {   
      id: 5,
      images: ["/images/projects/myt.png", "/images/projects/myt2.png", "/images/projects/myt3.png", "/images/projects/myt4.png"], 
      description: "I developed myt-rugs.com from scratch, integrating an AI-powered chatbot with navigation and voice capabilities. The chatbot assists users in browsing rug collections, providing product information, and guiding them through the purchasing process, enhancing the overall shopping experience.",
      feature: ["AI-Powered Chatbot", "Voice Interaction", "Product Navigation", "Real-Time Assistance", "User-Friendly Interface", "Seamless Shopping Experience"],
      title: "MYT Rugs",
      tech: ["Node", "Express", "mongoDB", "aws", "nextjs", "python", "fastapi","langraph"],
      dl: "https://myt-rugs.com/"
    },
    {
      id: 6,
      images: ["/images/projects/royal.png"],
      description: "Royal Rugs is a luxury flooring company specializing in hand-knotted and hand-loomed carpets. I developed this static portfolio website from scratch, showcasing their exquisite rug collections and weaving methods. The site features an elegant design with a user-friendly interface, reflecting the brand's commitment to sophistication and quality.",
      feature: ["Showcase of Hand-Knotted and Hand-Loomed Carpets", "Detailed Weaving Methods", "Customer Testimonials", "Elegant Design", "Responsive Layout", "Contact Information"],
      title: "Royal Rugs",
      tech: ["Html", "Css", "JavaScript", "netlify"],
      dl: "https://royalrugs.co.in/"
    },
    {
      id: 7,
      images: [
        "/images/projects/wc.png",
        "/images/projects/wc2.png",
        "/images/projects/wc3.png",
        "/images/projects/wc4.png"
      ],
      description: "I developed the hWisker Community platform from scratch, creating a dynamic space for tech enthusiasts to connect, share insights, and grow together. The platform features discussion forums, member directories, and content sharing capabilities, fostering a collaborative environment for knowledge exchange.",
      feature: [
        "Discussion Forums",
        "Member Directory",
        "Content Sharing",
        "Event Announcements",
        "User Profiles",
        "Private Messaging"
      ],
      title: "Wisker Community",
      tech: [
        "JavaScript",
        "Node",
        "Express",
        "mongoDB",
        "netlify"
      ],

      dl: "https://community.techwisker.com/"
    },
    {   id : 1 ,
      "images" : ["/images/projects/tripoto.png"], 
      description : "Tripoto is a social platform to share and discover travel experiences." , 
      feature : ["User Authentication","Explore","Forum"] ,
      title : "Tripoto" ,
      tech : ["JavaScript" ,"React" ,"Redux" , "ChakraUI" ] , 
      git : "https://github.com/AnasQu7/opposite-representative-709" , 
      dl : "https://trpipto-cloned.netlify.app/"
    },
    {   id : 2 ,
      "images" : ["/images/projects/ssense.png"], 
      description : "Ssense is a global technology platform operating at community, and commerce." , 
      feature : ["User Authentication","E-Commerce","Sorting" , "Filter" , "Search"] ,
      title : "Ssense" ,
      tech : ["JavaScript" ,"Html" , "Css" ] , 
      git : "https://github.com/AnasQu7/innate-partner-2755" , 
      dl : "https://euphonious-sable-199f27.netlify.app/"
    },
    // {   id : 3 ,
    //   "images" : ["/images/projects/kimaye.png"], 
    //   description : "Kimaye is free online fruit ordering platform." , 
    //   feature : ["User Authentication","E-Commerce","Sorting" , "Filter" , "Search"] ,
    //   title : "Kimaye" ,
    //   tech : ["JavaScript" ,"Html" , "Css" ] , 
    //   git : "https://github.com/Ajay470/Team-squalid-wire" , 
    //   dl : "https://boisterous-hotteok-75bc34.netlify.app/"
    // },
    // {   id : 4 ,
    //   "images" : ["/images/projects/chathat.png"], 
    //   description : "Chat-Hat is created by me where we can chat with our friends and family" , 
    //   feature : ["Group Chat","Connected Users","Notification"] ,
    //   title : "Chat-Hat" ,
    //   tech : ["JavaScript" ,"React" ,"Socket.io" , "ChakraUI" ] , 
    //   git : "https://github.com/AnasQu7/Chat-App" , 
    //   dl : "https://chat-hat.netlify.app/"
    // },
    // {   id : 7 ,
    //   "images" : ["/images/projects/uboric.png"], 
    //   description : "Uboric is a e-commerce site." , 
    //   feature : ["Search","E-Commerce","Cart","Sort","Filter"] ,
    //   title : "Uboric" ,
    //   tech : ["JavaScript" , "Html" ,"Css" ] , 
    //   git : "https://github.com/Amrutha010/uboric-clone" , 
    //   dl : "https://shimmering-kleicha-ab30ef.netlify.app"
    // },
    {   id : 8 ,
      "images" : ["/images/projects/skinstore.png"], 
      description : "SkinStore is an authorized retailer of premium beauty brands across skin, makeup and hair." , 
      feature : ["User Authentication","E-Commerce","Sorting" , "Filter" , "Search", "Admin Panel"] ,
      title : "Skin Care" ,
      tech : ["JavaScript" , "Html" ,"Css" ,"React" , "ChakraUI" , "Node"] , 
      git : "https://github.com/AnasQu7/Skinstore-Clone" , 
      dl : "https://timely-cucurucho-1b7757.netlify.app/"
    }
    
  ]
  const liveprojectData = [
    {   
      id : 1 ,
      "images" : ["/images/projects/tazzo.png","/images/projects/tazzo2.png","/images/projects/tazzo3.png"], 
      description : "Tazzo.ai is an AI-powered voice agent platform that enables realistic, 24/7 telephony interactions. I led the development of AI voice agents, implemented session management, automated responses, and analytics to enhance customer engagement and streamline communication." , 
      feature: ["AI Voice Agents", "24/7 Telephony Support", "Session Management", "Automated Responses", "Analytics Dashboard", "Multi-Channel Integration"],
      title : "Tazzo.ai" ,
      tech : ["JavaScript", "React", "Node", "Express", "lambda", "python", "socket.io", "mySQL"] , 
      // git : "https://github.com/AnasQu7/Skinstore-Clone" , 
      dl : "https://tazzo.ai/"
    },
    {   
      id: 2,
      images: ["/images/projects/activ.png", "/images/projects/activ2.png", "/images/projects/activ3.png","/images/projects/activ4.png"], 
      description: "Activtips is a serverless platform connecting vendors and users through a ticketing system. I designed and implemented the full-stack architecture, integrated Stripe for payments, managed real-time WebSocket communications, and optimized backend and frontend performance for a seamless user experience.",
      feature: ["Serverless Architecture", "Vendor-User Ticket System", "Stripe Payment Integration", "Real-Time Updates", "Analytics Dashboard", "Admin Panel"],
      title: "Activtips",
      tech: ["JavaScript", "React", "Nextjs", "Node", "postgreSQL", "socket.io", "serverless", "aws"],
      dl: "https://activtips.com/"
    },
    {   
      id: 3,
      images: ["/images/projects/insm.png"], 
      description: "Insmeal is a corporate dining and wallet management platform. I developed the full-stack serverless architecture, implemented wallet and corporate panel functionalities, optimized frontend performance, and ensured smooth backend operations for a seamless user experience.",
      feature: ["Wallet Management", "Corporate Panel", "Serverless Architecture", "User Authentication", "Analytics Dashboard", "Responsive UI"],
      title: "Insmeal",
      tech: ["JavaScript", "React", "Nodejs", "dynamoDB", "tailwindcss", "aws", "serverless"],
      dl: "https://insmeal.com/"
    },
    {
      id: 4,
      images: ["/images/projects/atv.png", "/images/projects/atv2.png", "/images/projects/atv3.png", "/images/projects/atv4.png"],
      description: "Athlete Vision is an AI-powered platform that provides advanced motion analysis, real-time feedback, and detailed insights into athletic performance. I contributed to the backend by managing complex analytics from the AI model across all video frames, structuring organizational data, and ensuring efficient data processing and storage.",
      feature: ["AI Motion Analysis", "Real-Time Feedback", "Video Frame Analytics", "Organizational Data Structuring", "Performance Insights", "Cloud Storage Integration"],
      title: "Athlete Vision",
      tech: ["JavaScript", "Node", "Express", "socket.io", "cognito", "postgreSQL", "aws"],
      dl: "https://athletevisionai.com/"
    },
    

  ]
  
  return (
  <Box  width='100%' id="/projects">
<Box  className="inner-header flex" id='/liveprojects'>
       <Box display="flex" flexDir='column' rowGap={50}>
     <ProjectHeading text={"LIVE PROJECTS"}/>
      {
        liveprojectData.map((e)=>{

        return <ProjectsCard props={{...e}}/>
        })
      }
    </Box>
   
</Box>
<Box height='100px'></Box>
<Box  className="inner-header flex" id='/personalprojects'>
     <Box display="flex" flexDir='column' rowGap={50}>
     <ProjectHeading text={"PERSONAL PROJECTS"}/>
      {
        personalprojectData.map((e)=>{
          
        return <ProjectsCard  props={{...e}}/>
        })
      }
    </Box>
   
</Box>
    </Box>
  )
}

export default Projects
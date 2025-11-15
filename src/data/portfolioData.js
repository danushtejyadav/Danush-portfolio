export const portfolioData = {
  name: "Danush Tej Yadav",
  headline: "I Build. I Code. I Live",
  email: "danushtejyadav@gmail.com",
  github: "https://github.com/danushtejyadav",
  linkedin: "https://www.linkedin.com/in/danush-tej-yadav-s/",
  heroImagePlaceholder: "DY", // Your Initials
  about: "Hey there! I'm Danush, a developer who loves building things that make people say, 'Whoa, how'd you do that?' Whether it's crafting AI-powered chatbots, wrangling data with Python, or spinning up full-stack dashboards, I enjoy turning big ideas into real, working web experiences. For the past few years, I have involved myself in building full stack web, android applications, integrating AI in it and working in the field of Threat Intel and ethical hacking, responsibly disclosing the bugs in applications of various businesses. When I'm not coding, you might find me travelling, exploring the latest tech, or trying to explain to everyone that 'AI won't end our civilizations!'. Let's build something awesome - bonus points if it makes the world a better place.",
  projects: [

    {
      title: "Gift Genie: AI Gift Recommender",
      description: "An intelligent chatbot that uses a guided, conversational AI to build a psychological profile of a recipient and recommend the perfect, personalized gift.",
      tags: ["Spring Boot", "Spring AI", "Java", "LLM", "Ollama", "Chatbot", "Recommender System", "AI", "Docker", "Full-Stack", "Gift Recommender"],
      liveUrl: "https://gift-genie.onrender.com/", // <-- UPDATED (This will show nothing)
      repoUrl: "https://github.com/danushtejyadav/Gift-Genie"
    },
    {
      title: "Stock Market Predictor",
      description: "This Streamlit app demonstrates a Reinforcement Learning (RL) agent trained to make stock trading decisions. It fetches live stock data using `yfinance`, trains a Deep Q-Network (DQN) model on it, and then visualizes the agent's buy/sell signals on a price chart.",
      tags: ["Python", "Reinforcement Learning (DQN)", "Streamlit"],
      liveUrl: "https://stock-prediction-using-rl-naa4qg9elcmoka97ffwwzf.streamlit.app/", // <-- UPDATED (This will show nothing)
      repoUrl: "https://github.com/danushtejyadav/Stock-prediction-using-RL"
    },
    {
      title: "Unified Event Management Dashboard",
      description: "This tool aggregates and normalizes security logs from multiple sources such as AWS, GitHub, Slack, and Google Workspace, providing a consolidated dashboard for event monitoring. It enables centralized log retrieval, streamlined analysis, and easier investigation of security-related activities.",
      tags: ["Python3", "ReactJS", "Boto3 AWS SDK", "MongoDB", "Sophos API", "AWS API", "Twingate API"],
      liveUrl: "NDA", // <-- UPDATED
      repoUrl: null
    },
    {
      title: "Asset Management Dashboard ",
      description: "This full-stack tool enables organizations to track, manage, and update asset ownership using a ReactJS frontend and Python backend. It stores asset data and ownership history in MongoDB, while providing secure authentication and intuitive controls for adding, assigning, and reassigning assets.",
      tags: ["Python", "ReactJS", "MongoDB", "Asset Management", "Dashboard", "Authentication", "Full-Stack Development", "Internship Project"],
      liveUrl: "NDA", // <-- UPDATED
      repoUrl: null
    },
    {
      title: "IntelliQuery GenAI based educator",
      description: "This Generative AI-powered platform transforms complex topics into interactive educational videos by generating storyboards, dialogues, visuals, and audio using LLaMA 70B, Groq, and Flux AI. It supports multilingual narration via Bhashini, performs real-time web search and summarization using NewsAPI and scraping tools, and compiles the final content into engaging videos for intuitive learning.",
      tags: ["Python", "LLaMA 70B", "Flux AI", "Deepgram", "Bhashini API", "Flask"],
      liveUrl: null, // <-- UPDATED
      repoUrl: "https://github.com/danushtejyadav/Code-for-humanity_IIT-Dh.git"
    },
    {
      title: "EvacuaAid: Disaster Management mobile app",
      description: "A cross-platform disaster management and emergency response app built with Flutter that provides real-time alerts, safe evacuation routes, and nearby shelter information. It also supports offline access, one-tap SOS with location sharing, multilingual support, and a clean, accessible UI for reliable assistance during emergencies.",
      tags: ["Python", "Reinforcement Learning (DQN)", "Streamlit"],
      liveUrl: null, // <-- UPDATED (This will show nothing)
      repoUrl: "https://github.com/danushtejyadav/EvacuAid"
    }
  ],
  skills: {
    Languages: [
      "Java",
      "Python",
      "SQL"
    ],
    Frameworks: [
      "Spring Boot",
      "Spring AI",
      "ReactJS",
      "Node.js",
      "Flask",
      "Streamlit",
      "Hibernate"
    ],
    Cloud_and_DevOps: [
      "AWS",
      "AWS API",
      "Boto3 AWS SDK",
      "Docker",
      "Git"
    ],
    Databases: [
      "MongoDB",
      "PostgreSQL"
    ],
    Testing: [
      "Junit",
      "wiremock"
    ],
    AI_and_ML: [
      "Spring AI",
      "Tensorflow",
      "Langchain",
      "Pytorch",
      "MLFlow",
      "Scikit-Learn",
      "Ollama",
      "Amazon Lex",
      "Amazon Bedrock sevices",
      "Recommender Systems",
      "Reinforcement Learning (DQN)"
    ]
  }
};
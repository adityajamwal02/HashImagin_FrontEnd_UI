import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    c,
    cpp,
    python,
    tailwind,
    nodejs,
    mongodb,
    git,
    Mysql,
    Github,
    carrent,
    jobit,
    tripguide,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Generate Images",
      icon: mobile,
    },
    {
      title: "HashImagin Community",
      icon: web,
    },
    {
      title: "Payment Gateway",
      icon: backend,
    },
    {
      title: "Explore Insights",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Github",
      icon: Github,
    },
  ];
  
  const experiences = [
    {
      title: "HashImagin Idea & Codex Concept",
      company_name: "Week 1",
      icon: web,
      iconBg: "#383E56",
      date: " Initial Phase ",
      points: [
        "At times it gets quite tiring and buzzing for developers to think of possible designs, logo, creative and unique.",
        "HashImagin assists developers and designers with generating unique images as per their requirements.",
        "Even web designers could use them to generate a snippet of customized theme-based webpage making it easy for the development phase.",
      ],
    },
    {
      title: "Research Papers & AI Model",
      company_name: "Week 2",
      icon: backend,
      iconBg: "#E6DEDD",
      date: "Research",
      points: [
        "Proposes a new approach to high resolution image generation using transformers with local attention.",
        "Gives a brief about generative models like General Adversarial Networks(GANs) and Variational Autoencoders(VAEs).",
        "Generative pre-training of a language model on large amount of unlabelled text for increasing the understanding of natural language for model.",
        "Brief about what is GPT-3,what are the benefits, risks, limitations of GPT-3",
      ],
    },
    {
      title: "Software Development Life Cycle",
      company_name: "Week 3",
      icon: web,
      iconBg: "#383E56",
      date: "Planning",
      points: [
        "Selecting suitable type of software development model.",
        "Spiral Model (Risk Analysis) has been used to project plan and work upon HashImagin phases.",
        "Spiral model provides us with an understanding of project development plan along with risk evaluation",
        "Developed idea of phase-training and delivering",
        "Software Testing idea after each implementation to render faults.",
      ],
    },
    {
      title: "Requirements & Feasiblity",
      company_name: "Week 4",
      icon: backend,
      iconBg: "#E6DEDD",
      date: "Planning",
      points: [
        "Changing requirements can be accommodated which allows extensive use of prototypes",
        "Requirements can be captured more accurately and hence, development can be divided into smaller parts",
        "Risky inclusive parts developed earlier which helps in better risk management. Thus, leading to better feasiblity check and less error domain.",
      ],
    },
    {
      title: "HashImagin Backend",
      company_name: "Week 5",
      icon: web,
      iconBg: "#383E56",
      date: "Phase 1",
      points: [
        "Initially started with creating a backend using Node.js and connecting database for schema of generated images via MondoDB. Seperate Cluster introduced to mark all entries over the community tab later. ",
        "Connecting backend service using middleware express and its dependencies. Segregated .env files with apt keys and cluster id-password. ",
      ],
    },

    {
      title: "API Integration",
      company_name: "Week 6",
      icon: backend,
      iconBg: "#E6DEDD",
      date: "Phase 1",
      points: [
        "After exploring the AI models, we encountered OpenAI Codex. Connecting the backend endpoint with OpenAI Model API endpoint to access pre-trained open source machine learning AI model. ",
        "Generating API key to facilitate model usage. Simultaneously, connecting it to HashImagin Website via middleware.",
      ],
    },
    {
      title: "HashImagin Frontend",
      company_name: "Week 7",
      icon: web,
      iconBg: "#383E56",
      date: "Phase 1",
      points: [
        "Mainly used React.js components alongwith tailwind-css to get an responsive behaviour with ease",
        "Other functionalities include using of basic (HTML, CSS and avaScript).",
        "Creating Posts and Displaying them are two main components which are realted to frontend display of HashImagin Community",
      ],
    },
    {
      title: "Community Showcase",
      company_name: "Week 8",
      icon: backend,
      iconBg: "#E6DEDD",
      date: "Phase 2",
      points: [
        "The concept of developing HashImagin Community came when we realized the importance of reusability to facilitate the software application.",
        "Users can see, download, and get ideas from other users' generated images which could help connect the designing world up close. ", 
        "Dynamic designs with minimal layout makes it easy to showcase imaginations and bring out the best in art. We tend to deploy the ideas you guys think!"
      ],
    },
    {
      title: "Hypertuning AI model",
      company_name: "Week 9",
      icon: web,
      iconBg: "#383E56",
      date: "Phase 2",
      points: [
        "Significant attempt at tuning the AI model from source code. Got to know about new domains, libraries, metrics and scaling dcetails. However, we could not access the code database from the server end of OPENAI",
        "The learning process was significantly higher in this phase where we explored in detail about DALL-E Model, it's use cases, codex usage with applications and maintaining a live server code. ",
      ],
    },
    {
      title: "Payment Gateway & Tokenization",
      company_name: "Week 10",
      icon: backend,
      iconBg: "#E6DEDD",
      date: "Phase 2",
      points: [
        "Google Cloud Challenge (2021): Managing cloud infrastructure, dockers, pipelines, instances and buckets on qwiklabs using GCP (Google Cloud Platform)",
        "Microsoft Cloud Challenge (2022): Design, build, test, and maintain backend applications using Microsoft 365 platform",
      ],
    },
    {
      title: "Home Page UI",
      company_name: "Week 11",
      icon: web,
      iconBg: "#383E56",
      date: "Phase 2",
      points: [
        "HashImagin Home brings out the insights required and used in this porject. Implementing the AI model for public use as an open source website ",
        "Responsive and user-friendly interface with integration of Three.js components for 3D modelling and lighting.",
        "Email.js to provide a form of suggestion for us via users."
      ],
    },
    {
      title: "Connectivity",
      company_name: "Week 12",
      icon: backend,
      iconBg: "#E6DEDD",
      date: "Phase 2",
      points: [
        "Each segment were divided and worked upon. Further the segments were pushed to VCS for safekeeping and further working over porject. Developer Tools: Git, Github, AWS, VS Code, Google Colab",
        "Project Management, Communication, Teamwork and Leadership were some key soft skills utilized in making HashImagin a success.",
        "Peer programming and weekly visit with our mentor made it all possible.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "SWATI AGARWAL",
      name: "20103278",
      designation: "https://rb.gy/0beud6",
      company: "[B10]",
      image: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-machine-learning-robotics-flaticons-lineal-color-flat-icons.png",
    },
    {
      testimonial:
        "ADITYA JAMWAL",
      name: "20103283",
      designation: "https://rb.gy/mowu8y",
      company: "[B10]",
      image: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-machine-learning-robotics-flaticons-lineal-color-flat-icons.png",
    },
    {
      testimonial:
        "RIYA KANSAL",
      name: "20103283",
      designation: "https://rb.gy/f5z9ty",
      company: "[B9]",
      image: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-machine-learning-robotics-flaticons-lineal-color-flat-icons.png",
    },
  ];
  
  const projects = [
    {
      name: "OpenAI Codex",
      description:
        "Open source general-purpose programming model which can be applied to power any next generation application! This segment made us familiar with various models within the codex and the urge to use it for our requirements and needs. Developed on NLP and Machine Learning models, it is a powerful tool to integrate our website with. ",
      tags: [
        {
          name: "Model",
          color: "blue-text-gradient",
        },
        {
          name: "Codex Integration",
          color: "green-text-gradient",
        },
        
        {
          name: "API",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/adityajamwal02/HashImagin.git",
    },
    {
      name: "Website Development",
      description:
        "Full Stack Responsive Application that enables users to write a prompt and get unique generated images. Included Create Page, Home Page, Community Showcase and Authentication functonality! A collection of dev-dependencies have been used for connecting backend, frontend, middleware and animate components.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Node",
          color: "green-text-gradient",
        },
        {
          name: "Threejs",
          color: "pink-text-gradient",
        },
        {
          name: "Mongodb",
          color: "blue-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/adityajamwal02/BloggerMania.git",
    },
    {
      name: "Research AI Models",
      description:
        "Initial segment dedicated to research learning of model capacity, use-cases, reductions, complexity and algorithms. BERT, COCOMO, DALL-E, Codex and many more! We attempted to hypertune current codex for faulty cases to improve performance. However due to private server GPT-3, we weren't accessed to improve the system. ",
      tags: [
        {
          name: "OpenAI",
          color: "blue-text-gradient",
        },
        {
          name: "DALL-E",
          color: "green-text-gradient",
        },
        {
          name: "Publications",
          color: "pink-text-gradient",
        },
        {
          name: "Research",
          color: "blue-text-gradient",
        },
        
      ],
      image: jobit,
      source_code_link: "https://github.com/adityajamwal02/RealtimeChat.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
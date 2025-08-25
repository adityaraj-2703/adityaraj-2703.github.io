import {
    mobile,
    backend,
    cloud_developer,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    java,
    spring,
    graphql,
    aws,
    gcloud,
    mysql,
    apachekafka,
    tailwind,
    nodejs,
    git,
    docker,
    altimetrik,
    infosys,
    ipsoft,
    bnymellon,
    cloud_computing,
    springboot_project,
    aed_project,
    threejs,
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Cloud Engineer",
      icon: cloud_developer,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    
  ];
  
  const technologies = [
    
    {
      name: "Spring",
      icon: spring,
    },
    {
      name: "GraphQL",
      icon: graphql,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "ApacheKafka",
      icon: apachekafka,
    },
    {
      name: "Java",
      icon: java,
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
      name: "AWS",
      icon: aws,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "GCloud",
      icon: gcloud,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Senior Software Engineer - Product and Platform Engineering",
      company_name: "Altimetrik",
      icon: altimetrik,
      iconBg: "#383E56",
      date: "Feb 2022 - August 2022",
      points: [
        "Led cross-functional team to develop Java and ReactJS validation UI with AWS Lambda",
        "Upgraded Airbnb's Payments-Page for 2 DevInfra projects using AWS DevOps",
        "Boosted client satisfaction by leading biweekly Sprint Review meetings",
        "Migrated 3 Airbnb projects to Spinnaker with Airmesh, using Docker/Kubernetes on AWS ECS and EKS",
      ],
    },
    {
      title: "Senior Software Engineer",
      company_name: "Infosys",
      icon: infosys,
      iconBg: "#E6DEDD",
      date: "Jan 2019 - Feb 2022",
      points: [
        "Architected web applications with Java RESTful services, implemented Swagger for API testing",
        "Deployed a microservice architecture for client-facing Analytics application",
        "Developed a framework with Apache Kafka for distributed accounting processes",
        "Managed SAP ABAP system automation, addressing 700 ServiceNow incidents for SAP ERP",
      ],
    },
    {
      title: "Application Developer",
      company_name: "Ipsoft Technologies",
      icon: ipsoft,
      iconBg: "#383E56",
      date: "April 2018 - Jan 2019",
      points: [
        "Developed and supervised ServiceNow ticketing tool, handled 500 incidents for Sybase queries",
        "Built a service-oriented e-commerce app with .NET, using OAuth2, GitHub, and Google Cloud",
      ],
    },
    {
      title: "Software Development Intern",
      company_name: "BNY Mellon - Inautix",
      icon: bnymellon,
      iconBg: "#E6DEDD",
      date: "Jan 2017 - May 2017",
      points: [
        "Developed SQL queries and ASP.NET applications, and utilized SonarQube for code coverage",
        "Interacted with clients, addressed client-related queries, and worked with shell scripts",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Cloud Computing",
      description:
        "Developed and deployed a Spring Boot REST API application on AWS with CI/CD automation using GitHub Actions and secured it with Token-Based Authentication and BCrypt password storage. Managed cloud resources and optimized network traffic with Pulumi, including VPC setup, auto-scaling, and load balancing.",
      tags: [
        {
          name: "spring",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "gcp",
          color: "pink-text-gradient",
        },
        {
          name: "aws",
          color: "pink-text-gradient",
        },
      ],
      image: cloud_computing,
      source_code_link: "https://github.com/adityaraj-270301/",
    },
    {
      name: "CheersClub",
      description:
        "The project is a social networking site with roles for Users, Moderators, and Admins, offering features like posting, commenting, and real-time chat. It’s built with Spring Boot, Hibernate, and MySQL, emphasizing user experience and content moderation.",
      tags: [
        {
          name: "spring",
          color: "blue-text-gradient",
        },
        {
          name: "hibernate",
          color: "green-text-gradient",
        },
        {
          name: "websocket",
          color: "pink-text-gradient",
        },
      ],
      image: springboot_project,
      source_code_link: "https://github.com/adityaraj-2703/CheersClub/",
    },
    {
      name: "WeCare",
      description:
        "WeCare aims to bridge the gap between non-profits, donors, and homeless individuals. Our platform connects homeless people with essential resources like food, clothing, housing, and volunteers. We manage records of local restaurants, colleges, and registered users.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "swingAPI",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
      ],
      image: aed_project,
      source_code_link: "https://github.com/adityaraj-2703/Final-Project---AED",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
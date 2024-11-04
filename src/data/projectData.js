// src/data/projectsData.js

const img = 'https://images.unsplash.com/photo-1562577309-2592ab84b1bc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
const displayImg = 'https://images.unsplash.com/photo-1562577309-2592ab84b1bc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
const team = 'https://img.freepik.com/free-photo/front-view-woman-posing-her-office-laptop_23-2148908837.jpg?t=st=1730713177~exp=1730716777~hmac=15b3cecd439de353e0cc5d50b3aad50629c9ba2641341b0c107a2ba847f6c97f&w=740'
const e_commerce = 'https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

const projects = [
    {
        id: 1,
        title: "SEO Optimization Platform",
        displayImg : displayImg,
        image: img,
        info: 'We did this and that',
        achievements: [
            "Increased organic traffic by 30% within 6 months",
            "Enhanced user engagement metrics by 40%",
            "Achieved top 5 search engine rankings for competitive keywords"
        ],
        description: `
            This SEO Optimization Platform was developed to improve site visibility and enhance user engagement by implementing a comprehensive SEO strategy. 
            The project included keyword research, technical SEO adjustments, and content optimization, resulting in a significant improvement in organic traffic. 
            The platform features a robust analytics dashboard that allows users to monitor their keyword rankings, track SEO improvements, and understand user behavior. 
            Additionally, our team integrated advanced link-building techniques and implemented an AI-powered content suggestion tool that recommends optimization actions 
            based on search trends and competitor analysis. This project underscored the power of data-driven SEO to drive user growth and engagement.
        `,
        stacks: ["React", "Node.js", "MongoDB", "TailwindCSS", "SEO Tools API", "Google Analytics"],
        relatedProjects: [
            { title: "SEO Insights Dashboard", link: "https://example.com/seo-dashboard" },
            { title: "Content Optimization Tool", link: "https://example.com/content-optimization" }
        ],
        projectLink: "https://example.com/project-one",
    },
    {
        id: 2,
        title: "Team Productivity Suite",
        displayImg : team,
        image: img,
        info: 'We did this and that',
        achievements: [
            "Automated key workflows for efficiency",
            "Enhanced team productivity by 25%",
            "Streamlined task management across departments"
        ],
        description: `
            The Team Productivity Suite is a full-featured project management and collaboration tool aimed at improving efficiency and productivity for remote teams. 
            This tool provides modules for task assignments, project timelines, and progress tracking, all wrapped in a user-friendly interface. The suite also includes 
            built-in integrations with popular tools like Slack, Google Drive, and Asana, allowing seamless communication and file sharing. By automating workflow 
            assignments and providing real-time project insights, the suite helps teams manage workloads efficiently. A major highlight was the addition of AI-driven 
            task prioritization, which ranks tasks based on urgency and team member availability, making project planning more streamlined and effective.
        `,
        stacks: ["Vue.js", "Firebase", "Node.js", "GraphQL", "Docker", "AWS"],
        relatedProjects: [
            { title: "Remote Collaboration Tool", link: "https://example.com/collab-tool" },
            { title: "Project Management Dashboard", link: "https://example.com/project-management" }
        ],
        projectLink: "https://example.com/project-two",
    },
    {
        id: 3,
        title: "E-commerce Analytics System",
        displayImg : e_commerce,
        image: img,
        info: 'We did this and that',
        achievements: [
            "Improved conversion rates by 15%",
            "Provided real-time data insights",
            "Enhanced user retention with personalized recommendations"
        ],
        description: `
            The E-commerce Analytics System was designed to deliver actionable insights into user behavior, sales trends, and product performance. 
            By aggregating data from multiple touchpoints, this platform offers real-time analytics that empower e-commerce businesses to make 
            informed decisions. Key features include a dynamic dashboard, custom reporting, and predictive analytics powered by machine learning 
            algorithms. This system also provides personalized product recommendations based on user behavior analysis, boosting engagement and retention. 
            Furthermore, the solution integrates with major e-commerce platforms, making it scalable and adaptable for various business needs. This 
            project underscores the role of data in modern e-commerce, driving better outcomes for both businesses and customers.
        `,
        stacks: ["Angular", "Express.js", "MySQL", "Google BigQuery", "Python (for ML)", "AWS"],
        relatedProjects: [
            { title: "Real-time Analytics Dashboard", link: "https://example.com/analytics-dashboard" },
            { title: "Recommendation Engine", link: "https://example.com/recommendation-engine" }
        ],
        projectLink: "https://example.com/project-three",
    }
];

export default projects;

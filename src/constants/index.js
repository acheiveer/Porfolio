import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With over 1 year of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Aug 2023 - Present",
    role: "Software Developer (Associate)",
    company: "PwC India",
    description: ``,
    technologies: [
      "Javascript",
      "Typescript",
      "React.js",
      "Next.js",
      "Typescript",
    ],
  },
];

export const PROJECTS = [
  {
    title: "AIContentHub",
    image: project1,
    description: `
      <p>A modern, feature-rich blogging application designed for writers, readers, and communities to connect and engage. Built with a robust tech stack (TypeScript, Prisma, PostgreSQL, Cloudflare Workers, etc.), this application offers a seamless user experience for content creation and interaction.</p>
      
      <h4 class="font-semibold mt-4">Key Features</h4>
      <ul class="list-disc pl-6">
        <li>Secure user authentication and role-based access.</li>
        <li>AI-powered content suggestions for improved writing.</li>
        <li>Collaborative blogging with real-time editing and role management.</li>
        <li>Fully responsive design with a mobile-first approach.</li>
        <li>Comment System: Add, view, edit, or delete user-specific comments on blogs.</li>
        <li>Voting System: Upvote/downvote comments, prevent duplicate voting, and display real-time vote counts.</li>
        <li>Likes on Blogs: Like/unlike functionality and track the total number of likes per blog.</li>
        <li>Advanced analytics for tracking blog performance and user engagement.</li>
      </ul>
      
      <h4 class="font-semibold mt-4">Future Enhancements</h4>
      <ul class="list-disc pl-6">
        <li>Gamification to incentivize participation.</li>
        <li>Scheduled posts for improved content planning.</li>
        <li>Comprehensive search and filtering for better discoverability.</li>
      </ul>
    `,
    technologies: ["TypeScript", "React.js", "Node.js", "Express.js", "Hono.js","Cloudflare workers", "Prisma ORM", "PostgreSQL", "Tailwind CSS", "Zod", "JWT-based Authentication",],
  },
  {
    title: "Cloud IDE",
    image: project2,
    description:
      "A secure, Repl.it-inspired coding platform with Kubernetes-powered isolated environments for each user. Supports multiple languages, features a simple UI, and ensures robust security for seamless individual coding experiences.",
    technologies: ["", "", "", ""],
  },
  {
    title: "DhanYatra",
    image: project3,
    description: "Basic version of PayTM(Wallet)",
    technologies: ["Node.js", "Express.js", "React", "MongoDB"],
  },
  {
    title: "To-Do List App",
    image: project4,
    description:
      "A MERN stack marvel for task management. Secure login, real-time updates, and a clean interface. Add, delete, filter tasks effortlessly. React.js, Node.js, MongoDB. Contribute and organize tasks seamlessly.",
    technologies: ["Node.js", "Express.js", "React", "MongoDB"],
  },
];

export const CONTACT = {
  address: "Lok Vihar Coloy, Varanasi",
  phoneNo: "+91 98286 75853",
  email: "Prabhakarsinghssm1@gmail.com",
};

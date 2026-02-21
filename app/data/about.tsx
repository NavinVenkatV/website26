
export const Data = {
    bio: [
        "I like being the person who turns ideas into real products.",
        "Started my journey tinkering with code and Web3 by curiosity...",
        "Along the way, I dabbled in frontend design, backend engineering...",
        "You’ll probably catch me experimenting on GitHub..."
    ],
    email: 'vnavinvenkat@gmail.com',
    skills: [
        "TypeScript",
        "JavaScript",
        "C++",
        "Rust",
        "Bash",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "ShadCN",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Prisma",
        "Redis",
        "Docker",
        "GitHub Actions",
        "AWS (EC2/S3)",
        "NGINX",
        "CI/CD",
        "Linux",
        "Git",
        "REST APIs",
        "WebSocket",
        "Socket.IO",
        "Turborepo",
        "Blockchain Fundamentals",
        "Solana Development",
    ],
    career: {
        company1: "AgileSoftLabs",
        company2: "Freelancer",
        year1: "Jan 2025 – Apr 2025",
        year2: "2024 – Present",
        bio1: `Built scalable APIs and user interfaces using React.js and Next.js for enterprise clients. I integrated MongoDB for
                persistent storage and Firebase for real-time updates, while optimizing application performance by modularizing large
                codebases.`,
        bio2: `As a freelance web developer, I design and deploy client websites and SaaS applications using the MERN stack with
                Dockerized CI/CD workflows. My work includes implementing authentication, payment gateways, and performance
                dashboards, with a focus on responsive UI/UX and reusable components.`,
        link1: 'https://agilesoftlabs.com/',
        link2: 'https://navinvenkat.xyz/'
    },

    projects: {
        name1: "CodeIt: Real-Time Code Collaboration Platform",
        image1: "codeit.png",
        bio1: `Overview: A web-based tool enabling multiple users to edit code simultaneously in real-time, similar to collaborative editors like Google Docs but focused on programming.
Technical Details:

Frontend: Built with React.js and TypeScript for robust, type-safe UI components. Tailwind CSS handles styling for responsive and customizable design.
Backend/Database: MongoDB for storing code sessions, user data, and room metadata. Socket.IO powers the real-time communication via WebSockets, ensuring low-latency synchronization across users.
Key Features:
Syntax highlighting for various programming languages.
Secure room access with unique identifiers or authentication to prevent unauthorized edits.
Multi-user editing with live updates, conflict resolution, and cursor tracking.

Architecture: Client-server model where the frontend subscribes to WebSocket events for updates, and the backend broadcasts changes. Likely deployed as a full-stack app with Node.js implied from tech stack.
Additional Notes: Ideal for remote pair programming or team coding sessions. Potential integrations include version control hooks or export to Git.`,
        name2: "Exa: AI-Powered Search Engine",
        bio2: `Overview: An intelligent search application that leverages AI to deliver concise, relevant results beyond traditional keyword matching.
Technical Details:

Frontend: TypeScript and Next.js for server-side rendering and fast performance. Framer Motion (referred to as "Motion") for smooth animations and transitions.
Backend/Database: Prisma as ORM for database interactions, PostgreSQL for reliable, scalable storage of search indices and user data. NextAuth for handling authentication securely.
Key Features:
Integration with Exa API and large language models (LLMs) to process queries and generate summarized results.
Secure user authentication and session management.
Deployment on Vercel for seamless hosting, auto-scaling, and CI/CD.

Architecture: Hybrid SSR/CSR setup with API routes in Next.js for querying the backend. AI processing likely involves API calls to external services, with results cached in PostgreSQL for efficiency.
Additional Notes: Focuses on user privacy and performance, making it suitable for personal or enterprise search tools. Could include natural language query support.`,
        name3: 'PingMe: Uptime Monitoring SaaS Tool',
        bio3: `
Overview: A subscription-based service for tracking website availability, alerting users to downtime, and providing performance insights.
Technical Details:

Frontend: Next.js for dynamic UI, Tailwind CSS for styling, Framer Motion for interactive elements like dashboards and alerts.
Backend/Database: Prisma for database management, PostgreSQL to log metrics, uptime history, and user configurations.
Key Features:
Real-time monitoring of website status with periodic pings.
Email alerts for downtime, integrated with services like SendGrid or similar.
User authentication, free-tier usage limits, and paid upgrades via Razorpay payment gateway.
Metrics logging and visualization (e.g., uptime percentages, response times).

Architecture: SaaS model with serverless functions in Next.js for checks, cron jobs for scheduling, and database triggers for alerts. Scalable design to handle multiple sites per user.
Additional Notes: Emphasizes reliability and ease of use, with potential for expansions like SMS alerts or integrations with tools like Slack.`
    }

};
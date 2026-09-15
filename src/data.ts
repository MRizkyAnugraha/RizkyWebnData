export const profile = {
  name: "Rizky Anugraha",
  role: "Full-Stack Web Developer",
  location: "South Tangerang, Indonesia",
  email: "anugrahamrizky@gmail.com",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  tagline: "WEB DEV — BI & DATA",
  intro:
    "Building practical web applications with a background in data analytics and business intelligence.",
  about:
    "My professional experience in Business Intelligence taught me how to understand business requirements, work with data, solve problems, and build solutions for real-world users. I am now expanding that foundation into web development, focusing on building complete applications from frontend interfaces to backend systems.",
}

export type SkillGroup = {
  title: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Front End",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML & CSS"],
  },
  {
    title: "Back End",
    items: ["Node.js", "Python", "REST APIs", "Express", "Authentication"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MongoDB", "SQL", "Data Modeling", "Supabase"],
  },
  {
    title: "DevOps & Tools",
    items: ["Git", "Docker", "Vercel", "CI/CD", "Power BI"],
  },
]

export type Project = {
  title: string
  description: string
  tags: string[]
  year: string
}

export const projects: Project[] = [
  {
    title: "Sales Analytics Dashboard",
    description:
      "An interactive dashboard turning raw sales data into clear, actionable insights with filters, trends, and KPI tracking built on a real-time data pipeline.",
    tags: ["React", "TypeScript", "PostgreSQL", "Charts"],
    year: "2025",
  },
  {
    title: "Inventory Management System",
    description:
      "A full-stack application for tracking stock, orders, and suppliers with role-based access and automated low-stock alerts.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
    year: "2025",
  },
  {
    title: "Data Reporting Portal",
    description:
      "A self-service reporting tool that lets business users build and export custom reports without writing SQL, bridging my BI experience and web development.",
    tags: ["React", "Python", "REST API"],
    year: "2024",
  },
  {
    title: "Personal Finance Tracker",
    description:
      "A responsive web app for budgeting and expense tracking with category insights, monthly summaries, and a clean, focused UI.",
    tags: ["React", "TypeScript", "Supabase"],
    year: "2024",
  },
]

export const stats = [
  { value: "5+", label: "Years in BI & Data" },
  { value: "10+", label: "Projects Shipped" },
  { value: "∞", label: "Curiosity to Learn" },
]

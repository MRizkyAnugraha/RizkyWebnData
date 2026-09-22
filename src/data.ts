export const profile = {
  name: "Rizky Anugraha",
  role: "Full-Stack Web Developer",
  location: "South Tangerang, Indonesia",
  email: "anugrahamrizky@gmail.com",
  github: "https://github.com/MRizkyAnugraha",
  linkedin: "https://www.linkedin.com/in/muhammad-rizky-anugraha",
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
    items: ["React", "TypeScript", "Tailwind CSS", "HTML & CSS"],
  },
  {
    title: "Back End",
    items: ["Node.js", "Python", "REST APIs", "Express", "Authentication"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "SQL", "Data Modeling"],
  },
  {
    title: "DevOps & Tools",
    items: ["Git", "Docker", "Vercel", "CI/CD"],
  },
  {
    title: "Data Visualization & BI",
    items: ["Power BI", "Metabase"],
  },
]

export type Portfolio = {
  title: string
  subtitle?: string
  description: string
  tags: string[]
  year: string
  image?: string
  link?: string
}

export const portfolio: Portfolio[] = [
  {
    title: "Warung Wakiki",
    subtitle: "E-commerce Front-End Prototype",
    description:
      'Built a responsive e-commerce front-end prototype for a household and food-supply store using HTML, CSS, and JavaScript. The project focused on creating a practical storefront where users could browse product categories, explore promotional content, and access store information. I implemented responsive layouts, navigation, product sections, image slideshow interactions, and other UI elements while practicing the separation of structure, styling, and behavior. The result is a functional front-end prototype, while identifying backend, database, authentication, cart, and order management as the next steps toward a full e-commerce application.',
    tags: ["HTML", "CSS",  "Javascript"],
    year: "2025",
    image: "./public/images/warung_wakiki.png",
    link: "https://mrizkyanugraha.github.io/warungwakiki/",
  },
  {
    title: "Kalkulator Suhu",
    subtitle: "Celsius & Fahrenheit Conversion Web Application",
    description:
      'Built an interactive temperature conversion application using HTML, CSS, and JavaScript to convert between Celsius and Fahrenheit. The project focused on handling user input and presenting conversion results clearly, with features including reverse conversion, input validation, calculation explanations, and dynamic warning messages. Through the project, I practiced DOM manipulation, event handling, conditional logic, functions, and dynamic UI updates, resulting in a functional beginner-level web application.',
    tags: ["HTML", "CSS",  "Javascript"],
    year: "2025",
    image: "./public/images/kalkulator_suhu.png",
    link: "https://revou-fundamental-course.github.io/19-may-25-MRizkyAnugraha/?celcius=32",
  },
  // {
  //   title: "Data Reporting Portal",
  //   description:
  //     "A self-service reporting tool that lets business users build and export custom reports without writing SQL, bridging my BI experience and web development.",
  //   tags: ["React", "Python", "REST API"],
  //   year: "2024",
  // },
  // {
  //   title: "Personal Finance Tracker",
  //   description:
  //     "A responsive web app for budgeting and expense tracking with category insights, monthly summaries, and a clean, focused UI.",
  //   tags: ["React", "TypeScript", "Supabase"],
  //   year: "2024",
  // },
]

export type Experience = {
  title: string
  description: string
  company: string
  year: string
}

export const experience: Experience[] = [
  {
    title: "Power BI Engineer",
    description:
      "Developed and maintained Power BI dashboards supporting sales performance, incentive tracking, and operational monitoring. Translated business reporting needs into data models and visualization solutions in collaboration with Business Analysts. Validated and transformed data from SQL Server and Microsoft Fabric sources to ensure reporting accuracy and consistency. Worked closely with Data Engineers to align data structure with reporting and analytics requirements",
    company: "PT. Arshiara Teknologi Indonesia",
    year: "2025 - Present",
  },
  {
    title: "Junior BI Consultant",
    description:
      "Developed Power BI reports supporting operational and commercial monitoring use cases. Supported business users in translating reporting needs into technical reporting solutions. Contributed to automation initiatives using Power Apps and Power Automate. Collaborated with backend teams to ensure data availability and reporting reliability for business users.",
    company: "PT. Ignite Indonesia",
    year: "2023 - 2024",
  },]

  export type Testimonial = {
  name: string
  description: string
  title: string
  company: string
  year: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Adam A",
    description:
      `​Rizky is a highly dependable, technically brilliant, and supportive data professional. During the Lumina Project for Sinarmas Land, he played a crucial role in onboarding team members and mastering highly complex Power BI and DAX logic. He consistently served as the team's go-to problem solver and collaborative anchor making him highly recommended for any organization.`,
    title: "Lead Power BI Engineer",
    company: "Akuntplus",
    year: "2026",
  },
  {
    name: "Bisyri M",
    description:
      `
I have had the pleasure of working with Rizky for one month, and I can confidently say that he is an exceptional data analyst. Rizky possesses a wide range of skills and expertise in SQL, and he is always seeking to expand his knowledge and stay up-to-date with the latest trends and techniques.`,
    title: "Odoo Developer",
    company: "HashMicro",
    year: "2023",
  },]

export const stats = [
  { value: "2+", label: "Years in BI & Data" },
  { value: "5+", label: "Projects Shipped" },
  { value: "∞", label: "Curiosity to Learn" },
]

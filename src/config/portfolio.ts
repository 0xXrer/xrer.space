export interface SkillConfig {
  name: string;
  icon: string;
  category?: "language" | "framework" | "tool" | "database";
}

export interface ProjectConfig {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  url?: string;
  githubUrl?: string;
  videoSrc?: string;
  imageSrc?: string;
  icon?: string;
  badge?: string;
  technologies?: string[];
  featured?: boolean;
  status?: "active" | "completed" | "archived";
}

export interface PersonalInfo {
  name: string;
  age: number;
  location: string;
  title: string;
  bio: string[];
  avatar?: string;
  banner?: string; // Discord-style profile banner
  bannerColor?: string; // Fallback color if no banner image (e.g., "#5865F2")
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  siteUrl: string;
  image: string;
  twitterHandle?: string;
  locale: string;
  type: string;
}

export interface PortfolioConfig {
  personal: PersonalInfo;
  skills: SkillConfig[];
  projects: ProjectConfig[];
  seo: SEOConfig;
}

/**
 * Helper function to get the avatar URL
 * If avatar is provided, use it. Otherwise, fallback to GitHub avatar if available.
 */
export function getAvatarUrl(config: PortfolioConfig): string {
  const { avatar, socialLinks } = config.personal;

  // If avatar is explicitly set and not empty, use it
  if (avatar && avatar.trim() !== "") {
    return avatar;
  }

  // Fallback to GitHub avatar if GitHub URL is available
  if (socialLinks.github) {
    const match = socialLinks.github.match(/github\.com\/([^\/]+)/);
    if (match && match[1]) {
      return `https://github.com/${match[1]}.png`;
    }
  }

  // Ultimate fallback (empty string or you could use a default placeholder)
  return "";
}

const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Xrer",
    age: 17,
    location: "Kazakhstan",
    title: "Full Stack Developer & Reverse Engineer",
    bio: [
      "I'm a 17-year-old passionate developer from Kazakhstan. I specialize in fullstack development and software engineering, currently diving into the exciting world of reverse engineering as a junior - and I'm absolutely loving every moment of it!",
      "My journey in programming has led me through various languages and technologies. I enjoy building innovative solutions and exploring the depths of how software works.",
    ],
    avatar: "/avatar.gif",
    banner: "profilebanner.png", // Add your banner image here (or leave empty)
    bannerColor: "#5865F2", // Fallback color (Discord blue by default)
    socialLinks: {
      github: "https://github.com/0xXrer",
    },
  },

  skills: [
    { name: "TypeScript", icon: "/icons/typescript.svg", category: "language" },
    { name: "JavaScript", icon: "/icons/javascript.svg", category: "language" },
    { name: "Rust", icon: "/icons/rust.svg", category: "language" },
    { name: "C#", icon: "/icons/csharp.svg", category: "language" },
    { name: "C++", icon: "/icons/cpp.svg", category: "language" },
    { name: "Python", icon: "/icons/python.svg", category: "language" },
    { name: "Lua", icon: "/icons/lua.svg", category: "language" },
    { name: "Luau", icon: "/icons/luau.svg", category: "language" },
    // You can easily add more skills here:
    // { name: "React", icon: "/icons/react.svg", category: "framework" },
    // { name: "Vue", icon: "/icons/vue.svg", category: "framework" },
    // { name: "Docker", icon: "/icons/docker.svg", category: "tool" },
  ],

  projects: [
    {
      id: "uilibs",
      title: "UI Libraries Storage",
      description:
        "UILibs is a simple and handy website that helps you discover and explore cool UI libraries for your Roblox projects. Whether you're a beginner or experienced developer, you can easily browse and find the perfect UI tools to enhance your game.",
      url: "https://uilibs.xrer.space",
      videoSrc: "/videos/projects-preview/uilibs.mp4",
      icon: "LucideBox",
      badge: "Latest Project",
      featured: true,
      status: "active",
    },
    {
      id: "authguard",
      title: "KeyGuardian (AuthGuard)",
      description:
        "Keyguardian is a free whitelist service; I used to be a frontend developer there.",
      url: "https://authguard.org/",
      videoSrc: "/videos/projects-preview/authg.mp4",
      icon: "Key",
      featured: false,
      status: "completed",
    },
  ],

  seo: {
    title: "Xrer - Full Stack Developer & Reverse Engineer Portfolio",
    description:
      "17-year-old passionate developer from Kazakhstan specializing in fullstack development, software engineering, and reverse engineering. Skilled in TypeScript, JavaScript, Rust, C#, C++, PHP, Python, Lua, and Luau.",
    keywords: [
      "Xrer",
      "Full Stack Developer",
      "Reverse Engineer",
      "Kazakhstan Developer",
      "TypeScript",
      "JavaScript",
      "Rust",
      "C#",
      "C++",
      "PHP",
      "Python",
      "Lua",
      "Luau",
      "Software Engineer",
      "Web Developer",
      "Frontend Developer",
      "Backend Developer",
      "Portfolio",
      "Programming",
      "Software Development",
    ],
    author: "Xrer",
    siteUrl: "https://xrer.space", // Update this to your actual domain
    image: "", // This will be the default social media image
    twitterHandle: "@xrer", // Update if you have Twitter
    locale: "en_US",
    type: "website",
  },
};

export default portfolioConfig;

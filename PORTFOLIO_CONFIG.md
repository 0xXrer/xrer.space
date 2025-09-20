# Portfolio Configuration System

This portfolio uses a centralized configuration system that allows you to easily manage your personal information, skills, and projects without touching the component code.

## Configuration File

The main configuration is located at `src/config/portfolio.ts`. This file contains all your portfolio data in a structured format.

## How to Update Your Portfolio

### Personal Information

Edit the `personal` section in `src/config/portfolio.ts`:

```typescript
personal: {
  name: "Your Name",
  age: 25,
  location: "Your Location",
  title: "Your Professional Title",
  bio: [
    "First paragraph of your bio...",
    "Second paragraph of your bio..."
  ],
  avatar: "/path-to-your-avatar.png",
  socialLinks: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    email: "your.email@example.com"
  }
}
```

### Skills/Programming Languages

Add or modify skills in the `skills` array. The system will automatically display the icons:

```typescript
skills: [
  { name: "TypeScript", icon: "/icons/typescript.svg", category: "language" },
  { name: "React", icon: "/icons/react.svg", category: "framework" },
  // Add more skills...
]
```

**Icon Requirements:**
- Place your skill icons in the `public/icons/` directory
- Use SVG format for best quality
- Name them consistently (e.g., `typescript.svg`, `javascript.svg`)

### SEO Configuration

Update the `seo` section for better search engine optimization:

```typescript
seo: {
  title: "Your Name - Your Professional Title",
  description: "Your professional description highlighting your skills and expertise...",
  keywords: ["Your Name", "Developer", "Your Skills", "Your Location"],
  author: "Your Name",
  siteUrl: "https://yourdomain.com", // IMPORTANT: Update to your actual domain
  image: "/your-avatar.png", // Social media preview image
  twitterHandle: "@yourhandle", // Optional Twitter handle
  locale: "en_US", // Your locale
  type: "website"
}
```

**SEO Features Included:**
- Meta tags for search engines
- Open Graph tags for Facebook/LinkedIn sharing
- Twitter Card tags for Twitter sharing
- JSON-LD structured data for rich snippets
- Automatic sitemap.xml generation
- Robots.txt generation

### Projects

Add projects to the `projects` array:

```typescript
projects: [
  {
    id: "unique-project-id",
    title: "Project Title",
    description: "Short description...",
    longDescription: "Detailed description (optional)",
    url: "https://project-website.com",
    githubUrl: "https://github.com/user/repo",
    videoSrc: "/videos/project-preview.mp4", // optional
    imageSrc: "/images/project-screenshot.png", // optional
    icon: "LucideBox", // or "Key" - currently supported icons
    badge: "Latest Project", // optional
    technologies: ["React", "TypeScript", "Node.js"],
    featured: true, // will display prominently
    status: "active" // or "completed", "archived"
  }
]
```

**Media Requirements:**
- Videos: Place in `public/videos/projects-preview/`
- Images: Place in `public/images/`
- Supported video formats: MP4
- Supported image formats: PNG, JPG, WebP

## Features

### ✅ Automatic Icon Display
- Skills automatically show programming language icons
- Icons scale and have hover effects

### ✅ Dynamic Project Cards
- Projects automatically generate cards with media
- Video hover functionality included
- Responsive grid layout

### ✅ Featured Projects
- Mark projects as `featured: true` for prominent display
- Featured projects show with special badges

### ✅ Technology Tags
- Projects automatically display technology badges
- Clean, organized presentation

### ✅ Responsive Design
- All components work across desktop and mobile
- Clean, professional layout

### ✅ Comprehensive SEO
- Automatic meta tags generation
- Open Graph and Twitter Cards
- JSON-LD structured data
- Sitemap.xml generation
- Robots.txt generation
- Optimized for search engines and social media sharing

## File Structure

```
src/
├── config/
│   └── portfolio.ts          # Main configuration file
├── components/
│   ├── Skills.astro          # Skills display component
│   ├── ProjectCard.astro     # Individual project card
│   └── containers/
│       ├── about.astro       # About section (uses config)
│       └── projects.astro    # Projects section (uses config)
```

## Adding New Projects

1. Add media files to `public/videos/projects-preview/` or `public/images/`
2. Add project configuration to `src/config/portfolio.ts`
3. The project will automatically appear on your portfolio

## Adding New Skills

1. Add the icon to `public/icons/`
2. Add the skill to the `skills` array in `src/config/portfolio.ts`
3. The skill will automatically appear with its icon

## Customization

The configuration system is fully typed with TypeScript, so your editor will provide autocomplete and error checking. This makes it easy to add new fields or modify existing ones without breaking anything.

## Future Enhancements

This system can be easily extended to include:
- Blog posts
- Education history
- Work experience
- Testimonials
- Contact form configuration

Just add new sections to the configuration file and create corresponding components!

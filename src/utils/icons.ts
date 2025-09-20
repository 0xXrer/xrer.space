// Icon utility functions for portfolio components

export const getIconUrl = (iconName: string): string => {
  // Convert icon name to lowercase and remove spaces/special chars
  const cleanName = iconName.toLowerCase().replace(/[^a-z0-9]/g, '');
  return `/icons/${cleanName}.svg`;
};

export const getSkillIcon = (skillName: string): string => {
  const iconMapping: Record<string, string> = {
    'typescript': '/icons/typescript.svg',
    'javascript': '/icons/javascript.svg',
    'react': '/icons/react.svg',
    'vue': '/icons/vue.svg',
    'angular': '/icons/angular.svg',
    'svelte': '/icons/svelte.svg',
    'nodejs': '/icons/nodejs.svg',
    'python': '/icons/python.svg',
    'rust': '/icons/rust.svg',
    'go': '/icons/go.svg',
    'java': '/icons/java.svg',
    'csharp': '/icons/csharp.svg',
    'cpp': '/icons/cpp.svg',
    'php': '/icons/php.svg',
    'lua': '/icons/lua.svg',
    'luau': '/icons/luau.svg',
    'html': '/icons/html.svg',
    'css': '/icons/css.svg',
    'sass': '/icons/sass.svg',
    'tailwind': '/icons/tailwind.svg',
    'docker': '/icons/docker.svg',
    'kubernetes': '/icons/kubernetes.svg',
    'aws': '/icons/aws.svg',
    'git': '/icons/git.svg',
    'github': '/icons/github.svg',
    'gitlab': '/icons/gitlab.svg',
    'bitbucket': '/icons/bitbucket.svg',
    'mysql': '/icons/mysql.svg',
    'postgresql': '/icons/postgresql.svg',
    'mongodb': '/icons/mongodb.svg',
    'redis': '/icons/redis.svg',
    'firebase': '/icons/firebase.svg',
    'vercel': '/icons/vercel.svg',
    'netlify': '/icons/netlify.svg',
    'nextjs': '/icons/nextjs.svg',
    'nuxtjs': '/icons/nuxtjs.svg',
    'astro': '/icons/astro.svg',
    'vite': '/icons/vite.svg',
    'webpack': '/icons/webpack.svg',
    'figma': '/icons/figma.svg',
    'adobe': '/icons/adobe.svg',
    'sketch': '/icons/sketch.svg'
  };

  const key = skillName.toLowerCase().replace(/[^a-z0-9]/g, '');
  return iconMapping[key] || getIconUrl(skillName);
};

export const getTechnologyIcon = (techName: string): string => {
  return getSkillIcon(techName);
};

export const getLucideIcon = (iconName: string): string => {
  // Map common Lucide icon names to SVG paths
  const lucideIcons: Record<string, string> = {
    'box': 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z M3.27 6.96 12 12.01 20.73 6.96 M12 22.08V12',
    'key': 'M7.5 15.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z M21 2l-9.6 9.6 M15.5 7.5l3 3L22 7l-3-3',
    'github': 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22',
    'external-link': 'M15 3h6v6 M10 14L21 3 M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6',
    'mail': 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6',
    'linkedin': 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
    'twitter': 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
    'globe': 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'
  };

  return lucideIcons[iconName.toLowerCase()] || '';
};

export const renderLucideIcon = (iconName: string, className: string = "h-4 w-4"): string => {
  const path = getLucideIcon(iconName);
  if (!path) return '';

  return `
    <svg class="${className}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="${path}"/>
    </svg>
  `;
};

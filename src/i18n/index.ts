export type Language = "en" | "ru";

export interface Translations {
  nav: {
    about: string;
    projects: string;
    github: string;
    contact: string;
  };
  about: {
    badge: string;
  };
  projects: {
    badge: string;
    description: string;
    viewAll: string;
  };
  github: {
    badge: string;
    description: string;
    viewAll: string;
    noRepos: string;
  };
  contact: {
    badge: string;
    title: string;
    description: string;
    discord: {
      title: string;
      description: string;
      button: string;
    };
  };
  soon: {
    message: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      github: "GitHub",
      contact: "Contact",
    },
    about: {
      badge: "ABOUT ME",
    },
    projects: {
      badge: "MY WORKS",
      description:
        "All projects are protected by a license agreement, you can learn more about the project by clicking on it.",
      viewAll: "View all projects",
    },
    github: {
      badge: "GITHUB REPOSITORIES",
      description:
        "Explore my open-source projects and contributions on GitHub. These are my most recently updated public repositories.",
      viewAll: "View all repositories on GitHub",
      noRepos: "No repositories found.",
    },
    contact: {
      badge: "GET IN TOUCH",
      title: "Let's Connect",
      description:
        "Feel free to reach out if you have any questions, want to collaborate, or just want to chat about technology and development.",
      discord: {
        title: "Discord",
        description: "Message me on Discord for quick responses",
        button: "Open Discord",
      },
    },
    soon: {
      message: "Soon I'll add more information about me and my portfolio ❤️",
    },
  },
  ru: {
    nav: {
      about: "Обо мне",
      projects: "Проекты",
      github: "GitHub",
      contact: "Контакты",
    },
    about: {
      badge: "ОБО МНЕ",
    },
    projects: {
      badge: "МОИ РАБОТЫ",
      description:
        "Все проекты защищены лицензионным соглашением, вы можете узнать больше о проекте, нажав на него.",
      viewAll: "Посмотреть все проекты",
    },
    github: {
      badge: "РЕПОЗИТОРИИ GITHUB",
      description:
        "Изучите мои open-source проекты и вклад на GitHub. Это мои самые недавно обновленные публичные репозитории.",
      viewAll: "Посмотреть все репозитории на GitHub",
      noRepos: "Репозитории не найдены.",
    },
    contact: {
      badge: "СВЯЗАТЬСЯ СО МНОЙ",
      title: "Давайте свяжемся",
      description:
        "Не стесняйтесь обращаться, если у вас есть вопросы, вы хотите сотрудничать или просто поговорить о технологиях и разработке.",
      discord: {
        title: "Discord",
        description: "Напишите мне в Discord для быстрых ответов",
        button: "Открыть Discord",
      },
    },
    soon: {
      message: "Скоро я добавлю больше информации обо мне и моем портфолио ❤️",
    },
  },
};

export function getTranslations(lang: Language): Translations {
  return translations[lang];
}

export const defaultLanguage: Language = "en";

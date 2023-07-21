import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  footer: {
    component: null
  },
  sidebar: {
    toggleButton: true,
  },
  project: {
    link: 'https://github.com/civ6bot/',
  },
  chat: {
    link: 'https://discord.gg/CzCQPjxXTy',
  },
  docsRepositoryBase: 'https://github.com/civ6bot/',
  primaryHue: {
    dark: 0,
    light: 0
  },
  logo: ( 
    <div style={{textAlign: "center"}}>
      <img 
        src="/logo/logo-hex-darkened.png" 
        alt="Civ6Bot Logo" 
        width="50" 
        height="50" 
        style={{display: "inline", marginRight: 10}}
      ></img>
      <strong style={{display: "inline"}}>Civ6Bot</strong>
    </div>
  ),
  logoLink: "/",
  toc: {
    title: ""
  },
  editLink: {
    text: null
  },
  feedback: {
    content: null
  },
  gitTimestamp: null,
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'ru', text: 'Русский' },
    { locale: 'uk', text: 'Українська' },
  ],
  darkMode: true,
  nextThemes: {
    defaultTheme: 'light',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s | Civ6Bot',
    }
  },
  search: {
    placeholder: "🔍"
  }
  /*
  banner: {
    dismissible: true,
    key: "Hey!",
    text: "Why you can see this?"
  }
  */
};

export default config;

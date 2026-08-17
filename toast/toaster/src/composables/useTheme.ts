import { ref } from 'vue';

export function useTheme() {
  const isDarkMode = ref(false);

  const applyTheme = (dark: boolean) => {
    isDarkMode.value = dark;
    const theme = dark ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  };

  const toggleTheme = () => applyTheme(!isDarkMode.value);

  const initTheme = () => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(saved ? saved === 'dark' : prefersDark);
  };

  return { isDarkMode, toggleTheme, initTheme };
}

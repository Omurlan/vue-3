const getUserPrefersTheme = () => {
  const currentTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  return currentTheme ? "dark" : "light";
};

document.documentElement.setAttribute(
  "data-theme",
  localStorage.getItem("theme") || getUserPrefersTheme()
);

export default {
  state: {
    theme: localStorage.getItem("theme") || getUserPrefersTheme(),
  },
  mutations: {
    toggleTheme(state) {
      state.theme = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", state.theme);
      document.documentElement.setAttribute("data-theme", state.theme);
    },
  },
};

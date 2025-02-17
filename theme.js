document.addEventListener("DOMContentLoaded", () => {
  const themeSwitch = document.getElementById("themeSwitch");
  const currentTheme = localStorage.getItem("theme") || "light";

  document.body.classList.add(currentTheme + "-mode");

  themeSwitch.checked = currentTheme === "dark";

  themeSwitch.addEventListener("change", () => {
    if (themeSwitch.checked) {
      document.body.classList.replace("light-mode", "dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.replace("dark-mode", "light-mode");
      localStorage.setItem("theme", "light");
    }
  });
});

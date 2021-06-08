const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

const documentElement = document.querySelector("html");
const contentElement = document.querySelector(".main-content");
const sidebarElement = document.querySelector(".sidebar");
const sidebarIsOpen = () => documentElement.classList.contains("sidebar-is-open");

const openSidebar = () => {

  documentElement.classList.add("sidebar-is-open");
};

const closeSidebar = () => {
  documentElement.classList.remove("sidebar-is-open");
};

const toggleSidebar = () => {
  sidebarIsOpen() ? closeSidebar() : openSidebar();
};

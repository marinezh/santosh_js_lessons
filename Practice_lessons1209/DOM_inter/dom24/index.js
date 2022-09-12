// TODO: when the user clicks on '#menu-sidebar' => toggle the class 'show' on '#app-sidebar'

const sidebarButton = document.querySelector("#menu-sidebar");

sidebarButton.addEventListener("click", () => {
  document.querySelector("#app-sidebar").classList.toggle("show");
});

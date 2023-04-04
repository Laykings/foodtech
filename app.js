const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebarContainer = document.querySelector(".sidebar");
const navbar = document.querySelector(".navbar");
toggleBtn.addEventListener("click", () => {
  sidebarContainer.classList.add("open-sidebar");
});

closeBtn.addEventListener("click", () => {
  sidebarContainer.classList.remove("open-sidebar");
});
const fixedNav = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight) {
      navbar.classList.add("fixed-nav");
    } else {
      navbar.classList.remove("fixed-nav");
    }
  });
};
fixedNav();

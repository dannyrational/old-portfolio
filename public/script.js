//Variables
const openNavBtn = document.querySelector("#open-nav-btn");
const closeNavBtn = document.querySelector("#close-nav-btn");
const navMenuLinks = document.querySelector("#nav-links-col");
const navContainer = document.querySelector("#nav-container");
const captcha = document.querySelector('.rc-anchor-normal {
    ')

    // Navigation Bar
    //Event Listeners
    openNavBtn.addEventListener("click", () => {
      if (navMenuLinks.classList.contains("translate-x-full")) {
        openNavBtn.classList.add("hidden");
        closeNavBtn.classList.remove("hidden");
        navMenuLinks.classList.remove("translate-x-full");
        navContainer.classList.remove("border-b");
      }
    });

    closeNavBtn.addEventListener("click", () => {
      closeNavBtn.classList.add("hidden");
      openNavBtn.classList.remove("hidden");
      navMenuLinks.classList.add("translate-x-full");
      navContainer.classList.add("border-b");
    });

    //Captcha resize
    captcha.style.width = "275px";
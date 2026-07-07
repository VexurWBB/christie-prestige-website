import "../css/styles.css";
import { initLayout } from "./layout.js";

function loadPageStyles() {
  if (document.body.classList.contains("page-home")) {
    return import("../css/home.css");
  }
  if (document.body.classList.contains("page-about")) {
    return import("../css/about.css");
  }
  if (document.body.classList.contains("page-standard")) {
    return import("../css/standard.css");
  }
  if (document.body.classList.contains("page-who")) {
    return import("../css/who.css");
  }
  if (document.body.classList.contains("page-process")) {
    return import("../css/process.css");
  }
  return Promise.resolve();
}

function initNav() {
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");

  if (!navToggle || !siteNav) return;

  const closeNav = () => {
    siteNav.classList.remove("is-open");
    navToggle.classList.remove("is-active");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.classList.toggle("is-active", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  document.querySelectorAll(".site-header__end .site-nav__cta").forEach((link) => {
    link.addEventListener("click", closeNav);
  });
}

function initContactForm() {
  const contactForm = document.querySelector("#contact-form");
  if (!contactForm) return;

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = contactForm.querySelector(".form-status");
    if (status) {
      status.textContent =
        "Thank you for reaching out. We will be in touch shortly.";
      status.classList.add("is-visible");
    }
    contactForm.reset();
  });
}

async function init() {
  await loadPageStyles();
  await initLayout();
  initNav();
  initContactForm();
}

init();

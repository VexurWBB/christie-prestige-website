// Shared site interactions — reveal, header condense, page-hero parallax
import { initPremium } from "./premium.js";

const reduceMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function initReveal() {
  const targets = document.querySelectorAll(".reveal, .stagger");
  if (!targets.length) return;

  if (reduceMotion() || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("in"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );

  const sweep = () => {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    targets.forEach((el) => {
      if (el.classList.contains("in")) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < vh && rect.bottom > 0) el.classList.add("in");
      else observer.observe(el);
    });
  };

  sweep();
  window.setTimeout(sweep, 150);
}

export function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  let ticking = false;
  const update = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 32);
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true }
  );
  update();
}

export function initHeroParallax() {
  if (reduceMotion()) return;
  const bg = document.querySelector("[data-hero-bg]");
  const hero = document.querySelector("[data-hero]");
  if (!bg || !hero) return;

  let ticking = false;
  const update = () => {
    const rect = hero.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < window.innerHeight) {
      const shift = Math.min(window.scrollY, hero.offsetHeight) * 0.22;
      bg.style.transform = `translate3d(0, ${shift}px, 0)`;
    }
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true }
  );
  update();
}

export function initProcessRail() {
  const timeline = document.querySelector("[data-process]");
  const fill = document.querySelector("[data-process-fill]");
  if (!timeline || !fill) return;

  const vertical = fill.classList.contains("proc-timeline__fill");

  if (reduceMotion()) {
    if (vertical) fill.style.height = "100%";
    else fill.style.width = "100%";
    return;
  }

  let ticking = false;
  const update = () => {
    const rect = timeline.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const start = vh * 0.85;
    const end = vh * 0.35;
    const progress = (start - rect.top) / (start - end);
    const clamped = Math.max(0, Math.min(1, progress));
    if (vertical) fill.style.height = `${clamped * 100}%`;
    else fill.style.width = `${clamped * 100}%`;
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true }
  );
  window.addEventListener("resize", update, { passive: true });
  update();
}

export function initSite() {
  initPremium();
  initReveal();
  initHeaderScroll();
  initHeroParallax();
  initProcessRail();
}

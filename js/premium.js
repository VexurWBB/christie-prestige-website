// Premium finishing layer — intro preloader, scroll progress, back-to-top.
// Additive and progressively enhanced; everything degrades gracefully and
// honours prefers-reduced-motion.

const reduceMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Branded intro. The overlay markup ships in the HTML (so it paints on the
 * first frame with no flash); here we simply retire it once the page is ready.
 */
function initPreloader() {
  const preloader = document.querySelector("[data-preloader]");
  if (!preloader) return;

  let dismissed = false;
  const dismiss = () => {
    if (dismissed) return;
    dismissed = true;
    preloader.classList.add("is-done");
    document.documentElement.classList.remove("is-preloading");
    const remove = () => preloader.remove();
    preloader.addEventListener("transitionend", remove, { once: true });
    window.setTimeout(remove, 1200);
  };

  document.documentElement.classList.add("is-preloading");

  if (reduceMotion()) {
    window.setTimeout(dismiss, 200);
    return;
  }

  // Hold briefly after load so the intro reads as intentional, not a stall.
  const start = performance.now();
  const MIN_VISIBLE = 900;
  const onReady = () => {
    const elapsed = performance.now() - start;
    window.setTimeout(dismiss, Math.max(0, MIN_VISIBLE - elapsed));
  };

  if (document.readyState === "complete") onReady();
  else window.addEventListener("load", onReady, { once: true });

  // Ultimate failsafe so the site is never blocked.
  window.setTimeout(dismiss, 3200);
}

/** Slim gold reading-progress line pinned to the very top of the viewport. */
function initScrollProgress() {
  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  bar.setAttribute("aria-hidden", "true");
  const fill = document.createElement("span");
  fill.className = "scroll-progress__fill";
  bar.appendChild(fill);
  document.body.appendChild(bar);

  let ticking = false;
  const update = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    fill.style.transform = `scaleX(${progress})`;
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

/** Floating return-to-top control that reveals after the first viewport. */
function initBackToTop() {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "back-to-top";
  btn.setAttribute("aria-label", "Back to top");
  btn.innerHTML =
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 5l-7 7 1.4 1.4L11 8.8V19h2V8.8l4.6 4.6L19 12z" fill="currentColor"/></svg>';
  document.body.appendChild(btn);

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion() ? "auto" : "smooth",
    });
  });

  let ticking = false;
  const update = () => {
    btn.classList.toggle("is-visible", window.scrollY > window.innerHeight * 0.6);
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

export function initPremium() {
  initPreloader();
  initScrollProgress();
  initBackToTop();
}

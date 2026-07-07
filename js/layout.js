async function loadPartial(selector, url) {
  const host = document.querySelector(selector);
  if (!host) return;

  const response = await fetch(url);
  if (!response.ok) return;

  host.innerHTML = await response.text();

  const page = document.body.dataset.page;
  if (page) {
    host.querySelectorAll("[data-nav]").forEach((link) => {
      if (link.dataset.nav === page) {
        link.classList.add("is-active");
      }
    });
  }
}

export async function initLayout() {
  await Promise.all([
    loadPartial("[data-include='header']", "/partials/header.html"),
    loadPartial("[data-include='closing']", "/partials/closing-cta.html"),
    loadPartial("[data-include='footer']", "/partials/footer.html"),
  ]);
}

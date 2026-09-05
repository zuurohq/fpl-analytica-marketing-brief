"use strict";
document.querySelectorAll("button.primary-cta[aria-controls]").forEach((button) => {
  const panel = document.getElementById(button.getAttribute("aria-controls"));
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(expanded));
    panel.hidden = !expanded;
  });
});

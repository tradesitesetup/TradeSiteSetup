document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-product-name");

  document.querySelectorAll(".customize-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      modalTitle.textContent = btn.dataset.product;
      modal.style.display = "flex";
    });
  });

  document.querySelector(".close-modal")?.addEventListener("click", () => {
    modal.style.display = "none";
  });

  document.getElementById("contact-form")?.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thanks! We’ll contact you within 24 hours.");
    e.target.reset();
  });

  document.getElementById("order-form")?.addEventListener("submit", e => {
    e.preventDefault();
    alert("Request received! We'll be in touch shortly.");
    modal.style.display = "none";
    e.target.reset();
  });
});

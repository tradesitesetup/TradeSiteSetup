document.addEventListener('DOMContentLoaded', () => {

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const modal = document.getElementById('modal');
  const modalProductName = document.getElementById('modal-product-name');
  const closeModal = document.querySelector('.close-modal');
  const customizeButtons = document.querySelectorAll('.customize-btn');

  if (modal && modalProductName) {
    customizeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        modalProductName.textContent = btn.dataset.product;
        modal.style.display = 'flex';
        modal.setAttribute('aria-hidden', 'false');
      });
    });

    closeModal?.addEventListener('click', () => {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
    });

    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  const orderForm = document.getElementById('order-form');
  orderForm?.addEventListener('submit', e => {
    e.preventDefault();
    alert('Order request submitted! We’ll contact you shortly.');
    modal.style.display = 'none';
    orderForm.reset();
  });

  const contactForm = document.getElementById('contact-form');
  contactForm?.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thanks! We’ll be in touch.');
    contactForm.reset();
  });

});

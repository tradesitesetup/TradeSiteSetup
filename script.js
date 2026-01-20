document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Modal functionality
  const modal = document.getElementById('modal');
  const modalProductName = document.getElementById('modal-product-name');
  const closeModal = document.querySelector('.close-modal');
  const customizeButtons = document.querySelectorAll('.customize-btn');

  customizeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      modalProductName.textContent = btn.dataset.product;
      modal.style.display = 'flex';
      modal.setAttribute('aria-hidden', 'false');
    });
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
    }
  });

  // Form submissions (simulated – replace with real backend/Formspree/etc. later)
  const orderForm = document.getElementById('order-form');
  orderForm.addEventListener('submit', e => {
    e.preventDefault();
    if (orderForm.checkValidity()) {
      alert('Order request submitted! We’ll review your logo & details and email you a confirmation shortly.');
      modal.style.display = 'none';
      orderForm.reset();
    } else {
      alert('Please fill in all required fields.');
    }
  });

  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    if (contactForm.checkValidity()) {
      alert('Thank you! Your message has been sent. We’ll get back to you soon.');
      contactForm.reset();
    } else {
      alert('Please complete all required fields.');
    }
  });
});

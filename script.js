// Product page gallery: each thumbnail swaps the stage to its own back, front or both image.
(function () {
  const stage = document.getElementById('stage-img');
  if (!stage) return;
  const buttons = document.querySelectorAll('.thumbs button');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      stage.src = btn.dataset.src;
      buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
    });
  });
})();

// Waitlist form. No backend yet: swap the handler for your email provider (Shopify, Mailchimp, Klaviyo, Formspree).
(function () {
  const form = document.getElementById('wl-form');
  const input = document.getElementById('email');
  const msg = document.getElementById('wl-msg');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = input.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      msg.textContent = 'Enter a full email address, like you@example.ie.';
      input.focus();
      return;
    }
    msg.textContent = "Sorted, you're on the guest list. We'll email you before Drop 01 goes live.";
    form.reset();
  });
})();

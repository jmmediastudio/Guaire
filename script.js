// Product page gallery: the thumbnails switch the stage between back, front and both.
(function () {
  const stage = document.getElementById('stage-img');
  if (!stage) return;
  const buttons = document.querySelectorAll('.thumbs button');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      stage.dataset.view = btn.dataset.view;
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

// 02:30: the lights come on when the row scrolls into view.
(function () {
  const row = document.getElementById('lights');
  if (!row) return;
  if (!('IntersectionObserver' in window)) { row.classList.add('on'); return; }
  const io = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) {
      row.classList.add('on');
      io.disconnect();
    }
  }, { threshold: 0.8 });
  io.observe(row);
})();

// 03:55: the lift home pulls in when it scrolls into view.
document.documentElement.classList.add('js');
(function () {
  const lift = document.getElementById('lift');
  if (!lift) return;
  if (!('IntersectionObserver' in window)) { lift.classList.add('in'); return; }
  const io = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) {
      lift.classList.add('in');
      io.disconnect();
    }
  }, { threshold: 0.35 });
  io.observe(lift);
})();

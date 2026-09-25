// Letterboard: split text into individual "plastic letters", each pushed in slightly crooked.
// Seeded so the board looks the same on every load.
(function () {
  let seed = 7;
  const rand = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280) - 0.5;

  document.querySelectorAll('[data-letters]').forEach((el) => {
    const text = el.textContent;
    el.setAttribute('aria-label', text);
    el.textContent = '';
    // Letters are grouped per word so lines only wrap between words.
    text.split(' ').forEach((word, i) => {
      if (i > 0) el.appendChild(document.createTextNode(' '));
      const w = document.createElement('span');
      w.setAttribute('aria-hidden', 'true');
      w.style.whiteSpace = 'nowrap';
      for (const ch of word) {
        const span = document.createElement('span');
        span.className = 'l';
        span.textContent = ch;
        span.style.setProperty('--y', (rand() * 2.4).toFixed(2) + 'px');
        span.style.setProperty('--r', (rand() * 5).toFixed(2) + 'deg');
        w.appendChild(span);
      }
      el.appendChild(w);
    });
  });
})();

// Waitlist form. No backend yet: swap the handler for your email provider (Shopify, Mailchimp, Klaviyo, Formspree).
(function () {
  const form = document.getElementById('wl-form');
  const input = document.getElementById('email');
  const msg = document.getElementById('wl-msg');

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

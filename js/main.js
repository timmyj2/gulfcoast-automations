document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      const action = form.getAttribute('action') || '';
      if (!action.includes('YOUR_FORM_ID')) return;
      e.preventDefault();
      const val = (name) => (form.elements[name] && form.elements[name].value) || '';
      const subject = encodeURIComponent('Game Plan request from ' + val('name'));
      const body = encodeURIComponent(
        [
          'Name: ' + val('name'),
          'Email: ' + val('email'),
          'Phone: ' + val('phone'),
          'Business: ' + val('business'),
          '',
          val('message'),
        ].join('\n')
      );
      window.location.href = 'mailto:tjshed@gmail.com?subject=' + subject + '&body=' + body;
    });
  }

  if (typeof gsap === 'undefined') return;

  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // clearProps drops the inline transform/opacity GSAP leaves behind once the
  // reveal finishes, so the CSS :hover lift (and the featured card's scale)
  // still apply afterward — inline styles would otherwise outrank them.
  document.querySelectorAll('.section-header').forEach((el) => {
    gsap.fromTo(el, { y: 30, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power2.out',
      clearProps: 'transform,opacity',
      scrollTrigger: { trigger: el, start: 'top 85%' },
    });
  });

  document.querySelectorAll('.grid, .pricing-container, .steps').forEach((group) => {
    const items = group.querySelectorAll(':scope > .card, :scope > .pricing-card, :scope > .step');
    if (!items.length) return;
    gsap.fromTo(items, { y: 50, opacity: 0 }, {
      y: 0,
      opacity: 1,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
      clearProps: 'transform,opacity',
      scrollTrigger: { trigger: group, start: 'top 85%' },
    });
  });
});

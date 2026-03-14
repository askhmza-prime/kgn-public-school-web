// HAMBURGER MENU
function toggleMob() {
  document.getElementById('mobNav').classList.toggle('open');
}

// REVEAL ON SCROLL
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ACTIVE NAV LINK
const page = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  if (a.getAttribute('href') === page) a.classList.add('active');
});

// FORM SUBMIT
function submitForm(formId, successMsg) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    btn.textContent = '✅ ' + successMsg;
    btn.style.background = '#2e9e5b';
    btn.disabled = true;
    setTimeout(() => { form.reset(); btn.textContent = 'Submit'; btn.style.background = ''; btn.disabled = false; }, 3000);
  });
}
submitForm('contactForm', 'Message Sent!');
submitForm('enquiryForm', 'Enquiry Submitted!');

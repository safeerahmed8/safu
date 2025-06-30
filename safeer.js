
    // Navbar Responsive Toggle
    const navToggle = document.getElementById('nav-toggle');
    const navList = document.getElementById('nav-list');
    navToggle.onclick = function() {
      navList.classList.toggle('opened');
    };
    window.addEventListener('resize', () => {
      if (window.innerWidth > 700) navList.classList.remove('opened');
    });
    // Matrix Effect
    const canvas = document.getElementById('matrixRain');
    const ctx = canvas.getContext('2d');
    let matrixCols, matrixY, w, h;
    function resizeMatrix() {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w; canvas.height = h;
      matrixCols = Math.floor(w / 18);
      matrixY = Array(matrixCols).fill(0);
    }
    function drawMatrix() {
      ctx.fillStyle = "rgba(26,26,26,0.14)";
      ctx.fillRect(0, 0, w, h);
      ctx.font = "16px 'JetBrains Mono', monospace";
      for (let i = 0; i < matrixCols; i++) {
        const text = String.fromCharCode(0x30A0 + Math.random() * 96);
        ctx.fillStyle = Math.random() > 0.9 ? "#8B00FF" : "#00FF00";
        ctx.fillText(text, i * 18, matrixY[i] * 18);
        if (matrixY[i] * 18 > h && Math.random() > 0.95) matrixY[i] = 0;
        else matrixY[i]++;
      }
    }
    resizeMatrix();
    setInterval(drawMatrix, 38);
    window.addEventListener('resize', resizeMatrix);
    // Hero Typing Effect
    const heroTitle = "Safeer Ahmed";
    const heroH1 = document.querySelector('.hero-title');
    let heroIndex = 0;
    function typeHero() {
      if (heroIndex <= heroTitle.length) {
        heroH1.textContent = heroTitle.slice(0, heroIndex) + (heroIndex % 2 === 0 ? "_" : "");
        heroIndex++;
        setTimeout(typeHero, 120);
      } else {
        heroH1.textContent = heroTitle;
      }
    }
    window.addEventListener('DOMContentLoaded', typeHero);
    // About Typing Effect
    const bioText = "Aspiring network hacker & code alchemist; B.Tech CSE at BGSBU. Experienced in networking, Linux, Python, and more. Passionate about cyberpunk tech, creating secure and innovative solutions.";
    const bioSpan = document.getElementById('bioText');
    let bioIndex = 0;
    function typeBio() {
      if (bioIndex <= bioText.length) {
        bioSpan.textContent = bioText.slice(0, bioIndex) + (bioIndex % 2 === 0 ? "_" : "");
        bioIndex++;
        setTimeout(typeBio, 22);
      } else {
        bioSpan.textContent = bioText;
      }
    }
    window.addEventListener('DOMContentLoaded', typeBio);
    // Quick stats animated counter
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('.matrix-digit').forEach((el) => {
        let current = 0;
        const target = parseInt(el.getAttribute('data-target'), 10);
        const increment = Math.max(1, Math.ceil(target / 40));
        function updateCounter() {
          if (current < target) {
            current += increment;
            el.textContent = current > target ? target : current;
            setTimeout(updateCounter, 48 + Math.random() * 28);
          } else {
            el.textContent = target + "+";
          }
        }
        updateCounter();
      });
    });
    // Skill bar animation
    function animateSkillBars() {
      document.querySelectorAll('.skill-bar-fill').forEach(bar => {
        const fill = bar.getAttribute('data-fill');
        setTimeout(function() {
          bar.style.width = fill + "%";
        }, 300);
      });
    }
    window.addEventListener('DOMContentLoaded', animateSkillBars);
    // Testimonials slider
    let testimonialIdx = 0;
    const testimonials = document.querySelectorAll('.testimonial-card');
    setInterval(() => {
      testimonials[testimonialIdx].classList.remove('active');
      testimonialIdx = (testimonialIdx + 1) % testimonials.length;
      testimonials[testimonialIdx].classList.add('active');
    }, 4100);
    // Contact Form Validation (mailto)
    document.getElementById('contactForm').addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const subject = document.getElementById('contact-subject').value.trim();
      const message = document.getElementById('contact-message').value.trim();
      let error = '';
      if(!name) error += 'Name is required. ';
      if(!email.match(/^[^@]+@[^@]+\.[^@]+$/)) error += 'Valid email required. ';
      if(!subject) error += 'Subject is required. ';
      if(!message) error += 'Message is required. ';
      const status = document.getElementById('contact-status');
      if(error){
        status.textContent = error;
        status.style.color = '#8B00FF';
        return;
      }
      const mailto = `mailto:safeerahmedbhatti152@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent('Name: '+name+'\nEmail: '+email+'\n\n'+message)}`;
      window.location.href = mailto;
      status.textContent = "Opening email client...";
      status.style.color = '#00FF00';
      setTimeout(()=>{status.textContent='';},3500);
      this.reset();
    });
  
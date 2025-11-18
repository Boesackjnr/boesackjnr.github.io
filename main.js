
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          if (entry.target.classList.contains('skills')) {
            document.querySelectorAll('.skill-fill').forEach((bar) => {
              const width = bar.getAttribute('data-width');
              bar.style.width = width;
            });
          }
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('header, .hero, .about, .skills, .projects, footer, .project-card').forEach((el) => {
      observer.observe(el);
    });

    
    const themeSwitch = document.getElementById('themeSwitch');
    const body = document.body;

    try {
      const savedTheme = localStorage.getItem('theme');

      if (savedTheme === 'dark') {
        body.classList.add('dark');
        themeSwitch.checked = true;
      }
    } catch (e) {
      console.warn('localStorage not accessible:', e);
    }

    themeSwitch.addEventListener('change', () => {
      body.classList.toggle('dark');
      try {
        localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
      } catch (e) {
        console.warn('localStorage not accessible:', e);
      }
    });
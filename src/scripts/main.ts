const DESC_ES = 'Portfolio de Cesar Moran -- Desarrollador Full Stack y Arquitecto de Sistemas de IA. Construyo pipelines, agentes y resultados.';
const DESC_EN = 'Cesar Moran portfolio -- Full Stack Developer and AI Systems Architect. I build pipelines, agents, and results.';

export function initSite() {
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  const hasTrueHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const cur = document.getElementById('cursor');
  let lastTrail = 0;

  if (hasTrueHover && cur) {
    document.addEventListener('mousemove', function(e) {
      cur.style.left = e.clientX + 'px';
      cur.style.top = e.clientY + 'px';
      var now = Date.now();
      if (now - lastTrail > 55) {
        lastTrail = now;
        var t = document.createElement('div');
        t.className = 'cursor-trail';
        t.style.left = e.clientX + 'px';
        t.style.top = e.clientY + 'px';
        document.body.appendChild(t);
        setTimeout(function() { t.remove(); }, 450);
      }
    }, { passive: true });

    document.querySelectorAll('a, button, .project-card, .skill-tag, input, textarea').forEach(function(el) {
      el.addEventListener('mouseenter', function() { cur.classList.add('hovered'); });
      el.addEventListener('mouseleave', function() { cur.classList.remove('hovered'); });
    });

    var targets = document.querySelectorAll('.submit-btn, .lang-btn, .nav-link, .footer-link, .link-btn');
    var SZ = 18;
    targets.forEach(function(el) {
      var clone = null;
      el.addEventListener('mouseenter', function() {
        el.classList.add('is-hovered');
        clone = el.cloneNode(true);
        clone.className = el.className;
        clone.classList.remove('is-hovered');
        clone.classList.add('xray-clone');
        clone.removeAttribute('id');
        document.body.appendChild(clone);
        var r = el.getBoundingClientRect();
        clone.style.top = r.top + 'px';
        clone.style.left = r.left + 'px';
        clone.style.width = r.width + 'px';
        clone.style.height = r.height + 'px';
      });
      el.addEventListener('mousemove', function(e) {
        if (!clone) return;
        var r = el.getBoundingClientRect();
        clone.style.top = r.top + 'px';
        clone.style.left = r.left + 'px';
        clone.style.width = r.width + 'px';
        clone.style.height = r.height + 'px';
        var x = e.clientX - r.left;
        var y = e.clientY - r.top;
        var x1 = Math.max(0, x - SZ / 2);
        var y1 = Math.max(0, y - SZ / 2);
        var x2 = Math.min(r.width, x + SZ / 2);
        var y2 = Math.min(r.height, y + SZ / 2);
        clone.style.clipPath = 'polygon(' + x1 + 'px ' + y1 + 'px,' + x2 + 'px ' + y1 + 'px,' + x2 + 'px ' + y2 + 'px,' + x1 + 'px ' + y2 + 'px)';
      });
      el.addEventListener('mouseleave', function() {
        el.classList.remove('is-hovered');
        if (clone) { clone.remove(); clone = null; }
      });
    });
  } else if (cur) {
    cur.style.display = 'none';
  }

  var lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = '<div class="lightbox-content"><button class="lightbox-close" aria-label="Cerrar">X</button><img src="" alt="Vista previa" id="lightbox-img" /></div>';
  document.body.appendChild(lightbox);
  var lightboxImg = lightbox.querySelector('#lightbox-img');
  var lightboxClose = lightbox.querySelector('.lightbox-close');
  function closeLightbox() { lightbox.classList.remove('active'); }
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function(e) { if (e.target === lightbox) closeLightbox(); });
  document.querySelectorAll('.project-img-wrapper').forEach(function(wrapper) {
    wrapper.style.zIndex = '5';
    wrapper.style.cursor = isTouchDevice ? 'pointer' : 'none';
    wrapper.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      var src = '';
      var target = e.target;
      if (target.tagName === 'IMG') { src = target.src; }
      else {
        var firstImg = wrapper.querySelector('img');
        if (firstImg) src = firstImg.src;
      }
      if (src) { lightboxImg.src = src; lightbox.classList.add('active'); }
    });
  });

  var sunburstG = document.getElementById('sunburst-rays');
  if (sunburstG) {
    var W = 1200, H = 900, cx = W / 2, cy = H * 0.88;
    var nRays = 28;
    var r = Math.hypot(W, H) * 1.3;
    var step = (2 * Math.PI) / nRays;
    var html = '';
    for (var i = 0; i < nRays; i++) {
      var a1 = i * step - Math.PI / 2;
      var a2 = a1 + step;
      var x1 = (cx + Math.cos(a1) * r).toFixed(1);
      var y1 = (cy + Math.sin(a1) * r).toFixed(1);
      var x2 = (cx + Math.cos(a2) * r).toFixed(1);
      var y2 = (cy + Math.sin(a2) * r).toFixed(1);
      var fill = i % 2 === 0 ? '#1A0800' : '#0D0600';
      html += '<path d="M' + cx + ',' + cy + ' L' + x1 + ',' + y1 + ' L' + x2 + ',' + y2 + 'Z" fill="' + fill + '"/>';
    }
    sunburstG.innerHTML = html;
  }

  var crowdG = document.getElementById('crowd-figures');
  if (crowdG) {
    var W2 = 1200, H2 = 80, count = 50;
    var sp = W2 / count;
    var html = '';
    for (var i = 0; i < count; i++) {
      var x = (i * sp + sp / 2).toFixed(1);
      var hR = (sp * 0.17).toFixed(1);
      var bW = (sp * 0.27).toFixed(2);
      html += '<circle cx="' + x + '" cy="' + (H2 - +hR * 3.8).toFixed(1) + '" r="' + hR + '"/>';
      html += '<path d="M' + (+x - +bW * 0.55).toFixed(1) + ',' + H2 + ' L' + (+x - +bW * 0.7).toFixed(1) + ',' + (H2 - +hR * 3.2).toFixed(1) + ' L' + (+x + +bW * 0.7).toFixed(1) + ',' + (H2 - +hR * 3.2).toFixed(1) + ' L' + (+x + +bW * 0.55).toFixed(1) + ',' + H2 + 'Z"/>';
    }
    crowdG.innerHTML = html;
  }

  window.addEventListener('load', function() {
    setTimeout(function() {
      var hs = document.querySelector('.hero-stars');
      if (hs) hs.classList.add('hero-in');
      var hn1 = document.querySelector('.hero-name-cesar');
      if (hn1) hn1.classList.add('hero-in');
      var hn2 = document.querySelector('.hero-name-amoran');
      if (hn2) hn2.classList.add('hero-in');
      var hb = document.querySelector('.hero-badge .label-banner');
      if (hb) hb.classList.add('hero-in');
    }, 80);
  });

  var revealObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) { e.target.classList.add('revealed'); revealObs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function(el) { revealObs.observe(el); });

  var sectionFlashObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        var id = e.target.id;
        if (id === 'experience' || id === 'contact') { e.target.classList.add('section-flashed'); }
        if (id === 'contact') {
          var hl = e.target.querySelector('.contact-headline');
          if (hl) {
            setTimeout(function() { hl.classList.add('glitch-play'); }, 200);
            setTimeout(function() { hl.classList.remove('glitch-play'); }, 650);
          }
        }
        sectionFlashObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('section[id]').forEach(function(s) { sectionFlashObs.observe(s); });

  var skillObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.skill-tag').forEach(function(tag, i) {
          setTimeout(function() { tag.classList.add('skill-in'); }, i * 55);
        });
        skillObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  var skillGrid = document.querySelector('.skills-grid');
  if (skillGrid) skillObs.observe(skillGrid);

  function animateCount(el, target, duration) {
    var start = Math.max(0, target - 4);
    var steps = 5;
    var stepMs = Math.floor(duration / steps);
    var current = start;
    function tick() {
      el.textContent = String(current);
      if (current < target) { current++; setTimeout(tick, stepMs); }
    }
    tick();
  }
  var yearObs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        var yearEl = e.target.querySelector('.timeline-year');
        if (yearEl) {
          var target = parseInt(yearEl.textContent || '0', 10);
          animateCount(yearEl, target, 280);
        }
        yearObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.timeline-item').forEach(function(el) { yearObs.observe(el); });

  document.querySelectorAll('.project-card').forEach(function(card) {
    var img = card.querySelector('img');
    if (!img) return;
    card.addEventListener('mousemove', function(ev) {
      var rect = card.getBoundingClientRect();
      var xPct = (ev.clientX - rect.left) / rect.width - 0.5;
      var yPct = (ev.clientY - rect.top) / rect.height - 0.5;
      img.style.transform = 'translate(' + (xPct * -10) + 'px, ' + (yPct * -10) + 'px) scale(1.06)';
    });
    card.addEventListener('mouseleave', function() { img.style.transform = ''; });
  });

  var nav = document.getElementById('nav');
  var heroEl = document.getElementById('hero');
  if (nav && heroEl) {
    var navScrollObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) { nav.classList.toggle('scrolled', !e.isIntersecting); });
    }, { threshold: 0.05 });
    navScrollObs.observe(heroEl);
  }

  var navAs = document.querySelectorAll('.nav-links a[href^="/#"]');
  if (navAs.length) {
    var navObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) {
          navAs.forEach(function(a) { a.classList.remove('active'); });
          var id = e.target.id;
          var act = document.querySelector('.nav-links a[href="/#' + id + '"]');
          if (act) act.classList.add('active');
        }
      });
    }, { threshold: 0.4 });
    document.querySelectorAll('section[id]').forEach(function(s) { navObs.observe(s); });
  }

  var lang = 'es';
  var btnEs = document.getElementById('btn-es');
  var btnEn = document.getElementById('btn-en');

  function setLang(l) {
    lang = l;
    if (btnEs) { btnEs.classList.toggle('active', l === 'es'); btnEs.setAttribute('aria-pressed', String(l === 'es')); }
    if (btnEn) { btnEn.classList.toggle('active', l === 'en'); btnEn.setAttribute('aria-pressed', String(l === 'en')); }
    document.documentElement.lang = l;
    document.querySelectorAll('.lang-text').forEach(function(el) {
      var t = el.getAttribute('data-' + l);
      if (t) el.textContent = t;
    });
    var cmessage = document.getElementById('cmessage');
    var cname = document.getElementById('cname');
    var meta = document.querySelector('meta[name="description"]');
    if (l === 'en') {
      if (cmessage) cmessage.placeholder = 'I HAVE A PROJECT...';
      if (cname) cname.placeholder = 'JOHN DOE';
      if (meta) meta.content = DESC_EN;
    } else {
      if (cmessage) cmessage.placeholder = 'TENGO UN PROYECTO...';
      if (cname) cname.placeholder = 'JUAN PEREZ';
      if (meta) meta.content = DESC_ES;
    }
  }

  if (btnEs) btnEs.addEventListener('click', function() { setLang('es'); });
  if (btnEn) btnEn.addEventListener('click', function() { setLang('en'); });
  window.setLang = setLang;

  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      var btn = this.querySelector('.submit-btn');
      var btnBase = btn.querySelector('.btn-base');
      var feedback = document.getElementById('form-feedback');
      var origText = btnBase ? btnBase.textContent : btn.textContent;

      function setBtnText(text) {
        if (btnBase) btnBase.textContent = text;
        var xrayCloneSpan = document.querySelector('.xray-clone .btn-base');
        if (xrayCloneSpan) xrayCloneSpan.textContent = text;
      }

      var name = document.getElementById('cname').value.trim();
      var email = document.getElementById('cemail').value.trim();
      var message = document.getElementById('cmessage').value.trim();
      if (!name || !email || !message) {
        if (feedback) {
          feedback.style.display = 'block';
          feedback.style.color = '#FF3A00';
          feedback.textContent = lang === 'es' ? 'Completa todos los campos.' : 'Please fill in all fields.';
        }
        return;
      }

      btn.disabled = true;
      setBtnText(lang === 'es' ? 'ENVIANDO...' : 'SENDING...');
      btn.style.background = '#1A0800';
      btn.style.letterSpacing = '0.22em';
      if (feedback) feedback.style.display = 'none';

      try {
        var formData = new FormData(this);
        var res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: formData
        });
        var data = await res.json();

        if (data.success) {
          setBtnText(lang === 'es' ? 'MENSAJE ENVIADO' : 'MESSAGE SENT');
          btn.style.background = '#1A0800';
          btn.style.letterSpacing = '0.18em';
          if (feedback) {
            feedback.style.display = 'block';
            feedback.style.color = '#F5E6C8';
            feedback.textContent = lang === 'es' ? 'Te respondo a la brevedad. Gracias!' : 'I will get back to you shortly. Thanks!';
          }
          this.reset();
          setTimeout(function() {
            setBtnText(origText || '');
            btn.style.background = '';
            btn.style.letterSpacing = '';
            btn.disabled = false;
            if (feedback) feedback.style.display = 'none';
          }, 5000);
        } else {
          throw new Error(data.message || 'Error');
        }
      } catch (err) {
        setBtnText(lang === 'es' ? 'ERROR - REINTENTAR' : 'ERROR - RETRY');
        btn.style.background = '#CC1A1A';
        btn.style.letterSpacing = '0.14em';
        btn.disabled = false;
        if (feedback) {
          feedback.style.display = 'block';
          feedback.style.color = '#FF3A00';
          feedback.textContent = lang === 'es' ? 'No se pudo enviar. Escribeme directo a xcesamoranb@gmail.com' : 'Could not send. Write me at xcesamoranb@gmail.com';
        }
        setTimeout(function() {
          setBtnText(origText || '');
          btn.style.background = '';
          btn.style.letterSpacing = '';
        }, 4000);
      }
    });
  }
}

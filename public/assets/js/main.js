// Painel de acessibilidade
class AccessibilityPanel {
  constructor() {
    this.contrastMode = localStorage.getItem('contrast') === 'high';
    this.fontSize = parseInt(localStorage.getItem('fontSize')) || 100;
    this.init();
  }

  init() {
    this.createPanel();
    this.applySettings();
    this.attachEventListeners();
  }

  createPanel() {
    const panel = document.createElement('div');
    panel.id = 'accessibility-panel';
    panel.className = 'fixed top-4 right-4 bg-white rounded-card shadow-card p-4 z-50 hidden';
    panel.innerHTML = `
      <h3 class="font-outfit font-semibold text-lg mb-3">Acessibilidade</h3>
      <div class="space-y-3">
        <div>
          <label class="block text-sm mb-2">Tamanho da fonte</label>
          <div class="flex gap-2">
            <button id="decrease-font" class="px-3 py-2 bg-paper rounded hover:bg-lavender-light" aria-label="Diminuir fonte">A-</button>
            <span id="font-size-display" class="px-3 py-2 min-w-16 text-center">${this.fontSize}%</span>
            <button id="increase-font" class="px-3 py-2 bg-paper rounded hover:bg-lavender-light" aria-label="Aumentar fonte">A+</button>
          </div>
        </div>
        <div>
          <label class="flex items-center cursor-pointer">
            <input type="checkbox" id="toggle-contrast" ${this.contrastMode ? 'checked' : ''} class="mr-2">
            <span class="text-sm">Alto contraste</span>
          </label>
        </div>
      </div>
    `;
    document.body.appendChild(panel);
  }

  attachEventListeners() {
    const toggleBtn = document.getElementById('toggle-accessibility');
    const panel = document.getElementById('accessibility-panel');
    
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        panel.classList.toggle('hidden');
      });
    }

    document.getElementById('increase-font').addEventListener('click', () => {
      this.fontSize = Math.min(this.fontSize + 10, 150);
      this.applySettings();
    });

    document.getElementById('decrease-font').addEventListener('click', () => {
      this.fontSize = Math.max(this.fontSize - 10, 80);
      this.applySettings();
    });

    document.getElementById('toggle-contrast').addEventListener('change', (e) => {
      this.contrastMode = e.target.checked;
      this.applySettings();
    });

    document.addEventListener('click', (e) => {
      if (!panel.contains(e.target) && e.target.id !== 'toggle-accessibility') {
        panel.classList.add('hidden');
      }
    });
  }

  applySettings() {
    document.documentElement.style.fontSize = `${this.fontSize}%`;
    document.getElementById('font-size-display').textContent = `${this.fontSize}%`;
    
    if (this.contrastMode) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }

    localStorage.setItem('fontSize', this.fontSize);
    localStorage.setItem('contrast', this.contrastMode ? 'high' : 'normal');
  }
}

// Menu mobile
class MobileMenu {
  constructor() {
    this.menuBtn = document.getElementById('mobile-menu-btn');
    this.menu = document.getElementById('mobile-menu');
    this.init();
  }

  init() {
    if (!this.menuBtn || !this.menu) return;

    this.menuBtn.addEventListener('click', () => {
      const isOpen = this.menu.classList.toggle('hidden');
      this.menuBtn.setAttribute('aria-expanded', !isOpen);
      
      if (!isOpen) {
        this.menu.focus();
      }
    });

    this.menu.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.menu.classList.add('hidden');
        this.menuBtn.setAttribute('aria-expanded', 'false');
        this.menuBtn.focus();
      }
    });
  }
}

// Copiar chave PIX
function setupPixCopy() {
  const copyButtons = document.querySelectorAll('[data-copy-pix]');
  
  copyButtons.forEach(button => {
    button.addEventListener('click', async () => {
      const pixKey = button.getAttribute('data-copy-pix');
      
      try {
        await navigator.clipboard.writeText(pixKey);
        
        const originalText = button.innerHTML;
        button.innerHTML = '✓ Copiado!';
        
        const feedback = document.getElementById('pix-feedback');
        if (feedback) {
          feedback.textContent = 'Chave PIX copiada para a área de transferência';
          setTimeout(() => {
            feedback.textContent = '';
          }, 3000);
        }
        
        setTimeout(() => {
          button.innerHTML = originalText;
        }, 2000);
      } catch (err) {
        alert('Não foi possível copiar. Por favor, copie manualmente: ' + pixKey);
      }
    });
  });
}

// Contadores animados
function setupCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
  };

  const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-counter'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        element.textContent = Math.floor(current).toLocaleString('pt-BR');
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = target.toLocaleString('pt-BR');
      }
    };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      element.textContent = target.toLocaleString('pt-BR');
    } else {
      updateCounter();
    }
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        entry.target.classList.add('counted');
        animateCounter(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach(counter => observer.observe(counter));
}

// Filtros de notícias/eventos
function setupFilters() {
  const filterButtons = document.querySelectorAll('[data-filter]');
  const items = document.querySelectorAll('[data-category]');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      
      filterButtons.forEach(btn => {
        btn.classList.remove('bg-teal', 'text-white');
        btn.classList.add('bg-paper');
        btn.setAttribute('aria-pressed', 'false');
      });
      
      button.classList.remove('bg-paper');
      button.classList.add('bg-teal', 'text-white');
      button.setAttribute('aria-pressed', 'true');

      items.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
}

// Validação de formulários
function setupFormValidation() {
  const forms = document.querySelectorAll('form[data-validate]');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      let isValid = true;
      const requiredFields = form.querySelectorAll('[required]');
      
      requiredFields.forEach(field => {
        const errorEl = document.getElementById(`${field.id}-error`);
        
        if (!field.value.trim()) {
          isValid = false;
          field.setAttribute('aria-invalid', 'true');
          if (errorEl) {
            errorEl.textContent = 'Este campo é obrigatório';
            errorEl.classList.remove('hidden');
          }
        } else {
          field.setAttribute('aria-invalid', 'false');
          if (errorEl) {
            errorEl.textContent = '';
            errorEl.classList.add('hidden');
          }
        }
      });

      if (isValid) {
        const successMessage = form.querySelector('[data-success]');
        if (successMessage) {
          successMessage.classList.remove('hidden');
          form.reset();
          
          setTimeout(() => {
            successMessage.classList.add('hidden');
          }, 5000);
        }
      }
    });
  });
}

// Newsletter
function setupNewsletter() {
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  
  newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const emailInput = form.querySelector('input[type="email"]');
      const feedback = form.querySelector('[data-newsletter-feedback]');
      
      if (emailInput.value && feedback) {
        feedback.textContent = 'Obrigado! Você receberá nossas novidades em breve.';
        feedback.className = 'mt-2 text-sm text-teal';
        feedback.setAttribute('role', 'status');
        emailInput.value = '';
        
        setTimeout(() => {
          feedback.textContent = '';
        }, 5000);
      }
    });
  });
}

// VLibras
function loadVLibras() {
  const script = document.createElement('script');
  script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
  script.async = true;
  document.head.appendChild(script);
  
  script.onload = () => {
    new window.VLibras.Widget('https://vlibras.gov.br/app');
  };
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  new AccessibilityPanel();
  new MobileMenu();
  setupPixCopy();
  setupCounters();
  setupFilters();
  setupFormValidation();
  setupNewsletter();
  loadVLibras();
  // Ano atual no rodapé
  document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
});

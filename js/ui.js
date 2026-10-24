/**
 * Safe LocalStorage abstraction with in-memory fallback
 * Ensures 100% crash-free operation over file:/// protocol and restricted browser environments
 */
const SafeStorage = {
  memoryStore: {},
  getItem(key) {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const val = window.localStorage.getItem(key);
        if (val !== null) return val;
      }
    } catch (e) {
      // Access denied or sandboxed
    }
    return this.memoryStore[key] || null;
  },
  setItem(key, value) {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(key, value);
        return;
      }
    } catch (e) {
      // Access denied or sandboxed
    }
    this.memoryStore[key] = String(value);
  },
  removeItem(key) {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem(key);
        return;
      }
    } catch (e) {
      // Access denied
    }
    delete this.memoryStore[key];
  }
};

const LearnSphereUI = {
  // Theme State: 'light' | 'dark' | 'sepia'
  currentTheme: SafeStorage.getItem('learnsphere_theme') || 'light',
  
  // Font Size: 'normal' | 'large' | 'xl'
  currentFontSize: SafeStorage.getItem('learnsphere_fontsize') || 'normal',

  // Device Preview Mode: 'full' | 'mobile' | 'tablet'
  currentDeviceMode: 'full',

  init() {
    this.applyTheme(this.currentTheme);
    this.initScrollListener();
    this.initKeyboardShortcuts();
    this.initBackToTop();
  },

  /**
   * Theme switcher: light, dark, sepia
   */
  setTheme(theme) {
    this.currentTheme = theme;
    SafeStorage.setItem('learnsphere_theme', theme);
    this.applyTheme(theme);
    this.showToast(`Switched to ${theme.charAt(0).toUpperCase() + theme.slice(1)} reading mode`, 'info');
  },

  applyTheme(theme) {
    const html = document.documentElement;
    html.classList.remove('dark', 'sepia');
    if (theme === 'dark') {
      html.classList.add('dark');
    } else if (theme === 'sepia') {
      html.classList.add('sepia');
    }

    // Update active state in theme toggles
    document.querySelectorAll('[data-theme-btn]').forEach(btn => {
      const bTheme = btn.getAttribute('data-theme-btn');
      if (bTheme === theme) {
        btn.classList.add('ring-2', 'ring-blue-500', 'font-bold');
      } else {
        btn.classList.remove('ring-2', 'ring-blue-500', 'font-bold');
      }
    });
  },

  toggleDarkLight() {
    const nextTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.setTheme(nextTheme);
  },

  /**
   * Device Preview Mode (Desktop / iPhone / iPad Frame)
   */
  setDeviceMode(mode) {
    this.currentDeviceMode = mode;
    const container = document.getElementById('app-viewport-wrapper');
    const badge = document.getElementById('device-mode-label');
    if (!container) return;

    container.classList.remove('simulator-mobile', 'simulator-tablet');

    if (mode === 'mobile') {
      container.classList.add('simulator-mobile');
      if (badge) badge.textContent = 'Mobile Preview (iPhone)';
      this.showToast('Switched to Mobile Screen Preview', 'info');
    } else if (mode === 'tablet') {
      container.classList.add('simulator-tablet');
      if (badge) badge.textContent = 'Tablet Preview (iPad)';
      this.showToast('Switched to Tablet Screen Preview', 'info');
    } else {
      if (badge) badge.textContent = 'Full Screen View';
      this.showToast('Switched to Responsive Full Screen', 'info');
    }

    // Update active button indicators
    document.querySelectorAll('[data-device-mode]').forEach(btn => {
      if (btn.getAttribute('data-device-mode') === mode) {
        btn.classList.add('bg-blue-600', 'text-white');
        btn.classList.remove('text-slate-600', 'dark:text-slate-300');
      } else {
        btn.classList.remove('bg-blue-600', 'text-white');
        btn.classList.add('text-slate-600', 'dark:text-slate-300');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  /**
   * Toast notification generator
   */
  showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast px-4 py-3 rounded-xl shadow-lg border flex items-center gap-3 text-sm font-medium transition-all ${
      type === 'success' 
        ? 'bg-emerald-900/90 text-emerald-100 border-emerald-700 backdrop-blur-md'
        : type === 'info'
        ? 'bg-blue-900/90 text-blue-100 border-blue-700 backdrop-blur-md'
        : 'bg-slate-900/95 text-white border-slate-700 backdrop-blur-md'
    }`;

    let icon = `
      <svg class="w-5 h-5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
      </svg>
    `;
    if (type === 'info') {
      icon = `
        <svg class="w-5 h-5 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      `;
    }

    toast.innerHTML = `
      ${icon}
      <span>${message}</span>
      <button class="ml-2 text-slate-400 hover:text-white" onclick="this.parentElement.remove()">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  },

  /**
   * Bookmarking / Reading List Management
   */
  getBookmarks() {
    try {
      return JSON.parse(SafeStorage.getItem('learnsphere_bookmarks')) || [];
    } catch {
      return [];
    }
  },

  isBookmarked(articleId) {
    const bookmarks = this.getBookmarks();
    return bookmarks.includes(articleId);
  },

  toggleBookmark(articleId) {
    let bookmarks = this.getBookmarks();
    const article = LearnSphereData.articles.find(a => a.id === articleId);
    const title = article ? article.title : 'Article';

    if (bookmarks.includes(articleId)) {
      bookmarks = bookmarks.filter(id => id !== articleId);
      SafeStorage.setItem('learnsphere_bookmarks', JSON.stringify(bookmarks));
      this.showToast(`Removed from your reading list`, 'info');
    } else {
      bookmarks.push(articleId);
      SafeStorage.setItem('learnsphere_bookmarks', JSON.stringify(bookmarks));
      this.showToast(`Saved to your reading list`, 'success');
    }

    // Update all bookmark icon buttons on screen
    document.querySelectorAll(`[data-bookmark-id="${articleId}"]`).forEach(btn => {
      const active = bookmarks.includes(articleId);
      btn.setAttribute('aria-pressed', active);
      const svg = btn.querySelector('svg');
      if (svg) {
        if (active) {
          svg.setAttribute('fill', 'currentColor');
          btn.classList.add('text-amber-500');
        } else {
          svg.setAttribute('fill', 'none');
          btn.classList.remove('text-amber-500');
        }
      }
    });

    // Update bookmark count badges
    this.updateBookmarkBadge();
  },

  updateBookmarkBadge() {
    const count = this.getBookmarks().length;
    document.querySelectorAll('.bookmark-count-badge').forEach(badge => {
      badge.textContent = count;
      if (count > 0) {
        badge.classList.remove('hidden');
      } else {
        badge.classList.add('hidden');
      }
    });
  },

  /**
   * Reading Progress Bar and Table of Contents Scrollspy
   */
  initScrollListener() {
    window.addEventListener('scroll', () => {
      // 1. Reading progress bar
      const bar = document.getElementById('reading-progress-bar');
      if (bar) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
      }

      // 2. Back to top button visibility
      const backBtn = document.getElementById('back-to-top-btn');
      if (backBtn) {
        if (window.scrollY > 400) {
          backBtn.classList.remove('opacity-0', 'pointer-events-none');
          backBtn.classList.add('opacity-100');
        } else {
          backBtn.classList.add('opacity-0', 'pointer-events-none');
          backBtn.classList.remove('opacity-100');
        }
      }

      // 3. TOC Active Section Tracking
      const sections = document.querySelectorAll('article section[id]');
      if (sections.length > 0) {
        let currentSectionId = '';
        sections.forEach(section => {
          const top = section.getBoundingClientRect().top;
          if (top <= 140) {
            currentSectionId = section.getAttribute('id');
          }
        });

        if (currentSectionId) {
          document.querySelectorAll('.toc-link').forEach(link => {
            if (link.getAttribute('href') === `#${currentSectionId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      }
    }, { passive: true });
  },

  initBackToTop() {
    const backBtn = document.getElementById('back-to-top-btn');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  },

  initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Ctrl+K or Cmd+K: Open Quick Search Modal
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        this.openSearchModal();
      }
      // Esc: Close Modals or Mobile Menu
      if (e.key === 'Escape') {
        this.closeSearchModal();
        this.closeMobileMenu();
      }
    });
  },

  openSearchModal() {
    const modal = document.getElementById('search-modal');
    const input = document.getElementById('modal-search-input');
    if (modal) {
      modal.classList.remove('hidden');
      if (input) {
        input.focus();
        input.select();
      }
    }
  },

  closeSearchModal() {
    const modal = document.getElementById('search-modal');
    if (modal) {
      modal.classList.add('hidden');
    }
  },

  toggleMobileMenu() {
    const menu = document.getElementById('mobile-drawer');
    const backdrop = document.getElementById('mobile-drawer-backdrop');
    if (!menu) return;

    const isOpen = !menu.classList.contains('translate-x-full');
    if (isOpen) {
      this.closeMobileMenu();
    } else {
      menu.classList.remove('translate-x-full');
      if (backdrop) backdrop.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }
  },

  closeMobileMenu() {
    const menu = document.getElementById('mobile-drawer');
    const backdrop = document.getElementById('mobile-drawer-backdrop');
    if (menu) menu.classList.add('translate-x-full');
    if (backdrop) backdrop.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  },

  /**
   * Font Size Adjuster for Reader
   */
  setFontSize(size) {
    this.currentFontSize = size;
    SafeStorage.setItem('learnsphere_fontsize', size);
    const content = document.querySelector('.article-prose');
    if (!content) return;

    content.classList.remove('text-base', 'text-lg', 'text-xl');
    if (size === 'small') {
      content.classList.add('text-base');
    } else if (size === 'large') {
      content.classList.add('text-xl');
    } else {
      content.classList.add('text-lg');
    }
  }
};

if (typeof window !== 'undefined') {
  window.LearnSphereUI = LearnSphereUI;
}

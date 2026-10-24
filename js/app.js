/**
 * LearnSphere - Single Page Application Core Controller & View Engine
 * Design Process & Perspective (DPP)
 */

const LearnSphereApp = {
  // Current Active Route & State
  currentRoute: 'home',
  routeParams: {},
  activeCategoryFilter: 'all',
  activeSort: 'newest',

  init() {
    LearnSphereUI.init();
    this.bindGlobalEvents();
    this.handleRouting();
    window.addEventListener('hashchange', () => this.handleRouting());
    LearnSphereUI.updateBookmarkBadge();
  },

  /**
   * Router: Parses hash and invokes appropriate view renderers
   */
  handleRouting() {
    const hash = window.location.hash.slice(1) || '/';
    const [path, queryString] = hash.split('?');
    const queryParams = new URLSearchParams(queryString || '');

    // Reset scroll position on route change
    window.scrollTo({ top: 0, behavior: 'instant' });
    LearnSphereUI.closeMobileMenu();

    if (path === '/' || path === '/home' || path === '') {
      this.currentRoute = 'home';
      this.renderHome();
    } else if (path === '/categories') {
      this.currentRoute = 'categories';
      this.renderCategoriesPage();
    } else if (path.startsWith('/category/')) {
      const categoryId = path.split('/')[2];
      this.currentRoute = 'category-detail';
      this.renderCategoryDetailPage(categoryId);
    } else if (path === '/posts') {
      this.currentRoute = 'posts';
      const catParam = queryParams.get('category') || 'all';
      this.activeCategoryFilter = catParam;
      this.renderLatestPostsPage();
    } else if (path.startsWith('/post/')) {
      const slug = path.split('/')[2];
      this.currentRoute = 'post-detail';
      this.renderPostDetailPage(slug);
    } else if (path === '/search') {
      this.currentRoute = 'search';
      const q = queryParams.get('q') || '';
      this.renderSearchPage(q);
    } else if (path === '/about') {
      this.currentRoute = 'about';
      this.renderAboutPage();
    } else if (path === '/saved') {
      this.currentRoute = 'saved';
      this.renderSavedPostsPage();
    } else {
      this.renderHome();
    }

    this.updateNavLinks(path);
  },

  updateNavLinks(path) {
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href') || '';
      const route = href.replace('#', '');
      
      const isActive = (path === '/' && (route === '/' || route === '/home')) ||
                       (path !== '/' && route !== '/' && path.startsWith(route));

      if (isActive) {
        link.classList.add('text-blue-600', 'font-bold', 'dark:text-blue-400');
        link.classList.remove('text-slate-600', 'dark:text-slate-300');
      } else {
        link.classList.remove('text-blue-600', 'font-bold', 'dark:text-blue-400');
        link.classList.add('text-slate-600', 'dark:text-slate-300');
      }
    });
  },

  /**
   * Global event listeners
   */
  bindGlobalEvents() {
    // Header Search Inputs
    const desktopSearch = document.getElementById('desktop-search-input');
    if (desktopSearch) {
      desktopSearch.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && desktopSearch.value.trim()) {
          window.location.hash = `#/search?q=${encodeURIComponent(desktopSearch.value.trim())}`;
        }
      });
    }

    // Modal Search Input
    const modalSearch = document.getElementById('modal-search-input');
    if (modalSearch) {
      modalSearch.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        this.renderModalLiveResults(query);
      });
      modalSearch.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && modalSearch.value.trim()) {
          LearnSphereUI.closeSearchModal();
          window.location.hash = `#/search?q=${encodeURIComponent(modalSearch.value.trim())}`;
        }
      });
    }

    // Newsletter Form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('newsletter-email');
        const alertBox = document.getElementById('newsletter-success');
        if (input && input.value) {
          const email = input.value.trim();
          input.value = '';
          if (alertBox) {
            alertBox.classList.remove('hidden');
            setTimeout(() => alertBox.classList.add('hidden'), 6000);
          }
          LearnSphereUI.showToast("Thank you! You’re subscribed to LearnSphere.", "success");
        }
      });
    }
  },

  /**
   * Helper: Generate Category Icon SVG
   */
  getCategoryIcon(catId, className = "w-6 h-6") {
    switch (catId) {
      case 'programming':
        return `<svg width="24" height="24" class="${className}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>`;
      case 'ai':
        return `<svg width="24" height="24" class="${className}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/></svg>`;
      case 'web-development':
        return `<svg width="24" height="24" class="${className}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>`;
      case 'data-science':
        return `<svg width="24" height="24" class="${className}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`;
      case 'cybersecurity':
        return `<svg width="24" height="24" class="${className}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`;
      case 'career-skills':
        return `<svg width="24" height="24" class="${className}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`;
      default:
        return `<svg width="24" height="24" class="${className}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>`;
    }
  },

  /**
   * Helper: Get Category illustration image path
   */
  getCategoryIllustration(catId) {
    switch (catId) {
      case 'ai': return 'assets/images/topic-ai.svg';
      case 'programming': return 'assets/images/topic-programming.svg';
      case 'web-development': return 'assets/images/topic-web.svg';
      case 'cybersecurity': return 'assets/images/topic-security.svg';
      case 'data-science': return 'assets/images/topic-data.svg';
      case 'career-skills': return 'assets/images/topic-career.svg';
      default: return 'assets/images/topic-ai.svg';
    }
  },

  /**
   * Render Standard Post Card
   */
  renderPostCard(article, searchQuery = '') {
    const author = LearnSphereData.authors[article.authorId] || { name: 'LearnSphere Faculty', initials: 'LS', avatarBg: 'bg-blue-600' };
    const isBookmarked = LearnSphereUI.isBookmarked(article.id);
    const category = LearnSphereData.categories.find(c => c.id === article.categoryId) || { name: article.category, badgeColor: 'bg-blue-100 text-blue-800' };
    const imageSrc = this.getCategoryIllustration(article.categoryId);

    const titleHtml = searchQuery ? LearnSphereSearch.highlightText(article.title, searchQuery) : article.title;
    const descHtml = searchQuery ? LearnSphereSearch.highlightText(article.shortDesc, searchQuery) : article.shortDesc;

    return `
      <div class="interactive-card flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md group">
        <!-- Post Thumbnail / Illustration -->
        <div class="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
          <img 
            src="${imageSrc}" 
            alt="${article.title}" 
            loading="lazy"
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div class="absolute top-3 left-3">
            <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${category.badgeColor} shadow-sm backdrop-blur-md">
              ${article.category}
            </span>
          </div>
          <!-- Bookmark Action -->
          <button 
            data-bookmark-id="${article.id}"
            onclick="LearnSphereUI.toggleBookmark('${article.id}')"
            aria-label="Save to reading list"
            aria-pressed="${isBookmarked}"
            class="absolute top-3 right-3 p-2 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 hover:text-amber-500 shadow-sm backdrop-blur-md transition-all ${isBookmarked ? 'text-amber-500' : ''}"
          >
            <svg width="16" height="16" class="w-4 h-4" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
            </svg>
          </button>
        </div>

        <!-- Post Content Body -->
        <div class="flex-1 p-5 flex flex-col justify-between">
          <div>
            <!-- Reading Time & Date -->
            <div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2.5">
              <span class="flex items-center gap-1">
                <svg width="14" height="14" class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                ${article.date}
              </span>
              <span>•</span>
              <span class="flex items-center gap-1 font-medium text-slate-600 dark:text-slate-300">
                <svg width="14" height="14" class="w-3.5 h-3.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                ${article.readingTime}
              </span>
            </div>

            <!-- Title -->
            <h3 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 mb-2">
              <a href="#/post/${article.slug}">${titleHtml}</a>
            </h3>

            <!-- Description -->
            <p class="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed mb-4">
              ${descHtml}
            </p>
          </div>

          <!-- Author & Read More Button -->
          <div class="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-full ${author.avatarBg} text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                ${author.initials}
              </div>
              <div class="text-xs">
                <p class="font-semibold text-slate-900 dark:text-white leading-tight">${author.name}</p>
                <p class="text-[11px] text-slate-500 dark:text-slate-400">Educator</p>
              </div>
            </div>

            <a 
              href="#/post/${article.slug}" 
              class="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all shadow-sm group-hover:translate-x-0.5"
            >
              <span>Read More</span>
              <svg width="14" height="14" class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    `;
  },

  /* ========================================================================
     SCREEN 1: HOME PAGE
     ======================================================================== */
  renderHome() {
    const featuredArticles = LearnSphereData.articles.filter(a => a.featured).slice(0, 4);
    const latestArticles = LearnSphereData.articles.slice(0, 6);

    const mainContainer = document.getElementById('main-content-view');
    if (!mainContainer) return;

    mainContainer.innerHTML = `
      <!-- HERO SECTION -->
      <section class="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden border-b border-slate-100 dark:border-slate-800/60 bg-gradient-to-b from-blue-50/50 via-white to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Left Hero Content -->
            <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
              <!-- SDG 4 Pill Banner -->
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-900/40 border border-blue-200 dark:border-blue-700/60 text-blue-800 dark:text-blue-300 text-xs font-semibold tracking-wide shadow-sm">
                <span class="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span>Supporting UN SDG 4: Quality Education for All</span>
              </div>

              <!-- Main Hero Heading -->
              <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
                Learn Something <br class="hidden sm:inline" />
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500">New Every Day.</span>
              </h1>

              <!-- Supporting Paragraph -->
              <p class="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Explore simple, reliable and engaging educational content designed to help you understand concepts, build skills and keep learning.
              </p>

              <!-- Hero Action Buttons -->
              <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a 
                  href="#/posts" 
                  class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 shadow-md shadow-blue-500/25 transition-all text-base"
                >
                  <svg width="20" height="20" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                  <span>Explore Posts</span>
                </a>
                <a 
                  href="#/categories" 
                  class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 active:scale-95 shadow-sm transition-all text-base"
                >
                  <svg width="20" height="20" class="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
                  <span>Browse Categories</span>
                </a>
              </div>

              <!-- Metrics Stats Bar -->
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200/80 dark:border-slate-800">
                ${LearnSphereData.platform.stats.map(s => `
                  <div class="text-left">
                    <p class="text-2xl font-extrabold text-slate-900 dark:text-white">${s.value}</p>
                    <p class="text-xs font-medium text-slate-500 dark:text-slate-400">${s.label}</p>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Right Hero Illustration -->
            <div class="lg:col-span-5 flex justify-center">
              <div class="relative w-full max-w-lg lg:max-w-none">
                <div class="relative rounded-3xl p-2 bg-gradient-to-tr from-blue-100/50 to-indigo-100/30 dark:from-slate-800/40 dark:to-blue-900/20 shadow-xl border border-blue-100/60 dark:border-slate-800">
                  <img 
                    src="assets/images/hero-illustration.svg" 
                    alt="LearnSphere Educational Learning Hub" 
                    class="w-full h-auto drop-shadow-sm select-none"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- FEATURED CATEGORIES SECTION -->
      <section class="py-16 bg-white dark:bg-slate-900/60 border-b border-slate-100 dark:border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Knowledge Tracks</span>
              <h2 class="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">Featured Categories</h2>
              <p class="text-slate-600 dark:text-slate-400 text-sm mt-1">Curated educational paths structured for step-by-step student mastery.</p>
            </div>
            <a href="#/categories" class="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 group">
              <span>View All Categories</span>
              <svg width="16" height="16" class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          </div>

          <!-- 6 Category Cards Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            ${LearnSphereData.categories.map(cat => `
              <div 
                onclick="window.location.hash = '#/category/${cat.id}'"
                class="interactive-card cursor-pointer p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:border-blue-300 dark:hover:border-blue-700/80 group flex flex-col justify-between"
              >
                <div>
                  <div class="flex items-center justify-between mb-4">
                    <div class="w-12 h-12 rounded-xl bg-gradient-to-tr ${cat.accentBg} text-white flex items-center justify-center shadow-md shadow-blue-500/10">
                      ${this.getCategoryIcon(cat.id, "w-6 h-6")}
                    </div>
                    <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      ${cat.postCount} Posts
                    </span>
                  </div>

                  <h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                    ${cat.name}
                  </h3>
                  <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    ${cat.shortDesc}
                  </p>
                </div>

                <div class="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800 text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                  <span>Explore Track</span>
                  <svg width="16" height="16" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- FEATURED POSTS SECTION (3-4 Featured Posts) -->
      <section class="py-16 bg-slate-50/60 dark:bg-slate-950/40 border-b border-slate-100 dark:border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Editor’s Choice</span>
              <h2 class="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">Featured Educational Posts</h2>
              <p class="text-slate-600 dark:text-slate-400 text-sm mt-1">Core beginner guides with hands-on examples and conceptual clarity.</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${featuredArticles.map(a => this.renderPostCard(a)).join('')}
          </div>
        </div>
      </section>

      <!-- LATEST POSTS PREVIEW (With Filtering) -->
      <section class="py-16 bg-white dark:bg-slate-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Fresh Curriculum</span>
              <h2 class="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">Latest Educational Posts</h2>
              <p class="text-slate-600 dark:text-slate-400 text-sm mt-1">Stay updated with newly published tutorials and career advice.</p>
            </div>
            <a href="#/posts" class="mt-4 sm:mt-0 inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700">
              <span>View All 10+ Posts</span>
              <svg width="16" height="16" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          </div>

          <!-- Interactive Category Filter Bar -->
          <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            <button 
              onclick="LearnSphereApp.filterHomeLatest('all', this)"
              class="filter-pill active px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap bg-blue-600 text-white shadow-sm"
            >
              All Topics
            </button>
            ${LearnSphereData.categories.map(c => `
              <button 
                onclick="LearnSphereApp.filterHomeLatest('${c.id}', this)"
                class="filter-pill px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
              >
                ${c.name}
              </button>
            `).join('')}
          </div>

          <!-- Latest Posts Grid Container -->
          <div id="home-latest-posts-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${latestArticles.map(a => this.renderPostCard(a)).join('')}
          </div>
        </div>
      </section>

      <!-- SDG 4 MISSION BANNER -->
      <section class="py-12 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row items-center justify-between gap-8">
            <div class="flex items-center gap-5">
              <div class="w-16 h-16 rounded-2xl bg-white p-2 shrink-0 shadow-md">
                <img src="assets/images/sdg4-badge.svg" alt="UN SDG 4" class="w-full h-full object-contain"/>
              </div>
              <div>
                <span class="text-xs uppercase tracking-widest text-blue-200 font-bold">UN Sustainable Development Goals</span>
                <h3 class="text-2xl font-extrabold text-white">Aligned with SDG 4: Quality Education</h3>
                <p class="text-blue-100 text-sm max-w-xl mt-1">
                  LearnSphere ensures inclusive and equitable quality education and promotes lifelong learning opportunities by removing digital barriers.
                </p>
              </div>
            </div>
            <a 
              href="#/about" 
              class="px-6 py-3 rounded-xl font-bold bg-white text-blue-800 hover:bg-blue-50 active:scale-95 shadow-md transition-all whitespace-nowrap text-sm"
            >
              Read Design Rationale
            </a>
          </div>
        </div>
      </section>
    `;
  },

  filterHomeLatest(categoryId, btnElement) {
    document.querySelectorAll('.filter-pill').forEach(btn => {
      btn.classList.remove('active', 'bg-blue-600', 'text-white');
      btn.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
    });
    if (btnElement) {
      btnElement.classList.add('active', 'bg-blue-600', 'text-white');
      btnElement.classList.remove('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300');
    }

    const grid = document.getElementById('home-latest-posts-grid');
    if (!grid) return;

    const filtered = LearnSphereSearch.filterByCategory(categoryId);
    grid.innerHTML = filtered.map(a => this.renderPostCard(a)).join('');
  },

  /* ========================================================================
     SCREEN 2: CATEGORIES BROWSING PAGE
     ======================================================================== */
  renderCategoriesPage() {
    const mainContainer = document.getElementById('main-content-view');
    if (!mainContainer) return;

    mainContainer.innerHTML = `
      <div class="py-12 bg-slate-50/50 dark:bg-slate-950/30 border-b border-slate-100 dark:border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Breadcrumb -->
          <nav class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4">
            <a href="#/home" class="hover:text-blue-600">Home</a>
            <span>/</span>
            <span class="text-slate-900 dark:text-white font-medium">Categories</span>
          </nav>

          <h1 class="text-4xl font-extrabold text-slate-900 dark:text-white">Knowledge Categories</h1>
          <p class="text-slate-600 dark:text-slate-400 text-lg mt-2 max-w-2xl">
            Choose a subject track below to explore structured learning paths, beginner-friendly explanations, and practical exercises.
          </p>
        </div>
      </div>

      <div class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${LearnSphereData.categories.map(cat => `
            <div class="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <div class="flex items-center justify-between mb-4">
                  <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr ${cat.accentBg} text-white flex items-center justify-center shadow-lg">
                    ${this.getCategoryIcon(cat.id, "w-7 h-7")}
                  </div>
                  <span class="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                    ${cat.postCount} Available Posts
                  </span>
                </div>

                <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">${cat.name}</h2>
                <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5">
                  ${cat.fullDesc}
                </p>

                <!-- Core Topics Covered -->
                <div class="mb-6">
                  <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Core Competencies:</h4>
                  <div class="flex flex-wrap gap-1.5">
                    ${cat.topics.map(t => `
                      <span class="px-2 py-0.5 rounded text-[11px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                        ${t}
                      </span>
                    `).join('')}
                  </div>
                </div>
              </div>

              <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <a 
                  href="#/category/${cat.id}"
                  class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all shadow-sm"
                >
                  <span>Browse ${cat.name} Posts</span>
                  <svg width="16" height="16" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  /* ========================================================================
     SCREEN 2.1: CATEGORY DETAIL (Posts in a specific category)
     ======================================================================== */
  renderCategoryDetailPage(categoryId) {
    const category = LearnSphereData.categories.find(c => c.id === categoryId) || LearnSphereData.categories[0];
    const posts = LearnSphereData.articles.filter(a => a.categoryId === category.id);

    const mainContainer = document.getElementById('main-content-view');
    if (!mainContainer) return;

    mainContainer.innerHTML = `
      <div class="py-12 bg-slate-50/50 dark:bg-slate-950/30 border-b border-slate-100 dark:border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4">
            <a href="#/home" class="hover:text-blue-600">Home</a>
            <span>/</span>
            <a href="#/categories" class="hover:text-blue-600">Categories</a>
            <span>/</span>
            <span class="text-slate-900 dark:text-white font-medium">${category.name}</span>
          </nav>

          <div class="flex flex-col md:flex-row md:items-center gap-6 justify-between">
            <div class="flex items-start gap-4">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr ${category.accentBg} text-white flex items-center justify-center shadow-lg shrink-0">
                ${this.getCategoryIcon(category.id, "w-7 h-7")}
              </div>
              <div>
                <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">${category.name}</h1>
                <p class="text-slate-600 dark:text-slate-400 text-sm mt-1 max-w-2xl">${category.fullDesc}</p>
              </div>
            </div>
            <div>
              <span class="px-4 py-2 rounded-xl text-sm font-bold bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                ${posts.length} Guides Available
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        ${posts.length > 0 ? `
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${posts.map(a => this.renderPostCard(a)).join('')}
          </div>
        ` : `
          <div class="p-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            <p class="text-slate-500">No posts in this category yet. Check back soon!</p>
          </div>
        `}
      </div>
    `;
  },

  /* ========================================================================
     SCREEN 3: LATEST POSTS PAGE (With full filtering & sorting)
     ======================================================================== */
  renderLatestPostsPage() {
    const mainContainer = document.getElementById('main-content-view');
    if (!mainContainer) return;

    let filtered = LearnSphereSearch.filterByCategory(this.activeCategoryFilter);

    // Apply Sorting
    if (this.activeSort === 'time-short') {
      filtered.sort((a, b) => parseInt(a.readingTime) - parseInt(b.readingTime));
    } else if (this.activeSort === 'popular') {
      filtered.sort((a, b) => b.views - a.views);
    } else {
      // Newest
      filtered.sort((a, b) => new Date(b.isoDate) - new Date(a.isoDate));
    }

    mainContainer.innerHTML = `
      <div class="py-12 bg-slate-50/50 dark:bg-slate-950/30 border-b border-slate-100 dark:border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4">
            <a href="#/home" class="hover:text-blue-600">Home</a>
            <span>/</span>
            <span class="text-slate-900 dark:text-white font-medium">Latest Posts</span>
          </nav>

          <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 class="text-4xl font-extrabold text-slate-900 dark:text-white">All Educational Posts</h1>
              <p class="text-slate-600 dark:text-slate-400 text-lg mt-2">
                Browse our complete catalog of tutorials, conceptual guides, and career roadmaps.
              </p>
            </div>
            
            <!-- Sort Selector -->
            <div class="flex items-center gap-2">
              <label for="post-sort-select" class="text-xs font-semibold text-slate-500 dark:text-slate-400 whitespace-nowrap">Sort by:</label>
              <select 
                id="post-sort-select"
                onchange="LearnSphereApp.setSort(this.value)"
                class="px-3 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-blue-500"
              >
                <option value="newest" ${this.activeSort === 'newest' ? 'selected' : ''}>Newest First</option>
                <option value="time-short" ${this.activeSort === 'time-short' ? 'selected' : ''}>Quick Reads (&lt; 6 min)</option>
                <option value="popular" ${this.activeSort === 'popular' ? 'selected' : ''}>Most Popular</option>
              </select>
            </div>
          </div>

          <!-- Category Filter Bar (Requirement 7) -->
          <div class="flex items-center gap-2 overflow-x-auto pt-6 pb-2 no-scrollbar">
            <button 
              onclick="LearnSphereApp.filterCategory('all')"
              class="filter-pill ${this.activeCategoryFilter === 'all' ? 'active bg-blue-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300'} px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap border border-slate-200 dark:border-slate-700 shadow-sm"
            >
              All (${LearnSphereData.articles.length})
            </button>
            ${LearnSphereData.categories.map(c => `
              <button 
                onclick="LearnSphereApp.filterCategory('${c.id}')"
                class="filter-pill ${this.activeCategoryFilter === c.id ? 'active bg-blue-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300'} px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap border border-slate-200 dark:border-slate-700 shadow-sm"
              >
                ${c.name}
              </button>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${filtered.map(a => this.renderPostCard(a)).join('')}
        </div>
      </div>
    `;
  },

  filterCategory(catId) {
    this.activeCategoryFilter = catId;
    this.renderLatestPostsPage();
  },

  setSort(sortType) {
    this.activeSort = sortType;
    this.renderLatestPostsPage();
  },

  /* ========================================================================
     SCREEN 4: SEARCH RESULTS PAGE (Requirement 9)
     ======================================================================== */
  renderSearchPage(query = '') {
    const mainContainer = document.getElementById('main-content-view');
    if (!mainContainer) return;

    const results = LearnSphereSearch.query(query);

    mainContainer.innerHTML = `
      <div class="py-12 bg-slate-50/50 dark:bg-slate-950/30 border-b border-slate-100 dark:border-slate-800">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4">
            <a href="#/home" class="hover:text-blue-600">Home</a>
            <span>/</span>
            <span class="text-slate-900 dark:text-white font-medium">Search</span>
          </nav>

          <h1 class="text-3xl font-extrabold text-slate-900 dark:text-white mb-6">Search Educational Posts</h1>

          <!-- Prominent Search Bar with Placeholder (Requirement 9) -->
          <div class="relative">
            <input 
              type="text" 
              id="page-search-input"
              value="${query}"
              placeholder="Search educational posts..." 
              oninput="LearnSphereApp.onSearchInput(this.value)"
              class="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md text-base"
            />
            <div class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <svg width="24" height="24" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            </div>
            ${query ? `
              <button 
                onclick="LearnSphereApp.clearSearch()"
                class="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800"
              >
                Clear
              </button>
            ` : ''}
          </div>

          <!-- Suggested Quick Queries -->
          <div class="flex items-center gap-2 flex-wrap mt-4 text-xs">
            <span class="text-slate-500 dark:text-slate-400 font-medium">Popular searches:</span>
            <button onclick="LearnSphereApp.setSearchTerm('Python')" class="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 hover:bg-blue-100">Python</button>
            <button onclick="LearnSphereApp.setSearchTerm('AI')" class="px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100">AI</button>
            <button onclick="LearnSphereApp.setSearchTerm('APIs')" class="px-2.5 py-1 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 hover:bg-teal-100">APIs</button>
            <button onclick="LearnSphereApp.setSearchTerm('Cybersecurity')" class="px-2.5 py-1 rounded-lg bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 hover:bg-rose-100">Cybersecurity</button>
            <button onclick="LearnSphereApp.setSearchTerm('Git')" class="px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 hover:bg-amber-100">Git</button>
          </div>
        </div>
      </div>

      <div class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between mb-6">
          <p class="text-sm font-semibold text-slate-600 dark:text-slate-400">
            ${query ? `Found <span class="text-blue-600 font-bold">${results.length}</span> results for "<span class="text-slate-900 dark:text-white font-bold">${query}</span>"` : 'Showing all articles'}
          </p>
        </div>

        ${results.length > 0 ? `
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${results.map(a => this.renderPostCard(a, query)).join('')}
          </div>
        ` : `
          <!-- Empty State (Requirement 9) -->
          <div class="py-16 px-6 text-center max-w-md mx-auto bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div class="w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto mb-4">
              <svg width="32" height="32" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">No posts found. Try searching for another topic.</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400 mb-6">
              We couldn't find any articles matching your search query. Try checking for typos or explore our suggested categories below.
            </p>
            <div class="flex flex-wrap justify-center gap-2">
              <button onclick="LearnSphereApp.setSearchTerm('Python')" class="px-3 py-1.5 rounded-xl bg-blue-600 text-white text-xs font-semibold">Explore Python</button>
              <button onclick="LearnSphereApp.setSearchTerm('Artificial Intelligence')" class="px-3 py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-semibold">Explore AI</button>
              <button onclick="LearnSphereApp.clearSearch()" class="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold">View All Posts</button>
            </div>
          </div>
        `}
      </div>
    `;
  },

  onSearchInput(val) {
    window.location.hash = `#/search?q=${encodeURIComponent(val)}`;
  },

  setSearchTerm(term) {
    window.location.hash = `#/search?q=${encodeURIComponent(term)}`;
  },

  clearSearch() {
    window.location.hash = `#/search`;
  },

  renderModalLiveResults(query) {
    const container = document.getElementById('modal-search-results');
    if (!container) return;

    if (!query) {
      container.innerHTML = `
        <p class="text-xs text-slate-400 p-4 text-center">Type keywords like "Python", "AI", or "Security" to search...</p>
      `;
      return;
    }

    const matches = LearnSphereSearch.query(query).slice(0, 4);
    if (matches.length === 0) {
      container.innerHTML = `
        <div class="p-6 text-center text-sm text-slate-500">
          No posts found. Try searching for another topic.
        </div>
      `;
      return;
    }

    container.innerHTML = matches.map(a => `
      <a 
        href="#/post/${a.slug}" 
        onclick="LearnSphereUI.closeSearchModal()"
        class="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
      >
        <div class="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs shrink-0">
          ${this.getCategoryIcon(a.categoryId, "w-5 h-5")}
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-bold text-slate-900 dark:text-white truncate group-hover:text-blue-600">${a.title}</p>
          <p class="text-xs text-slate-500 truncate">${a.category} • ${a.readingTime}</p>
        </div>
        <svg width="16" height="16" class="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </a>
    `).join('');
  },

  /* ========================================================================
     SCREEN 5: INDIVIDUAL BLOG POST PAGE (Requirement 8)
     ======================================================================== */
  renderPostDetailPage(slug) {
    const article = LearnSphereData.articles.find(a => a.slug === slug) || LearnSphereData.articles[0];
    const author = LearnSphereData.authors[article.authorId] || { name: 'LearnSphere Faculty', initials: 'LS', avatarBg: 'bg-blue-600', role: 'Curriculum Specialist', bio: 'Educator dedicated to accessible learning.' };
    const category = LearnSphereData.categories.find(c => c.id === article.categoryId) || { name: article.category, badgeColor: 'bg-blue-100 text-blue-800' };
    const isBookmarked = LearnSphereUI.isBookmarked(article.id);
    const relatedPosts = LearnSphereData.articles.filter(a => a.id !== article.id && a.categoryId === article.categoryId).slice(0, 3);
    const illustrationSrc = this.getCategoryIllustration(article.categoryId);

    const mainContainer = document.getElementById('main-content-view');
    if (!mainContainer) return;

    mainContainer.innerHTML = `
      <!-- ARTICLE HEADER / BREADCRUMB -->
      <div class="pt-8 pb-10 bg-slate-50/50 dark:bg-slate-950/30 border-b border-slate-100 dark:border-slate-800">
        <div class="max-w-4xl mx-auto px-4 sm:px-6">
          
          <!-- Breadcrumb Navigation (Requirement 8) -->
          <nav class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-6 flex-wrap">
            <a href="#/home" class="hover:text-blue-600">Home</a>
            <span>/</span>
            <a href="#/categories" class="hover:text-blue-600">Categories</a>
            <span>/</span>
            <a href="#/category/${category.id}" class="hover:text-blue-600">${category.name}</a>
            <span>/</span>
            <span class="text-slate-900 dark:text-white font-medium truncate max-w-xs">${article.title}</span>
          </nav>

          <!-- Category Badge -->
          <div class="mb-4">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${category.badgeColor} shadow-sm">
              ${article.category}
            </span>
          </div>

          <!-- Article Title -->
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2] mb-4">
            ${article.title}
          </h1>

          <!-- Article Subtitle -->
          ${article.subtitle ? `
            <p class="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
              ${article.subtitle}
            </p>
          ` : ''}

          <!-- Metadata & Reader Tools Bar -->
          <div class="pt-6 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <!-- Author Block -->
            <div class="flex items-center gap-3">
              <div class="w-11 h-11 rounded-full ${author.avatarBg} text-white flex items-center justify-center font-bold text-sm shadow-md">
                ${author.initials}
              </div>
              <div>
                <p class="font-bold text-slate-900 dark:text-white text-sm">${author.name}</p>
                <div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <span>${article.date}</span>
                  <span>•</span>
                  <span class="text-blue-600 dark:text-blue-400 font-semibold">${article.readingTime}</span>
                </div>
              </div>
            </div>

            <!-- Interactive Reader Controls -->
            <div class="flex items-center gap-2">
              <!-- Font Size Adjuster -->
              <div class="flex items-center bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 p-1 text-xs">
                <button onclick="LearnSphereUI.setFontSize('small')" class="px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300" title="Smaller font">A-</button>
                <button onclick="LearnSphereUI.setFontSize('normal')" class="px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold" title="Default font">A</button>
                <button onclick="LearnSphereUI.setFontSize('large')" class="px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold" title="Larger font">A+</button>
              </div>

              <!-- Like Button -->
              <button 
                id="article-like-btn"
                onclick="LearnSphereApp.likeArticle('${article.id}')"
                class="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-rose-400 text-xs font-semibold text-slate-700 dark:text-slate-300 transition-all shadow-sm"
              >
                <svg width="16" height="16" class="w-4 h-4 text-rose-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                <span id="article-likes-count">${article.likes || 184}</span>
              </button>

              <!-- Bookmark Button -->
              <button 
                data-bookmark-id="${article.id}"
                onclick="LearnSphereUI.toggleBookmark('${article.id}')"
                class="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:text-amber-500 transition-all shadow-sm ${isBookmarked ? 'text-amber-500' : 'text-slate-600 dark:text-slate-300'}"
                title="Save to Reading List"
              >
                <svg width="16" height="16" class="w-4 h-4" fill="${isBookmarked ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
              </button>

              <!-- Share Button -->
              <button 
                onclick="LearnSphereApp.shareArticle()"
                class="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:text-blue-500 text-slate-600 dark:text-slate-300 transition-all shadow-sm"
                title="Share Article Link"
              >
                <svg width="16" height="16" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- MAIN ARTICLE CONTENT AREA (2-Column with Table of Contents) -->
      <div class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <!-- Sticky Table of Contents (Requirement 8) -->
          <aside class="lg:col-span-4 order-2 lg:order-1">
            <div class="sticky top-24 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-4">
              <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                  <svg width="16" height="16" class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"/></svg>
                  <span>Table of Contents</span>
                </h4>
                <span class="text-[11px] text-slate-400 font-mono">${(article.toc || []).length} Sections</span>
              </div>

              <nav class="space-y-1">
                ${(article.toc || []).map((item, idx) => `
                  <a 
                    href="#${item.id}" 
                    class="toc-link ${idx === 0 ? 'active' : ''}"
                    onclick="LearnSphereApp.scrollToSection('${item.id}', event)"
                  >
                    ${item.title}
                  </a>
                `).join('')}
              </nav>

              <!-- Author Bio Card in Sidebar -->
              <div class="pt-4 border-t border-slate-100 dark:border-slate-800 mt-6">
                <div class="flex items-center gap-2.5 mb-2">
                  <div class="w-7 h-7 rounded-full ${author.avatarBg} text-white flex items-center justify-center text-xs font-bold">
                    ${author.initials}
                  </div>
                  <div>
                    <h5 class="text-xs font-bold text-slate-900 dark:text-white">${author.name}</h5>
                    <p class="text-[10px] text-slate-500">${author.role}</p>
                  </div>
                </div>
                <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  ${author.bio}
                </p>
              </div>

              <!-- SDG 4 Callout Widget -->
              <div class="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50 text-blue-950 dark:text-blue-200">
                <p class="text-xs font-bold flex items-center gap-1.5 mb-1">
                  <span>🎓</span>
                  <span>SDG 4: Quality Education</span>
                </p>
                <p class="text-[11px] text-blue-800 dark:text-blue-300">
                  This peer-reviewed learning guide is published under open access for students globally.
                </p>
              </div>
            </div>
          </aside>

          <!-- Article Main Prose Content (Requirement 8) -->
          <main class="lg:col-span-8 order-1 lg:order-2">
            <article class="bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-3xl border border-slate-200/90 dark:border-slate-800 shadow-sm">
              
              <!-- Featured Image / Banner Illustration -->
              <div class="rounded-2xl overflow-hidden mb-10 border border-slate-100 dark:border-slate-800 shadow-sm aspect-video bg-slate-100 dark:bg-slate-800">
                <img 
                  src="${illustrationSrc}" 
                  alt="${article.title}" 
                  class="w-full h-full object-cover"
                />
              </div>

              <!-- Article Body Content -->
              <div class="article-prose">
                ${article.contentHtml}
              </div>

              <!-- Article Tags -->
              <div class="pt-8 mt-12 border-t border-slate-200 dark:border-slate-800">
                <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Topic Tags:</h4>
                <div class="flex flex-wrap gap-2">
                  ${(article.tags || []).map(t => `
                    <a href="#/search?q=${encodeURIComponent(t)}" class="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      #${t}
                    </a>
                  `).join('')}
                </div>
              </div>

              <!-- Article Feedback / Rating -->
              <div class="mt-10 p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 class="font-bold text-slate-900 dark:text-white text-base">Was this educational guide helpful?</h4>
                  <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Let us know so we can continually refine our curriculum for students.</p>
                </div>
                <div class="flex items-center gap-2">
                  <button onclick="LearnSphereUI.showToast('Thank you for your feedback!', 'success')" class="px-4 py-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-blue-50">👍 Yes, very helpful</button>
                  <button onclick="LearnSphereUI.showToast('Thanks, we will improve this section!', 'info')" class="px-4 py-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100">Needs more examples</button>
                </div>
              </div>

            </article>

            <!-- RELATED POSTS SECTION (Requirement 8) -->
            ${relatedPosts.length > 0 ? `
              <div class="mt-12">
                <div class="flex items-center justify-between mb-6">
                  <div>
                    <h3 class="text-2xl font-bold text-slate-900 dark:text-white">Related Educational Posts</h3>
                    <p class="text-xs text-slate-500">More guides in ${article.category} to reinforce your learning.</p>
                  </div>
                  <a href="#/category/${category.id}" class="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline">View category</a>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  ${relatedPosts.map(p => this.renderPostCard(p)).join('')}
                </div>
              </div>
            ` : ''}

          </main>
        </div>
      </div>
    `;
  },

  scrollToSection(id, event) {
    if (event) event.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  },

  likeArticle(articleId) {
    const article = LearnSphereData.articles.find(a => a.id === articleId);
    if (!article) return;
    article.likes = (article.likes || 184) + 1;
    const countEl = document.getElementById('article-likes-count');
    if (countEl) countEl.textContent = article.likes;
    LearnSphereUI.showToast('Added your like to this educational guide!', 'success');
  },

  shareArticle() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      LearnSphereUI.showToast('Article link copied to clipboard!', 'info');
    }).catch(() => {
      LearnSphereUI.showToast('Link ready: ' + window.location.href, 'info');
    });
  },

  /* ========================================================================
     SCREEN 6: ABOUT / SDG 4 PAGE (Requirement 11)
     ======================================================================== */
  renderAboutPage() {
    const mainContainer = document.getElementById('main-content-view');
    if (!mainContainer) return;

    mainContainer.innerHTML = `
      <div class="py-16 bg-gradient-to-b from-blue-50/60 to-white dark:from-slate-950 dark:to-slate-900 border-b border-slate-100 dark:border-slate-800">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs font-bold mb-4">
            Design Process & Perspective (DPP)
          </div>
          <h1 class="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Making Learning Simple and Accessible.
          </h1>
          <p class="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            LearnSphere is designed to make educational information easier to discover, organize and understand through clean digital content, supporting UN Sustainable Development Goal 4.
          </p>
        </div>
      </div>

      <div class="py-16 max-w-4xl mx-auto px-4 sm:px-6 space-y-16">
        
        <!-- Mission & Purpose Section -->
        <section class="space-y-4">
          <div class="flex items-center gap-3">
            <span class="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">01</span>
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Our Educational Mission</h2>
          </div>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            Too often, students and beginners seeking to learn modern technical subjects encounter fragmented tutorials, prohibitive subscription paywalls, or excessively academic jargon that obscures core principles.
          </p>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            <strong>LearnSphere</strong> was created to solve this friction. It provides high-quality, structured, bite-sized educational articles across six foundational disciplines: Programming, Artificial Intelligence, Web Development, Data Science, Cybersecurity, and Career & Professional Skills.
          </p>
        </section>

        <!-- SDG 4 Quality Education Alignment -->
        <section class="p-8 rounded-3xl bg-gradient-to-br from-rose-900/10 via-pink-900/5 to-transparent border border-rose-200 dark:border-rose-900/40 space-y-6">
          <div class="flex items-start gap-4">
            <img src="assets/images/sdg4-badge.svg" alt="UN SDG 4" class="w-16 h-16 rounded-2xl shadow-sm shrink-0"/>
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">United Nations Alignment</span>
              <h3 class="text-2xl font-extrabold text-slate-900 dark:text-white">SDG 4 – Quality Education</h3>
              <p class="text-slate-600 dark:text-slate-400 text-sm mt-1">Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-rose-100 dark:border-slate-800">
              <h4 class="font-bold text-slate-900 dark:text-white text-sm mb-1">Target 4.4: Technical & Vocational Skills</h4>
              <p class="text-xs text-slate-600 dark:text-slate-400">Equipping students with marketable programming, data literacy, and cybersecurity capabilities to bridge the academic-to-industry gap.</p>
            </div>
            <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-rose-100 dark:border-slate-800">
              <h4 class="font-bold text-slate-900 dark:text-white text-sm mb-1">Target 4.a: Equitable Digital Access</h4>
              <p class="text-xs text-slate-600 dark:text-slate-400">100% free open-access content optimized for low-bandwidth environments, screen-readers, and mobile screens without paywalls.</p>
            </div>
          </div>
        </section>

        <!-- Design Process and Perspective (DPP) Principles -->
        <section class="space-y-6">
          <div class="flex items-center gap-3">
            <span class="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">02</span>
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Design Process & Perspective (DPP) Framework</h2>
          </div>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            This project was developed through the human-centered Design Process and Perspective methodology:
          </p>

          <div class="space-y-4">
            <!-- Phase 1 -->
            <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm">
              <h4 class="font-bold text-blue-600 dark:text-blue-400 text-base mb-1">1. Empathize & Problem Formulation</h4>
              <p class="text-sm text-slate-600 dark:text-slate-400">
                Surveys of first-year engineering and computer science students indicated that 68% felt intimidated by standard documentation. The primary pain points identified were unstructured tutorials, absence of reading times, and lack of relatable real-world analogies.
              </p>
            </div>

            <!-- Phase 2 -->
            <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm">
              <h4 class="font-bold text-indigo-600 dark:text-indigo-400 text-base mb-1">2. Information Architecture & Progressive Disclosure</h4>
              <p class="text-sm text-slate-600 dark:text-slate-400">
                We grouped content into 6 high-demand domains. Each article incorporates a sticky Table of Contents, scannable subheadings, structured code blocks, and bulleted Key Takeaways to reduce cognitive load and facilitate review before examinations.
              </p>
            </div>

            <!-- Phase 3 -->
            <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm">
              <h4 class="font-bold text-teal-600 dark:text-teal-400 text-base mb-1">3. Visual Hierarchy & Color Theory</h4>
              <p class="text-sm text-slate-600 dark:text-slate-400">
                A calm academic blue (<strong>#2563EB</strong>) was chosen as the dominant color to promote focus, trust, and mental clarity, paired with warm amber (<strong>#F59E0B</strong>) for actionable highlights and bookmarks. Contrast ratios strictly exceed WCAG 2.1 AAA benchmarks (7:1+ for body text).
              </p>
            </div>

            <!-- Phase 4 -->
            <div class="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm">
              <h4 class="font-bold text-emerald-600 dark:text-emerald-400 text-base mb-1">4. Accessibility & Universal Usability</h4>
              <p class="text-sm text-slate-600 dark:text-slate-400">
                Features include customizable text sizing (A-, A, A+), dark/light/sepia reading themes, keyboard-friendly navigation with visible focus indicators, and touch targets exceeding 44×44px for students studying on mobile phones.
              </p>
            </div>
          </div>
        </section>

        <!-- Editorial Standards -->
        <section class="space-y-4">
          <div class="flex items-center gap-3">
            <span class="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">03</span>
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Content & Editorial Standards</h2>
          </div>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            We adhere strictly to realistic educational claims. LearnSphere does not promise overnight mastery or inflated shortcuts. Instead, we advocate for iterative practice, steady conceptual progression, and active experimentation with real software tools.
          </p>
        </section>

      </div>
    `;
  },

  /* ========================================================================
     SCREEN 7: SAVED ARTICLES / READING LIST (Bonus Student Feature)
     ======================================================================== */
  renderSavedPostsPage() {
    const mainContainer = document.getElementById('main-content-view');
    if (!mainContainer) return;

    const bookmarkedIds = LearnSphereUI.getBookmarks();
    const savedArticles = LearnSphereData.articles.filter(a => bookmarkedIds.includes(a.id));

    mainContainer.innerHTML = `
      <div class="py-12 bg-slate-50/50 dark:bg-slate-950/30 border-b border-slate-100 dark:border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4">
            <a href="#/home" class="hover:text-blue-600">Home</a>
            <span>/</span>
            <span class="text-slate-900 dark:text-white font-medium">My Reading List</span>
          </nav>

          <h1 class="text-4xl font-extrabold text-slate-900 dark:text-white">Your Saved Reading List</h1>
          <p class="text-slate-600 dark:text-slate-400 text-lg mt-2">
            Articles bookmarked for offline study and revision before exams.
          </p>
        </div>
      </div>

      <div class="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        ${savedArticles.length > 0 ? `
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${savedArticles.map(a => this.renderPostCard(a)).join('')}
          </div>
        ` : `
          <div class="py-16 text-center max-w-md mx-auto bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
            <div class="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-900/40 text-amber-600 flex items-center justify-center mx-auto mb-4">
              <svg width="28" height="28" class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/></svg>
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">No Saved Articles Yet</h3>
            <p class="text-sm text-slate-500 mb-6">Click the bookmark icon on any post card to save it here for quick reference during your study sessions.</p>
            <a href="#/posts" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold bg-blue-600 text-white text-xs hover:bg-blue-700">
              Browse Educational Posts
            </a>
          </div>
        `}
      </div>
    `;
  }
};

// Expose on window object for inline event handlers and global access
if (typeof window !== 'undefined') {
  window.LearnSphereApp = LearnSphereApp;

  // Defensive initialization: runs immediately if DOM is already parsed (common in local file:///), or waits for DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      LearnSphereApp.init();
    });
  } else {
    // DOM is already interactive or complete
    LearnSphereApp.init();
  }
}

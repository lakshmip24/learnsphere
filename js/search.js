/**
 * LearnSphere - Search Engine Engine & Filter Logic
 */

const LearnSphereSearch = {
  /**
   * Search across all articles by query string
   * @param {string} query 
   * @returns {Array} Matching articles with relevance ranking
   */
  query(query) {
    if (!query || !query.trim()) {
      return LearnSphereData.articles;
    }

    const cleanQuery = query.trim().toLowerCase();
    const queryTerms = cleanQuery.split(/\s+/).filter(t => t.length > 0);

    return LearnSphereData.articles.map(article => {
      let score = 0;
      const titleLower = article.title.toLowerCase();
      const descLower = article.shortDesc.toLowerCase();
      const catLower = article.category.toLowerCase();
      const tagsLower = (article.tags || []).join(' ').toLowerCase();
      const author = LearnSphereData.authors[article.authorId];
      const authorNameLower = author ? author.name.toLowerCase() : '';

      // Exact phrase match in title
      if (titleLower.includes(cleanQuery)) score += 50;
      // Exact match in category
      if (catLower.includes(cleanQuery)) score += 40;
      // Exact match in tags
      if (tagsLower.includes(cleanQuery)) score += 30;
      // Exact match in description
      if (descLower.includes(cleanQuery)) score += 20;

      // Individual term matching
      queryTerms.forEach(term => {
        if (titleLower.includes(term)) score += 15;
        if (catLower.includes(term)) score += 12;
        if (tagsLower.includes(term)) score += 10;
        if (descLower.includes(term)) score += 5;
        if (authorNameLower.includes(term)) score += 5;
      });

      return {
        ...article,
        searchScore: score
      };
    })
    .filter(article => article.searchScore > 0)
    .sort((a, b) => b.searchScore - a.searchScore);
  },

  /**
   * Filter articles by category id
   * @param {string} categoryId 
   * @returns {Array}
   */
  filterByCategory(categoryId) {
    if (!categoryId || categoryId === 'all') {
      return LearnSphereData.articles;
    }
    return LearnSphereData.articles.filter(a => a.categoryId === categoryId);
  },

  /**
   * Highlights search terms in text
   * @param {string} text 
   * @param {string} query 
   * @returns {string} Safe HTML string with highlights
   */
  highlightText(text, query) {
    if (!query || !query.trim()) return text;
    const terms = query.trim().split(/\s+/).filter(t => t.length > 1);
    if (!terms.length) return text;

    let highlighted = text;
    terms.forEach(term => {
      const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      highlighted = highlighted.replace(regex, '<mark class="search-highlight">$1</mark>');
    });
    return highlighted;
  }
};

if (typeof window !== 'undefined') {
  window.LearnSphereSearch = LearnSphereSearch;
}

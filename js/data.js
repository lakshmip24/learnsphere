/**
 * LearnSphere - Educational Blog Platform Data Store
 * Built for Design Process & Perspective (DPP)
 * Aligned with UN Sustainable Development Goal 4: Quality Education
 */

const LearnSphereData = {
  platform: {
    name: "LearnSphere",
    tagline: "Learn. Explore. Grow.",
    mission: "Making learning simple, reliable, and accessible for students and lifelong learners worldwide.",
    sdgGoal: "SDG 4: Quality Education",
    stats: [
      { label: "Educational Guides", value: "50+", icon: "book-open" },
      { label: "Active Student Learners", value: "12,400+", icon: "users" },
      { label: "Knowledge Domains", value: "6 Core", icon: "compass" },
      { label: "Free & Open Access", value: "100%", icon: "award" }
    ]
  },

  categories: [
    {
      id: "programming",
      name: "Programming",
      slug: "programming",
      shortDesc: "Understand syntax, logic, algorithms, and practical problem solving with clear, beginner-friendly examples.",
      fullDesc: "Programming is the literacy of the modern digital age. Our programming track breaks down syntax barriers, teaching foundational logic, modular functions, object-oriented concepts, and clean coding habits across languages like Python, JavaScript, and C++.",
      icon: "code",
      color: "blue",
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:border-blue-700/50",
      accentBg: "from-blue-600 to-indigo-600",
      gradient: "from-blue-500/10 via-indigo-500/10 to-transparent",
      postCount: 14,
      topics: ["Python Fundamentals", "Object-Oriented Programming", "Algorithms & Data Structures", "Logic & Debugging", "Clean Code Best Practices"]
    },
    {
      id: "ai",
      name: "Artificial Intelligence",
      slug: "ai",
      shortDesc: "Demystify machine learning, neural networks, and generative AI models with intuitive, non-intimidating explanations.",
      fullDesc: "Artificial Intelligence is transforming every discipline. This track unpacks how algorithms learn from patterns, train on datasets, generate insights, and interact with humans, while examining the ethical and societal considerations of responsible AI.",
      icon: "cpu",
      color: "indigo",
      badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200 dark:bg-indigo-900/40 dark:text-indigo-300 dark:border-indigo-700/50",
      accentBg: "from-indigo-600 to-purple-600",
      gradient: "from-indigo-500/10 via-purple-500/10 to-transparent",
      postCount: 11,
      topics: ["Machine Learning Basics", "Neural Networks", "Generative AI & LLMs", "Computer Vision", "AI Ethics & Fairness"]
    },
    {
      id: "web-development",
      name: "Web Development",
      slug: "web-development",
      shortDesc: "Build modern, accessible, and responsive digital web experiences using HTML, CSS, JavaScript, and APIs.",
      fullDesc: "The web is the world's most accessible application platform. Learn how browsers render interfaces, how modern CSS Flexbox and Grid create responsive layouts, how JavaScript adds interactivity, and how client-server architectures power interactive websites.",
      icon: "globe",
      color: "teal",
      badgeColor: "bg-teal-100 text-teal-800 border-teal-200 dark:bg-teal-900/40 dark:text-teal-300 dark:border-teal-700/50",
      accentBg: "from-teal-600 to-cyan-600",
      gradient: "from-teal-500/10 via-cyan-500/10 to-transparent",
      postCount: 12,
      topics: ["HTML5 & Semantic Markup", "Modern CSS & Flexbox/Grid", "JavaScript DOM & Fetch", "REST APIs", "Web Accessibility (a11y)"]
    },
    {
      id: "data-science",
      name: "Data Science",
      slug: "data-science",
      shortDesc: "Turn raw numbers into actionable visual stories through data exploration, analysis, statistics, and charts.",
      fullDesc: "Data powers modern decision-making. Learn how to clean messy records, compute descriptive statistics, discover hidden patterns using Python pandas, and craft compelling visual dashboards that communicate insights clearly.",
      icon: "bar-chart-2",
      color: "emerald",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/40 dark:text-emerald-300 dark:border-emerald-700/50",
      accentBg: "from-emerald-600 to-teal-600",
      gradient: "from-emerald-500/10 via-teal-500/10 to-transparent",
      postCount: 8,
      topics: ["Exploratory Data Analysis", "Python Pandas & NumPy", "Data Visualization", "Descriptive Statistics", "SQL Queries"]
    },
    {
      id: "cybersecurity",
      name: "Cybersecurity",
      slug: "cybersecurity",
      shortDesc: "Protect digital assets, understand network threats, encryption principles, and safe security practices.",
      fullDesc: "As our lives become more digital, security is essential for everyone. Explore the core CIA triad (Confidentiality, Integrity, Availability), understand common threat vectors like phishing and ransomware, and learn how encryption protects personal and organizational data.",
      icon: "shield",
      color: "rose",
      badgeColor: "bg-rose-100 text-rose-800 border-rose-200 dark:bg-rose-900/40 dark:text-rose-300 dark:border-rose-700/50",
      accentBg: "from-rose-600 to-red-600",
      gradient: "from-rose-500/10 via-red-500/10 to-transparent",
      postCount: 7,
      topics: ["CIA Security Triad", "Phishing & Social Engineering", "Encryption Fundamentals", "Network Defense", "Password & Auth Hygiene"]
    },
    {
      id: "career-skills",
      name: "Career & Skills",
      slug: "career-skills",
      shortDesc: "Bridge the gap between academic study and professional engineering with version control, resumes, and study habits.",
      fullDesc: "Excelling in technology requires more than just coding syntax. Master version control with Git and GitHub, build high-impact student portfolios, write clean technical documentation, prepare for internships, and develop lifelong study habits.",
      icon: "briefcase",
      color: "amber",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/40 dark:text-amber-300 dark:border-amber-700/50",
      accentBg: "from-amber-600 to-orange-600",
      gradient: "from-amber-500/10 via-orange-500/10 to-transparent",
      postCount: 9,
      topics: ["Git & GitHub Workflow", "Tech Resume Writing", "Technical Interview Prep", "Project Portfolio Building", "Effective Study Habits"]
    }
  ],

  authors: {
    evelyn: {
      name: "Dr. Evelyn Reed",
      role: "AI Curriculum Lead & Senior Researcher",
      avatarBg: "bg-indigo-600",
      initials: "ER",
      bio: "Former university lecturer and AI ethics researcher passionate about democratizing computer science education for beginners worldwide."
    },
    alex: {
      name: "Alex Chen",
      role: "Software Engineer & Open Source Mentor",
      avatarBg: "bg-blue-600",
      initials: "AC",
      bio: "Full-stack developer with 8+ years building distributed tools. Passionate about teaching clean code principles to student coders."
    },
    maya: {
      name: "Maya Lin",
      role: "Web Architecture Instructor & UX Designer",
      avatarBg: "bg-teal-600",
      initials: "ML",
      bio: "Frontend engineer and web accessibility advocate who specializes in making interactive web development intuitive for students."
    },
    marcus: {
      name: "Marcus Vance",
      role: "Cybersecurity Specialist & CISSP",
      avatarBg: "bg-rose-600",
      initials: "MV",
      bio: "Information security analyst focused on digital hygiene education, privacy rights, and resilient infrastructure."
    }
  },

  articles: [
    {
      id: "understanding-artificial-intelligence",
      slug: "understanding-artificial-intelligence",
      title: "Understanding Artificial Intelligence: A Beginner’s Guide",
      subtitle: "Learn the core principles of AI, how machines learn from datasets, and how intelligent systems impact our world.",
      category: "Artificial Intelligence",
      categoryId: "ai",
      shortDesc: "Learn the basic concepts behind AI, how intelligent systems learn from patterns, and how they shape our everyday digital experiences.",
      authorId: "evelyn",
      date: "Oct 12, 2026",
      isoDate: "2026-10-12",
      readingTime: "7 min read",
      featured: true,
      imageTheme: "ai",
      tags: ["AI Basics", "Machine Learning", "Neural Networks", "SDG 4", "Technology"],
      views: 3420,
      likes: 218,
      toc: [
        { id: "sec-intro", title: "1. Introduction" },
        { id: "sec-what-is-ai", title: "2. What is Artificial Intelligence?" },
        { id: "sec-how-it-works", title: "3. How AI Works" },
        { id: "sec-applications", title: "4. Real-World Applications" },
        { id: "sec-advantages", title: "5. Advantages of AI" },
        { id: "sec-challenges", title: "6. Challenges of AI" },
        { id: "sec-future", title: "7. Future of AI" },
        { id: "sec-takeaways", title: "8. Key Takeaways" },
        { id: "sec-conclusion", title: "9. Conclusion" }
      ],
      contentHtml: `
        <section id="sec-intro" class="mb-12">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
            <span class="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-300 text-sm font-bold">1</span>
            Introduction
          </h2>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-4">
            From the moment your smartphone unlocks via facial recognition to predictive text completing your email sentences, <strong>Artificial Intelligence (AI)</strong> has quietly shifted from a speculative science fiction concept into an essential component of modern life.
          </p>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-4">
            For students and newcomers to technology, the sheer volume of buzzwords—deep learning, neural networks, machine learning, generative models—can feel overwhelming. However, the fundamental concepts underlying AI are rooted in intuitive logic, statistics, and mathematics. This guide provides a clear, structured introduction designed to help you build an enduring foundation.
          </p>
          <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 text-blue-900 dark:text-blue-200 my-6">
            <p class="font-medium flex items-center gap-2">
              <svg class="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span><strong>Educational Note:</strong> You do not need an advanced mathematics degree to grasp AI fundamentals. Think of AI as teaching a computer through examples rather than rigid, line-by-line manual rules.</span>
            </p>
          </div>
        </section>

        <section id="sec-what-is-ai" class="mb-12">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
            <span class="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-300 text-sm font-bold">2</span>
            What is Artificial Intelligence?
          </h2>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-4">
            At its core, <strong>Artificial Intelligence</strong> refers to the simulation of human intelligence in machines programmed to think, learn, solve problems, and make decisions. While traditional computer programs strictly execute explicit rules written by a programmer (such as <code>if user_is_logged_in: show_dashboard()</code>), AI systems discern patterns from vast amounts of data and generalize those patterns to new, unseen scenarios.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
              <h4 class="font-bold text-slate-900 dark:text-white text-base mb-2 flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-slate-400"></span> Traditional Programming
              </h4>
              <p class="text-sm text-slate-600 dark:text-slate-400 mb-2">Programmers manually write every condition and rule. If an unexpected situation occurs, the software fails.</p>
              <div class="text-xs bg-slate-100 dark:bg-slate-800 p-2.5 rounded font-mono text-slate-700 dark:text-slate-300">
                Data + Explicit Rules ➔ Answer
              </div>
            </div>
            <div class="p-5 rounded-xl border border-blue-200 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-950/20 shadow-sm">
              <h4 class="font-bold text-blue-900 dark:text-blue-300 text-base mb-2 flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-blue-500"></span> Machine Learning (AI)
              </h4>
              <p class="text-sm text-slate-600 dark:text-slate-400 mb-2">The system inspects historical examples to automatically discover the underlying rules and relationships.</p>
              <div class="text-xs bg-blue-100 dark:bg-blue-900/60 p-2.5 rounded font-mono text-blue-900 dark:text-blue-200">
                Data + Known Answers ➔ Learned Model (Rules)
              </div>
            </div>
          </div>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            AI can be broadly classified into two categories:
          </p>
          <ul class="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 my-4 text-base ml-2">
            <li><strong>Narrow (Weak) AI:</strong> Designed and trained for a focused task (e.g., Spotify music recommendations, chess engines, translation tools). All AI today is Narrow AI.</li>
            <li><strong>General (Strong) AI:</strong> Theoretical systems with human-level cognitive flexibility that could adapt to any intellectual problem without reprogramming.</li>
          </ul>
        </section>

        <section id="sec-how-it-works" class="mb-12">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
            <span class="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-300 text-sm font-bold">3</span>
            How AI Works: The Learning Loop
          </h2>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-6">
            Modern AI is primarily powered by <strong>Machine Learning (ML)</strong>. Rather than hard-coding instructions, we guide an algorithm through an iterative four-stage lifecycle:
          </p>
          
          <!-- Interactive Diagram Box -->
          <div class="my-6 p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/60 dark:from-slate-900 dark:to-slate-800/90 border border-slate-200 dark:border-slate-700">
            <h4 class="text-sm uppercase tracking-wider font-semibold text-blue-600 dark:text-blue-400 mb-4">Interactive AI Pipeline Architecture</h4>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200/80 dark:border-slate-700 hover:border-blue-400 transition-all">
                <div class="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm mb-2">01</div>
                <h5 class="font-bold text-slate-900 dark:text-white text-sm mb-1">Data Ingestion</h5>
                <p class="text-xs text-slate-600 dark:text-slate-400">Curating, cleaning, and preprocessing thousands of diverse images, text passages, or sensor readings.</p>
              </div>
              <div class="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200/80 dark:border-slate-700 hover:border-blue-400 transition-all">
                <div class="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm mb-2">02</div>
                <h5 class="font-bold text-slate-900 dark:text-white text-sm mb-1">Feature Extraction</h5>
                <p class="text-xs text-slate-600 dark:text-slate-400">Converting raw information into numerical representations (vectors/embeddings) the math engine understands.</p>
              </div>
              <div class="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200/80 dark:border-slate-700 hover:border-blue-400 transition-all">
                <div class="w-8 h-8 rounded-lg bg-teal-100 dark:bg-teal-900/60 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold text-sm mb-2">03</div>
                <h5 class="font-bold text-slate-900 dark:text-white text-sm mb-1">Model Training</h5>
                <p class="text-xs text-slate-600 dark:text-slate-400">An optimization algorithm iteratively tweaks mathematical weights to minimize prediction error (loss function).</p>
              </div>
              <div class="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200/80 dark:border-slate-700 hover:border-blue-400 transition-all">
                <div class="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-sm mb-2">04</div>
                <h5 class="font-bold text-slate-900 dark:text-white text-sm mb-1">Inference & Feedback</h5>
                <p class="text-xs text-slate-600 dark:text-slate-400">The finalized model evaluates novel inputs in production, generating predictions or answers instantly.</p>
              </div>
            </div>
          </div>

          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mt-4">
            Consider this simple Python example demonstrating how machine learning classifies text using standard open-source tools:
          </p>
          <div class="my-4 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-100 font-mono text-sm">
            <div class="bg-slate-800/80 px-4 py-2 border-b border-slate-700 flex items-center justify-between text-xs text-slate-400">
              <span class="flex items-center gap-2"><span class="w-2.5 h-2.5 rounded-full bg-red-500"></span><span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span><span class="w-2.5 h-2.5 rounded-full bg-green-500"></span> ai_classifier_demo.py</span>
              <span>Python 3</span>
            </div>
            <pre class="p-4 overflow-x-auto"><code><span class="text-purple-400">from</span> sklearn.feature_extraction.text <span class="text-purple-400">import</span> CountVectorizer
<span class="text-purple-400">from</span> sklearn.naive_bayes <span class="text-purple-400">import</span> MultinomialNB

<span class="text-slate-500"># 1. Training samples (educational dataset)</span>
texts = [
    <span class="text-green-300">"Learn Python loops and functions"</span>,
    <span class="text-green-300">"Master linear algebra and calculus"</span>,
    <span class="text-green-300">"Object-oriented programming in JavaScript"</span>,
    <span class="text-green-300">"Probability, statistics and integrals"</span>
]
labels = [<span class="text-amber-300">"Computer Science"</span>, <span class="text-amber-300">"Mathematics"</span>, <span class="text-amber-300">"Computer Science"</span>, <span class="text-amber-300">"Mathematics"</span>]

<span class="text-slate-500"># 2. Vectorize text & train model</span>
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(texts)
classifier = MultinomialNB()
classifier.fit(X, labels)

<span class="text-slate-500"># 3. Predict category for new query</span>
new_query = [<span class="text-green-300">"Writing asynchronous functions"</span>]
predicted = classifier.predict(vectorizer.transform(new_query))
<span class="text-blue-400">print</span>(<span class="text-green-300">f"Predicted category: {predicted[0]}"</span>)
<span class="text-slate-500"># Output: Predicted category: Computer Science</span></code></pre>
          </div>
        </section>

        <section id="sec-applications" class="mb-12">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
            <span class="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-300 text-sm font-bold">4</span>
            Real-World Applications
          </h2>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-6">
            AI is no longer confined to academic laboratories; it is driving measurable social and technical progress across sectors:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div class="w-10 h-10 rounded-lg bg-teal-100 dark:bg-teal-900/60 text-teal-600 dark:text-teal-300 flex items-center justify-center font-bold mb-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </div>
              <h4 class="font-bold text-slate-900 dark:text-white text-base mb-1">Healthcare & Diagnostics</h4>
              <p class="text-sm text-slate-600 dark:text-slate-400">Deep convolutional networks detect retinal disease, skin lesions, and micro-fractures in X-rays with superhuman speed, assisting doctors in remote clinics.</p>
            </div>
            <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div class="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-300 flex items-center justify-center font-bold mb-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
              </div>
              <h4 class="font-bold text-slate-900 dark:text-white text-base mb-1">Personalized Education (SDG 4)</h4>
              <p class="text-sm text-slate-600 dark:text-slate-400">Adaptive tutoring platforms adjust problem difficulty in real time according to a student's learning pace, offering scaffolding whenever a misconception occurs.</p>
            </div>
            <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div class="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/60 text-indigo-600 dark:text-indigo-300 flex items-center justify-center font-bold mb-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/></svg>
              </div>
              <h4 class="font-bold text-slate-900 dark:text-white text-base mb-1">Language Translation & Speech</h4>
              <p class="text-sm text-slate-600 dark:text-slate-400">Natural Language Processing enables real-time communication across over 100 spoken languages, removing geographical and cultural barriers to knowledge.</p>
            </div>
            <div class="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <div class="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/60 text-amber-600 dark:text-amber-300 flex items-center justify-center font-bold mb-3">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h4 class="font-bold text-slate-900 dark:text-white text-base mb-1">Energy & Sustainable Grids</h4>
              <p class="text-sm text-slate-600 dark:text-slate-400">Predictive models forecast renewable energy generation from solar and wind farms, balancing power grids and curbing carbon emissions.</p>
            </div>
          </div>
        </section>

        <section id="sec-advantages" class="mb-12">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
            <span class="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-300 text-sm font-bold">5</span>
            Advantages of AI
          </h2>
          <div class="space-y-3 my-4">
            <div class="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
              <span class="text-emerald-500 font-bold text-lg">✓</span>
              <div>
                <strong class="text-slate-900 dark:text-white block text-sm font-semibold">Continuous High-Volume Processing:</strong>
                <p class="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Unlike humans, algorithms process millions of transactions or records per second without cognitive fatigue or distraction.</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
              <span class="text-emerald-500 font-bold text-lg">✓</span>
              <div>
                <strong class="text-slate-900 dark:text-white block text-sm font-semibold">Pattern Recognition in High Dimensions:</strong>
                <p class="text-xs text-slate-600 dark:text-slate-400 mt-0.5">AI easily isolates non-linear correlations across hundreds of statistical variables that human intuition cannot visualize.</p>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-800">
              <span class="text-emerald-500 font-bold text-lg">✓</span>
              <div>
                <strong class="text-slate-900 dark:text-white block text-sm font-semibold">Automating Repetitive Cognitive Work:</strong>
                <p class="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Frees human professionals from mundane sorting, data entry, and categorization to concentrate on empathy, creative ideation, and strategic choices.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="sec-challenges" class="mb-12">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
            <span class="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-300 text-sm font-bold">6</span>
            Challenges and Ethical Considerations
          </h2>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-4">
            While AI offers transformative potential, engineers, researchers, and students must recognize its limitations and societal risks:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div class="p-4 rounded-xl border border-rose-200 dark:border-rose-900/40 bg-rose-50/40 dark:bg-rose-950/20">
              <h4 class="font-bold text-rose-900 dark:text-rose-300 text-sm mb-1">Algorithmic Bias</h4>
              <p class="text-xs text-slate-600 dark:text-slate-400">If training datasets reflect historical human prejudices or under-represent minority populations, the resulting AI will perpetuate discriminatory decisions.</p>
            </div>
            <div class="p-4 rounded-xl border border-amber-200 dark:border-amber-900/40 bg-amber-50/40 dark:bg-amber-950/20">
              <h4 class="font-bold text-amber-900 dark:text-amber-300 text-sm mb-1">Black-Box Opacity</h4>
              <p class="text-xs text-slate-600 dark:text-slate-400">Complex deep neural networks contain billions of weights, making it mathematically difficult to explain exactly why a specific output was generated.</p>
            </div>
            <div class="p-4 rounded-xl border border-purple-200 dark:border-purple-900/40 bg-purple-50/40 dark:bg-purple-950/20">
              <h4 class="font-bold text-purple-900 dark:text-purple-300 text-sm mb-1">Data Privacy & Rights</h4>
              <p class="text-xs text-slate-600 dark:text-slate-400">Massive models require astronomical quantities of training text and images, sparking critical questions around copyright, intellectual property, and user consent.</p>
            </div>
          </div>
        </section>

        <section id="sec-future" class="mb-12">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
            <span class="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-300 text-sm font-bold">7</span>
            The Future of AI: Symbiosis & Augmented Intelligence
          </h2>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-4">
            The next era of technological progress will likely center on <strong>human-in-the-loop augmented intelligence</strong> rather than outright replacement. Future software engineers, doctors, and educators will collaborate alongside AI assistants, delegating syntactic tasks while supplying ethical judgment, critical context, and human empathy.
          </p>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            Platforms like LearnSphere play a pivotal role in this future by ensuring that conceptual AI literacy is freely available to any student, preventing a digital divide where only a privileged few understand how tomorrow's software operates.
          </p>
        </section>

        <section id="sec-takeaways" class="mb-12">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
            <span class="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-300 text-sm font-bold">8</span>
            Key Takeaways
          </h2>
          <div class="p-6 rounded-2xl bg-slate-900 text-white shadow-lg space-y-4">
            <div class="flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
              <p class="text-sm text-slate-200"><strong>AI is pattern discovery, not magic:</strong> Systems optimize mathematical functions over training data to predict outcomes on novel inputs.</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
              <p class="text-sm text-slate-200"><strong>Data quality dictates model fairness:</strong> Biased inputs inevitably produce biased decisions. Clean, representative datasets are fundamental.</p>
            </div>
            <div class="flex items-start gap-3">
              <span class="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
              <p class="text-sm text-slate-200"><strong>Focus on fundamentals first:</strong> Mastering core programming (Python), data structures, and statistics empowers you to use AI tools responsibly and innovatively.</p>
            </div>
          </div>
        </section>

        <section id="sec-conclusion" class="mb-8">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-3">
            <span class="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-300 text-sm font-bold">9</span>
            Conclusion
          </h2>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-4">
            Artificial Intelligence is fundamentally changing the landscape of problem-solving. By understanding its foundational mechanics—how data feeds algorithms and how those algorithms output predictions—you transition from a passive consumer into an empowered creator.
          </p>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            Continue your journey by exploring our related programming articles on Python basics, or dive into data analysis to start experimenting with your own datasets right away.
          </p>
        </section>
      `
    },

    {
      id: "python-basics-beginners-guide",
      slug: "python-basics-beginners-guide",
      title: "Python Basics: A Beginner’s Guide",
      subtitle: "Understand variables, conditions, loops, and functions with clear code patterns and real-world analogies.",
      category: "Programming",
      categoryId: "programming",
      shortDesc: "Understand variables, conditions, loops and functions with simple examples and practical programming exercises.",
      authorId: "alex",
      date: "Oct 10, 2026",
      isoDate: "2026-10-10",
      readingTime: "6 min read",
      featured: true,
      imageTheme: "programming",
      tags: ["Python", "Beginner", "Coding", "Functions", "Loops"],
      views: 4120,
      likes: 310,
      toc: [
        { id: "sec-why-python", title: "1. Why Python for Beginners?" },
        { id: "sec-variables", title: "2. Variables & Data Types" },
        { id: "sec-conditionals", title: "3. Conditional Logic" },
        { id: "sec-loops", title: "4. Loops (For & While)" },
        { id: "sec-functions", title: "5. Writing Reusable Functions" },
        { id: "sec-takeaways", title: "6. Key Takeaways" }
      ],
      contentHtml: `
        <section id="sec-why-python" class="mb-10">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Why Python for Beginners?</h2>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-4">
            Python is celebrated for its clean, readable syntax that resembles standard English. Unlike languages requiring verbose boilerplate code just to print a greeting, Python lets you concentrate on understanding core logic rather than memorizing punctuation.
          </p>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            Whether your goal is web development, data science, machine learning, or automated scripting, Python serves as the universal springboard for modern software engineering.
          </p>
        </section>

        <section id="sec-variables" class="mb-10">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Variables & Data Types</h2>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-4">
            Think of a variable as a labeled storage container. In Python, you do not need to specify data types explicitly; Python figures it out dynamically at runtime.
          </p>
          <div class="my-4 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-100 font-mono text-sm">
            <div class="bg-slate-800 px-4 py-2 border-b border-slate-700 text-xs text-slate-400">variables_demo.py</div>
            <pre class="p-4 overflow-x-auto"><code><span class="text-slate-500"># Storing student information</span>
student_name = <span class="text-green-300">"Priya Sharma"</span>     <span class="text-slate-500"># String (text)</span>
current_grade = <span class="text-amber-300">92</span>               <span class="text-slate-500"># Integer (whole number)</span>
attendance_rate = <span class="text-amber-300">98.5</span>          <span class="text-slate-500"># Float (decimal number)</span>
is_enrolled = <span class="text-purple-400">True</span>              <span class="text-slate-500"># Boolean (True/False)</span>

<span class="text-blue-400">print</span>(<span class="text-green-300">f"{student_name} holds an average of {current_grade}%."</span>)</code></pre>
          </div>
        </section>

        <section id="sec-conditionals" class="mb-10">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Conditional Logic</h2>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-4">
            Conditional branching allows software to make decisions based on dynamic state using <code>if</code>, <code>elif</code>, and <code>else</code> keywords:
          </p>
          <div class="my-4 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-100 font-mono text-sm">
            <pre class="p-4 overflow-x-auto"><code>score = <span class="text-amber-300">85</span>

<span class="text-purple-400">if</span> score >= <span class="text-amber-300">90</span>:
    grade = <span class="text-green-300">"A - Excellent Performance"</span>
<span class="text-purple-400">elif</span> score >= <span class="text-amber-300">75</span>:
    grade = <span class="text-green-300">"B - Good Understanding"</span>
<span class="text-purple-400">else</span>:
    grade = <span class="text-green-300">"Keep practicing!"</span>

<span class="text-blue-400">print</span>(grade)</code></pre>
          </div>
        </section>

        <section id="sec-loops" class="mb-10">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Loops (For & While)</h2>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-4">
            Computers excel at repeating repetitive calculations without error. Python's <code>for</code> loop iterates smoothly through sequences:
          </p>
          <div class="my-4 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-100 font-mono text-sm">
            <pre class="p-4 overflow-x-auto"><code>study_topics = [<span class="text-green-300">"HTML"</span>, <span class="text-green-300">"CSS"</span>, <span class="text-green-300">"JavaScript"</span>, <span class="text-green-300">"Python"</span>]

<span class="text-purple-400">for</span> index, topic <span class="text-purple-400">in</span> <span class="text-blue-400">enumerate</span>(study_topics, start=<span class="text-amber-300">1</span>):
    <span class="text-blue-400">print</span>(<span class="text-green-300">f"Module {index}: Learn {topic}"</span>)</code></pre>
          </div>
        </section>

        <section id="sec-functions" class="mb-10">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Writing Reusable Functions</h2>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-4">
            Functions package useful logic into reusable blocks, preventing code duplication and keeping programs modular.
          </p>
          <div class="my-4 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-100 font-mono text-sm">
            <pre class="p-4 overflow-x-auto"><code><span class="text-purple-400">def</span> <span class="text-blue-400">calculate_gpa</span>(grades_list):
    <span class="text-slate-500">"""Calculates average percentage score."""</span>
    total = <span class="text-blue-400">sum</span>(grades_list)
    average = total / <span class="text-blue-400">len</span>(grades_list)
    <span class="text-purple-400">return</span> <span class="text-blue-400">round</span>(average, <span class="text-amber-300">2</span>)

my_grades = [<span class="text-amber-300">88</span>, <span class="text-amber-300">92</span>, <span class="text-amber-300">79</span>, <span class="text-amber-300">95</span>]
<span class="text-blue-400">print</span>(<span class="text-green-300">f"Semester GPA: {calculate_gpa(my_grades)}%"</span>)</code></pre>
          </div>
        </section>

        <section id="sec-takeaways" class="mb-6">
          <div class="p-6 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-950 dark:text-blue-200">
            <h3 class="font-bold text-lg mb-3">Key Takeaways</h3>
            <ul class="space-y-2 text-sm">
              <li>• Python uses indentation (whitespace) to structure code blocks instead of curly braces.</li>
              <li>• Break complex problems down into small, tested functions before combining them.</li>
              <li>• The best way to learn programming is hands-on typing and debugging rather than passive reading.</li>
            </ul>
          </div>
        </section>
      `
    },

    {
      id: "understanding-apis-for-beginners",
      slug: "understanding-apis-for-beginners",
      title: "Understanding APIs for Beginners",
      subtitle: "Learn how modern applications exchange data using HTTP, JSON, and REST architectural principles.",
      category: "Web Development",
      categoryId: "web-development",
      shortDesc: "Learn how applications communicate with each other using APIs, REST principles, and client-server request methods.",
      authorId: "maya",
      date: "Oct 08, 2026",
      isoDate: "2026-10-08",
      readingTime: "5 min read",
      featured: true,
      imageTheme: "web",
      tags: ["API", "REST", "HTTP", "JSON", "Fullstack"],
      views: 2980,
      likes: 184,
      toc: [
        { id: "sec-what-is-api", title: "1. What is an API?" },
        { id: "sec-restaurant-analogy", title: "2. The Restaurant Analogy" },
        { id: "sec-http-methods", title: "3. Common HTTP Methods" },
        { id: "sec-json-format", title: "4. The JSON Data Standard" },
        { id: "sec-api-fetch-code", title: "5. Calling an API in JavaScript" }
      ],
      contentHtml: `
        <section id="sec-what-is-api" class="mb-10">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. What is an API?</h2>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-4">
            <strong>API</strong> stands for <em>Application Programming Interface</em>. It acts as a standardized contract and communication bridge that allows two distinct software systems to request and exchange information smoothly.
          </p>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            When you check the weather on your smartphone, your weather app does not maintain its own satellite radar. Instead, it sends an API request to a meteorology service's server, which replies with the temperature, humidity, and forecast in structured data.
          </p>
        </section>

        <section id="sec-restaurant-analogy" class="mb-10">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. The Restaurant Analogy</h2>
          <div class="p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/60 my-4 text-amber-950 dark:text-amber-200">
            <h4 class="font-bold text-base mb-2">How to Picture an API Request:</h4>
            <ul class="space-y-2 text-sm">
              <li><strong>You (The Client):</strong> You sit at a table and review the menu of available items.</li>
              <li><strong>The Waiter (The API):</strong> You place your order. The waiter conveys your exact request to the kitchen in a standardized format.</li>
              <li><strong>The Kitchen (The Server / Database):</strong> Prepares the requested meal and hands it back to the waiter.</li>
              <li><strong>The Delivery:</strong> The waiter serves your food back to your table. You enjoy the meal without ever entering the kitchen.</li>
            </ul>
          </div>
        </section>

        <section id="sec-http-methods" class="mb-10">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Common HTTP Methods</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
            <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <span class="px-2 py-0.5 rounded text-xs font-bold bg-green-100 text-green-800 dark:bg-green-900/60 dark:text-green-300">GET</span>
              <h4 class="font-bold text-slate-900 dark:text-white text-sm mt-2">Retrieve Data</h4>
              <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Fetches information from a server without modifying anything (e.g., viewing a user profile).</p>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <span class="px-2 py-0.5 rounded text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300">POST</span>
              <h4 class="font-bold text-slate-900 dark:text-white text-sm mt-2">Create New Data</h4>
              <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Submits a payload to create a new record (e.g., submitting an educational assignment).</p>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <span class="px-2 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300">PUT / PATCH</span>
              <h4 class="font-bold text-slate-900 dark:text-white text-sm mt-2">Update Data</h4>
              <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Modifies an existing resource (e.g., changing your email or profile description).</p>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <span class="px-2 py-0.5 rounded text-xs font-bold bg-rose-100 text-rose-800 dark:bg-rose-900/60 dark:text-rose-300">DELETE</span>
              <h4 class="font-bold text-slate-900 dark:text-white text-sm mt-2">Remove Data</h4>
              <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Deletes a specified item permanently from the database.</p>
            </div>
          </div>
        </section>

        <section id="sec-json-format" class="mb-10">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. The JSON Data Standard</h2>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-4">
            Nearly all modern web APIs transmit payloads formatted in <strong>JSON (JavaScript Object Notation)</strong> because it is human-readable and universal across every programming language:
          </p>
          <div class="my-4 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-100 font-mono text-sm">
            <pre class="p-4 overflow-x-auto"><code>{
  <span class="text-blue-300">"status"</span>: <span class="text-green-300">"success"</span>,
  <span class="text-blue-300">"course_id"</span>: <span class="text-amber-300">101</span>,
  <span class="text-blue-300">"title"</span>: <span class="text-green-300">"Web Development Fundamentals"</span>,
  <span class="text-blue-300">"modules"</span>: [<span class="text-green-300">"HTML"</span>, <span class="text-green-300">"CSS"</span>, <span class="text-green-300">"APIs"</span>],
  <span class="text-blue-300">"is_free"</span>: <span class="text-purple-400">true</span>
}</code></pre>
          </div>
        </section>

        <section id="sec-api-fetch-code" class="mb-6">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Calling an API in JavaScript</h2>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-4">
            Here is how you fetch data in modern browser JavaScript using the native <code>async/await</code> syntax:
          </p>
          <div class="my-4 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-100 font-mono text-sm">
            <pre class="p-4 overflow-x-auto"><code><span class="text-purple-400">async function</span> <span class="text-blue-400">loadArticleData</span>() {
  <span class="text-purple-400">try</span> {
    <span class="text-purple-400">const</span> response = <span class="text-purple-400">await</span> <span class="text-blue-400">fetch</span>(<span class="text-green-300">'https://api.learnsphere.org/v1/posts/ai-basics'</span>);
    <span class="text-purple-400">const</span> data = <span class="text-purple-400">await</span> response.<span class="text-blue-400">json</span>();
    <span class="text-blue-400">console</span>.<span class="text-blue-400">log</span>(<span class="text-green-300">'Article title:'</span>, data.title);
  } <span class="text-purple-400">catch</span> (error) {
    <span class="text-blue-400">console</span>.<span class="text-blue-400">error</span>(<span class="text-green-300">'Network error:'</span>, error);
  }
}</code></pre>
          </div>
        </section>
      `
    },

    {
      id: "introduction-to-cybersecurity",
      slug: "introduction-to-cybersecurity",
      title: "Introduction to Cybersecurity",
      subtitle: "Explore common cyber threats, social engineering, encryption fundamentals, and essential defense habits.",
      category: "Cybersecurity",
      categoryId: "cybersecurity",
      shortDesc: "Explore common cyber threats and basic methods of protecting digital information, identities, and networked systems.",
      authorId: "marcus",
      date: "Oct 05, 2026",
      isoDate: "2026-10-05",
      readingTime: "8 min read",
      featured: true,
      imageTheme: "security",
      tags: ["Cybersecurity", "CIA Triad", "Encryption", "Digital Safety", "Phishing"],
      views: 3150,
      likes: 245,
      toc: [
        { id: "sec-why-security-matters", title: "1. Why Cybersecurity Matters" },
        { id: "sec-cia-triad", title: "2. The CIA Security Triad" },
        { id: "sec-common-threats", title: "3. Common Cyber Threat Vectors" },
        { id: "sec-defense-habits", title: "4. Essential Defense Habits" },
        { id: "sec-takeaways", title: "5. Key Takeaways" }
      ],
      contentHtml: `
        <section id="sec-why-security-matters" class="mb-10">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Why Cybersecurity Matters</h2>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-4">
            In an interconnected global landscape, digital security is no longer just an IT department concern. From financial banking credentials to academic records and hospital infrastructure, critical assets exist as digital bits traveling across public networks.
          </p>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            Cybersecurity is the discipline and practice of safeguarding computers, servers, mobile devices, electronic systems, networks, and data from malicious unauthorized attacks.
          </p>
        </section>

        <section id="sec-cia-triad" class="mb-10">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. The CIA Security Triad</h2>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-4">
            Security professionals evaluate every vulnerability against the foundational <strong>CIA Triad</strong>:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div class="p-5 rounded-xl border border-blue-200 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-950/20">
              <h4 class="font-bold text-blue-900 dark:text-blue-300 text-base mb-1">Confidentiality</h4>
              <p class="text-sm text-slate-600 dark:text-slate-400">Ensuring sensitive data is visible only to authorized individuals using encryption and access controls.</p>
            </div>
            <div class="p-5 rounded-xl border border-teal-200 dark:border-teal-900 bg-teal-50/50 dark:bg-teal-950/20">
              <h4 class="font-bold text-teal-900 dark:text-teal-300 text-base mb-1">Integrity</h4>
              <p class="text-sm text-slate-600 dark:text-slate-400">Guaranteeing data remains accurate, complete, and untampered with in storage or during network transmission.</p>
            </div>
            <div class="p-5 rounded-xl border border-amber-200 dark:border-amber-900 bg-amber-50/50 dark:bg-amber-950/20">
              <h4 class="font-bold text-amber-900 dark:text-amber-300 text-base mb-1">Availability</h4>
              <p class="text-sm text-slate-600 dark:text-slate-400">Assuring authorized users have reliable, uninterrupted access to systems when needed via redundant infrastructure.</p>
            </div>
          </div>
        </section>

        <section id="sec-common-threats" class="mb-10">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Common Cyber Threat Vectors</h2>
          <div class="space-y-4 my-4">
            <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <h4 class="font-bold text-slate-900 dark:text-white text-base mb-1">Phishing & Social Engineering</h4>
              <p class="text-sm text-slate-600 dark:text-slate-400">Deceptive emails or clone websites impersonating legitimate institutions (banks, colleges) to trick victims into revealing passwords or credit credentials.</p>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <h4 class="font-bold text-slate-900 dark:text-white text-base mb-1">Ransomware</h4>
              <p class="text-sm text-slate-600 dark:text-slate-400">Malware that silently encrypts a victim's personal or institutional files, demanding a ransom payment in exchange for the decryption key.</p>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <h4 class="font-bold text-slate-900 dark:text-white text-base mb-1">Man-in-the-Middle (MitM) Attacks</h4>
              <p class="text-sm text-slate-600 dark:text-slate-400">Eavesdropping on unencrypted public Wi-Fi connections to intercept session tokens and private messages.</p>
            </div>
          </div>
        </section>

        <section id="sec-defense-habits" class="mb-10">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Essential Defense Habits</h2>
          <div class="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 my-4 text-emerald-950 dark:text-emerald-200">
            <h4 class="font-bold text-base mb-3">Student Checklist for Digital Safety:</h4>
            <ul class="space-y-2.5 text-sm">
              <li><strong>Enable 2FA Everywhere:</strong> Use authenticator apps (TOTP) rather than SMS where possible.</li>
              <li><strong>Use a Password Manager:</strong> Never reuse the same password across multiple academic or personal accounts.</li>
              <li><strong>Verify HTTPS & Certificates:</strong> Ensure websites display a secure padlock before entering any sensitive details.</li>
              <li><strong>Keep Systems Patched:</strong> Regularly update your operating system and browser to apply critical vulnerability patches.</li>
            </ul>
          </div>
        </section>

        <section id="sec-takeaways" class="mb-6">
          <div class="p-6 rounded-2xl bg-slate-900 text-white">
            <h3 class="font-bold text-lg mb-2">Key Takeaway</h3>
            <p class="text-sm text-slate-300">Cybersecurity is not an impenetrable wall; it is a layered defense model. The human factor is frequently the most targeted entry point, making continuous security awareness the best firewall.</p>
          </div>
        </section>
      `
    },

    {
      id: "data-science-fundamentals",
      slug: "data-science-fundamentals",
      title: "Data Science Fundamentals: From Raw Numbers to Insights",
      subtitle: "Discover the data analysis lifecycle, exploratory techniques, and how to tell compelling stories with charts.",
      category: "Data Science",
      categoryId: "data-science",
      shortDesc: "Discover the data lifecycle, exploratory analysis, and how to tell compelling educational stories with charts and metrics.",
      authorId: "evelyn",
      date: "Oct 03, 2026",
      isoDate: "2026-10-03",
      readingTime: "6 min read",
      featured: false,
      imageTheme: "data",
      tags: ["Data Science", "Python", "Pandas", "Charts", "Statistics"],
      views: 1840,
      likes: 142,
      toc: [
        { id: "sec-data-lifecycle", title: "1. The Data Science Lifecycle" },
        { id: "sec-eda", title: "2. Exploratory Data Analysis" },
        { id: "sec-storytelling", title: "3. Storytelling with Charts" }
      ],
      contentHtml: `
        <section id="sec-data-lifecycle" class="mb-10">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. The Data Science Lifecycle</h2>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-4">
            Data Science is the disciplined process of extracting meaningful insights from raw, noisy information. The classic data workflow follows five systematic stages:
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-5 gap-2 my-6 text-center">
            <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-bold">1. Collection</div>
            <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-bold">2. Cleaning</div>
            <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-bold">3. Exploration</div>
            <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-bold">4. Modeling</div>
            <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-bold">5. Communication</div>
          </div>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
            Up to 80% of a data scientist's time is spent in <em>cleaning and preprocessing</em>: handling missing values, parsing dates, and stripping outliers so the analytical models receive trustworthy inputs.
          </p>
        </section>

        <section id="sec-eda" class="mb-10">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Exploratory Data Analysis (EDA)</h2>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-4">
            EDA is the detective work of data science. Instead of immediately applying complex machine learning algorithms, you examine distributions, calculate summary statistics (mean, median, standard deviation), and identify correlation clusters using tools like Python Pandas.
          </p>
        </section>

        <section id="sec-storytelling" class="mb-6">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Storytelling with Charts</h2>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-4">
            A dataset is only as useful as the decisions it informs. Good visualization transforms dry spreadsheet columns into intuitive narratives that stakeholders can act upon immediately.
          </p>
        </section>
      `
    },

    {
      id: "git-and-github-essential-guide",
      slug: "git-and-github-essential-guide",
      title: "Mastering Git & GitHub: Version Control for Beginners",
      subtitle: "Stop fearing the command line. Learn git commit, branch, merge, pull requests, and collaborative project workflows.",
      category: "Career & Skills",
      categoryId: "career-skills",
      shortDesc: "Stop fearing the terminal. Learn git commit, branch, merge, pull requests, and collaborative repository workflows.",
      authorId: "alex",
      date: "Sep 28, 2026",
      isoDate: "2026-09-28",
      readingTime: "5 min read",
      featured: false,
      imageTheme: "career",
      tags: ["Git", "GitHub", "Version Control", "Career", "Open Source"],
      views: 2650,
      likes: 198,
      toc: [
        { id: "sec-why-git", title: "1. Why Version Control?" },
        { id: "sec-git-vs-github", title: "2. Git vs. GitHub" },
        { id: "sec-essential-commands", title: "3. Essential Git Commands" }
      ],
      contentHtml: `
        <section id="sec-why-git" class="mb-10">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Why Version Control?</h2>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-4">
            Have you ever saved files named <code>project_v2_final_FINAL_edit.zip</code>? Version control eliminates this chaos. <strong>Git</strong> is a distributed version control system that records snapshots of every change in your code over time, allowing you to rewind errors and branch into new experiments safely.
          </p>
        </section>

        <section id="sec-git-vs-github" class="mb-10">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Git vs. GitHub</h2>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-4">
            A common point of confusion for students: <strong>Git</strong> is the local command-line tool tracking changes on your computer. <strong>GitHub</strong> is a cloud platform hosting those repositories online, providing team pull requests, code reviews, and project management.
          </p>
        </section>

        <section id="sec-essential-commands" class="mb-6">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Essential Git Commands</h2>
          <div class="my-4 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-100 font-mono text-sm">
            <pre class="p-4 overflow-x-auto"><code><span class="text-slate-500"># 1. Initialize a new repo</span>
git init

<span class="text-slate-500"># 2. Stage modified files</span>
git add .

<span class="text-slate-500"># 3. Create a snapshot with meaningful message</span>
git commit -m <span class="text-green-300">"Add responsive navbar and theme switcher"</span>

<span class="text-slate-500"># 4. Push branch to GitHub</span>
git push origin main</code></pre>
          </div>
        </section>
      `
    },

    {
      id: "responsive-web-design-principles",
      slug: "responsive-web-design-principles",
      title: "Modern Responsive Web Design: Flexbox, Grid, & Mobile-First",
      subtitle: "Build web layouts that automatically adapt from compact smartphones to ultra-wide desktop monitors.",
      category: "Web Development",
      categoryId: "web-development",
      shortDesc: "Build layouts that automatically adapt from mobile phones to ultra-wide displays using modern CSS architecture.",
      authorId: "maya",
      date: "Sep 24, 2026",
      isoDate: "2026-09-24",
      readingTime: "7 min read",
      featured: false,
      imageTheme: "web",
      tags: ["CSS", "Flexbox", "CSS Grid", "Responsive", "Mobile-First"],
      views: 2100,
      likes: 165,
      toc: [
        { id: "sec-mobile-first", title: "1. The Mobile-First Mindset" },
        { id: "sec-flexbox-vs-grid", title: "2. Flexbox vs. CSS Grid" },
        { id: "sec-viewports", title: "3. Fluid Units & Viewports" }
      ],
      contentHtml: `
        <section id="sec-mobile-first" class="mb-10">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. The Mobile-First Mindset</h2>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-4">
            Over 60% of worldwide web traffic originates on mobile devices. Designing <em>mobile-first</em> means crafting your layout for constrained screen dimensions first, ensuring lean performance and crisp typography, and then progressively enhancing with multi-column grids as screen real estate increases.
          </p>
        </section>

        <section id="sec-flexbox-vs-grid" class="mb-10">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Flexbox vs. CSS Grid</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <h4 class="font-bold text-blue-600 dark:text-blue-400 text-base mb-1">Flexbox (1-Dimensional)</h4>
              <p class="text-xs text-slate-600 dark:text-slate-400">Ideal for aligning items along a single axis (either row OR column), such as navigation bars, badge tags, and button groups.</p>
            </div>
            <div class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <h4 class="font-bold text-indigo-600 dark:text-indigo-400 text-base mb-1">CSS Grid (2-Dimensional)</h4>
              <p class="text-xs text-slate-600 dark:text-slate-400">Ideal for orchestrating rows AND columns simultaneously, such as photo galleries, dashboard cards, and full-page layouts.</p>
            </div>
          </div>
        </section>

        <section id="sec-viewports" class="mb-6">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Fluid Units & Viewports</h2>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-4">
            Modern responsive design avoids rigid pixel widths in favor of fluid percentages, <code>rem</code> typography scales, and CSS <code>clamp()</code> functions that scale headings harmoniously across viewport widths.
          </p>
        </section>
      `
    },

    {
      id: "resume-and-tech-portfolio-guide",
      slug: "resume-and-tech-portfolio-guide",
      title: "Crafting a Standout Student Tech Resume and Project Portfolio",
      subtitle: "Actionable strategies for college students to showcase GitHub projects, write impact bullets, and prepare for interviews.",
      category: "Career & Skills",
      categoryId: "career-skills",
      shortDesc: "Proven strategies for college students to showcase GitHub repositories, write impact-driven bullet points, and ace entry-level interviews.",
      authorId: "alex",
      date: "Sep 10, 2026",
      isoDate: "2026-09-10",
      readingTime: "6 min read",
      featured: false,
      imageTheme: "career",
      tags: ["Resume", "Portfolio", "Internship", "College", "Interview Prep"],
      views: 3780,
      likes: 290,
      toc: [
        { id: "sec-portfolio-first", title: "1. Why Projects Trump Grades" },
        { id: "sec-impact-bullets", title: "2. The XYZ Impact Bullet Formula" },
        { id: "sec-showcase", title: "3. What Recruiters Look For" }
      ],
      contentHtml: `
        <section id="sec-portfolio-first" class="mb-10">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Why Projects Trump Grades</h2>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-4">
            In modern technology hiring, recruiters and engineering leads look for evidence of execution. While theoretical classroom knowledge matters, demonstrating that you can build, deploy, and document a real functional web application or data pipeline sets you leagues ahead of competitors.
          </p>
        </section>

        <section id="sec-impact-bullets" class="mb-10">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. The Google XYZ Impact Bullet Formula</h2>
          <div class="p-6 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 text-blue-950 dark:text-blue-200 my-4">
            <h4 class="font-bold text-base mb-2">Formula: "Accomplished [X] as measured by [Y], by doing [Z]"</h4>
            <p class="text-sm mt-2"><strong>Weak:</strong> "Built an educational website with search."</p>
            <p class="text-sm mt-1 font-semibold text-emerald-700 dark:text-emerald-400"><strong>Strong:</strong> "Engineered a responsive educational blog platform (LearnSphere) supporting UN SDG 4, decreasing page load by 40% using semantic HTML5 and vanilla JavaScript client-side routing."</p>
          </div>
        </section>

        <section id="sec-showcase" class="mb-6">
          <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. What Recruiters Look For</h2>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-4">
            Ensure your GitHub repositories have clean README documentation, live demonstration links, and commit histories that demonstrate iterative problem-solving rather than single massive code drops.
          </p>
        </section>
      `
    }
  ]
};

if (typeof window !== 'undefined') {
  window.LearnSphereData = LearnSphereData;
}

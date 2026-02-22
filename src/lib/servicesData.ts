import type { LucideIcon } from 'lucide-react';
import {
  Code,
  Zap,
  Smartphone,
  Shield,
  Search,
  PenTool,
  Layout,
  Share2,
  FileText,
} from 'lucide-react';

export type ServiceData = {
  title: string;
  description: string;
  icon: string;
  steps: { title: string; description: string; visual: string }[];
  features: { icon: LucideIcon; title: string; description: string }[];
  content: {
    heading: string;
    text: string;
    benefits: string[];
    image?: string;
  };
};

export const servicesData: Record<string, ServiceData> = {
  'website-development-in-nepal': {
    title: 'Website Development',
    description:
      'We build custom websites that actually generate leads — not just look pretty. Using Next.js and modern architecture, we create sites that load under 2 seconds and rank on Google from day one.',
    icon: '/originals/media/services/website-service.svg',
    features: [
      {
        icon: Code,
        title: 'Built to Rank',
        description:
          'Technical SEO baked into the code — not bolted on after. Your site ships with proper structure, schema, and Core Web Vitals already optimized.',
      },
      {
        icon: Zap,
        title: 'Speed That Converts',
        description:
          "We don't ship bloated themes. Every site scores 95+ on Lighthouse because we write lean, optimized code that loads fast even on slow connections.",
      },
      {
        icon: Smartphone,
        title: 'Mobile-First, Always',
        description:
          'Over 60% of your traffic will come from phones. We design and build for small screens first, then scale up — so nothing breaks or feels clunky.',
      },
      {
        icon: Shield,
        title: 'Built for Growth',
        description:
          'No custom CMS that breaks when you update something. We use modern tools that let you add pages, products, or blog posts without calling us every time.',
      },
    ],
    steps: [
      {
        title: 'Discovery & Planning',
        description:
          'We analyze your business goals, competitors, and target audience to create a data-driven site structure. Our planning ensures every page guides visitors naturally toward conversion, based on real user behavior and industry best practices.',
        visual: '/originals/media/services/website-service.svg',
      },
      {
        title: 'Design & Development',
        description:
          'We build with Next.js and Tailwind — the same stack used by Netflix and Twitch — ensuring your site is fast, scalable, and secure. Development focuses on performance from the start, with regular previews so you see progress weekly.',
        visual: '/originals/media/services/coding-service.svg',
      },
      {
        title: 'Launch & Beyond',
        description:
          'After rigorous testing across devices and browsers, we deploy your site and provide training for easy updates. Ongoing support and maintenance are available to keep your site secure and up-to-date as your business grows.',
        visual: '/originals/media/services/work-time.svg',
      },
    ],
    content: {
      heading: 'Websites That Actually Bring in Clients',
      text: "We've stopped counting how many \"beautiful\" websites we've seen that get zero inquiries. That's not what we build for you. Every line of code, every design decision is made with one goal: turning visitors into leads. Whether you need a simple 5-page site or a full e-commerce platform, we focus on performance, clarity, and conversion — not just making things look \"cool.\"",
      benefits: [
        'No page builders or bloated themes — just clean, custom code',
        'SEO structure built in, so you\'re not fixing it later',
        'Load times under 2 seconds (most agencies don\'t prioritize this)',
        'You actually own and can move your site if you want to',
      ],
      image: '/media/website-portfolio.png',
    },
  },

  'mobile-app-development': {
    title: 'App Development',
    description:
      'Cross-platform mobile apps that feel native but don\'t require maintaining two separate codebases. We use React Native to ship faster and keep your costs reasonable.',
    icon: '/originals/media/services/mobile-app-service.svg',
    features: [
      {
        icon: Smartphone,
        title: 'One Codebase, Two Platforms',
        description:
          'iOS and Android from the same code — which means updates ship everywhere at once and your maintenance costs stay closer to half.',
      },
      {
        icon: Zap,
        title: "Performance That Doesn't Lie",
        description:
          'We avoid the "it works on my device" trap. Testing happens on real hardware, and animations stay at 60fps even on mid-range phones.',
      },
      {
        icon: Shield,
        title: 'Security From the Start',
        description:
          'Authentication flows, API keys, and user data never get hardcoded or exposed. We build with breach scenarios in mind, not just happy paths.',
      },
      {
        icon: Code,
        title: 'Clean Architecture',
        description:
          "The codebase won't turn into spaghetti six months from now. We structure things so adding features later doesn't require rewriting everything.",
      },
    ],
    steps: [
      {
        title: 'Strategy & UX Design',
        description:
          'We define the MVP scope precisely, focusing on essential features that deliver value. Our user flows are designed based on usability testing, ensuring intuitive navigation that keeps users engaged.',
        visual: '/originals/media/services/mobile-app-service.svg',
      },
      {
        title: 'Development & Testing',
        description:
          'We build incrementally, testing on both iOS and Android devices after each feature. This approach catches issues early and lets you see tangible progress every week, not just at the end.',
        visual: '/originals/media/services/app-password.svg',
      },
      {
        title: 'Deployment & Support',
        description:
          'We manage the entire App Store and Play Store submission process, including handling rejections. Post-launch, we offer maintenance and updates to ensure your app remains compatible with new OS versions.',
        visual: '/originals/media/services/coding-service.svg',
      },
    ],
    content: {
      heading: 'Mobile Apps That Don\'t Break After Launch',
      text: "We've fixed enough \"finished\" apps to know that most agencies stop caring once they've been paid. That's not how we work. We build React Native apps that are maintainable, testable, and actually survive contact with real users. Push notifications, offline support, camera integration, payment flows — we've built them all and can build them for you without the \"we'll figure that out later\" approach.",
      benefits: [
        'One codebase for both iOS and Android — lower maintenance',
        'No surprises: you see progress every week, not just at the end',
        "Handles slow networks gracefully (most users aren't on fiber)",
        'App Store/Play Store submission handled — including rejections',
      ],
      image: '/media/mobile-app-portfolio.png',
    },
  },

  'gso-ai': {
    title: 'GSO AI (SEO Services)',
    description:
      "SEO isn't about tricks anymore — it's about being the best answer to what people are searching for. We use AI tools to find gaps your competitors missed and build content that actually answers questions.",
    icon: '/originals/media/services/seo-main.svg',
    features: [
      {
        icon: Search,
        title: 'Smarter Keyword Research',
        description:
          "We don't just look at search volume. We analyze search intent, SERP features, and use AI to find long-tail opportunities with actual traffic potential.",
      },
      {
        icon: Zap,
        title: 'Technical SEO That Works',
        description:
          "Crawl errors, indexation issues, slow pages, broken schema — we fix the stuff that's actively hurting your rankings before adding anything new.",
      },
      {
        icon: Share2,
        title: 'Links That Actually Count',
        description:
          'No PBNs, no spam directories. We go after relevant backlinks from sites that pass authority, not just any link someone will sell you.',
      },
      {
        icon: FileText,
        title: 'Content That Ranks AND Reads Well',
        description:
          'AI helps us outline and research, but real writers craft the final piece. The result: content search engines trust and humans actually finish.',
      },
    ],
    steps: [
      {
        title: 'AI-Powered Research',
        description:
          'We use advanced AI tools to analyze your niche, identifying topic clusters and content gaps competitors overlook. Our research uncovers high-potential keywords and angles to dominate search results.',
        visual: '/originals/media/services/seo-main.svg',
      },
      {
        title: 'Technical Fixes',
        description:
          'We audit your site for crawl errors, indexation issues, and mobile usability, fixing technical problems before investing in content. Proper schema markup and site structure are implemented to maximize visibility.',
        visual: '/originals/media/services/grow.svg',
      },
      {
        title: 'Authority Growth',
        description:
          'We build sustainable backlinks from authoritative sources and create content that attracts natural links. Monthly tracking focuses on long-term ranking growth, avoiding risky tactics that lead to penalties.',
        visual: '/originals/media/services/marketing-service.svg',
      },
    ],
    content: {
      heading: 'Rank Higher Without Playing Google Whac-A-Mole',
      text: 'Most SEO "experts" chase algorithm updates and sell you on magic fixes. We don\'t. We focus on fundamentals: technical health, genuinely helpful content, and real authority. Yes, we use AI to work faster and find insights humans miss. But the strategy is still human-led, and the content is still written for people — not just search engine crawlers. If you want sustainable rankings instead of "hacks," this is how we\'ll work.',
      benefits: [
        'No "black hat" tactics that get you penalized later',
        'AI helps with research, but real writers create the content',
        'Technical SEO fixed first — chasing rankings on a broken site is pointless',
        "Monthly reporting that actually explains what's working (and what isn't)",
      ],
      image: '/media/seo-portfolio.png',
    },
  },

  'seo-in-nepal': {
    title: 'SEO Services in Nepal',
    description:
      'Local SEO that actually works in Nepal — not copy-pasted Western strategies. We help Nepali businesses show up when local customers are searching.',
    icon: '/originals/media/services/seo-service.svg',
    features: [
      {
        icon: Search,
        title: 'Nepali Market Keywords',
        description:
          '"Web designer in Kathmandu" is different from "website banauxa." We target what Nepali users actually type, in both English and Devanagari when it matters.',
      },
      {
        icon: Zap,
        title: 'Local On-Page SEO',
        description:
          'Google My Business optimization, local citations, and Nepali-specific schema markup so Google knows exactly where and who you serve.',
      },
      {
        icon: Share2,
        title: 'Local Link Building',
        description:
          'Links from Nepali directories, news sites, and business partners that actually signal local relevance — not random global directories.',
      },
      {
        icon: FileText,
        title: 'Content for Nepali Audiences',
        description:
          'Content that addresses local problems, references local context, and builds trust with Nepali readers — not generic translated stuff.',
      },
    ],
    steps: [
      {
        title: 'Local Market Analysis',
        description:
          'We research Nepali search behavior, identifying both English and Devanagari keywords your local customers use. Our analysis includes question-based queries that signal purchase intent.',
        visual: '/originals/media/services/seo-service.svg',
      },
      {
        title: 'Local Optimization',
        description:
          'We fully optimize your Google My Business profile, ensure NAP consistency across all platforms, and build local citations. These foundational steps are proven to boost local pack rankings.',
        visual: '/originals/media/services/marketing-service.svg',
      },
      {
        title: 'Visibility Monitoring',
        description:
          'We track your rankings specifically in Nepali search results, providing monthly reports with actionable insights. Our focus is on getting you found by customers in your target cities.',
        visual: '/originals/media/services/grow.svg',
      },
    ],
    content: {
      heading: 'Show Up When Nepal Searches for What You Do',
      text: "We've seen too many Nepali businesses pay for SEO that targets \"global\" audiences when 90% of their customers live within 10 kilometers. That's wasted money. We focus on getting you found by local customers who are ready to buy. Whether you're a restaurant in Thamel, a trekking agency in Pokhara, or a tech shop in Lalitpur — we optimize for the searches that actually bring people through your door.",
      benefits: [
        'Targets what Nepali customers actually search for',
        'Google My Business fully optimized (most businesses mess this up)',
        'Local citations and directories that matter in Nepal',
        'No generic "global SEO" tactics that waste your budget',
      ],
      image: '/media/seo-portfolio.png',
    },
  },

  'system-software-development': {
    title: 'System/Software Development',
    description:
      "Custom software for when off-the-shelf tools don't fit. We build internal tools, automation systems, and integrations that actually match how your business works.",
    icon: '/originals/media/services/backend-service.svg',
    features: [
      {
        icon: Code,
        title: 'Built Around Your Workflow',
        description:
          "We don't force you to change how you operate. The software adapts to your team, not the other way around.",
      },
      {
        icon: Shield,
        title: 'Reliable & Maintainable',
        description:
          "No \"works on my machine\" syndrome. We build with proper error handling, logging, and documentation so you're not stuck when something breaks.",
      },
      {
        icon: Zap,
        title: 'Automation That Actually Saves Time',
        description:
          "If your team is doing the same data entry or file conversion every day, that's money burning. We automate the repetitive stuff so humans can focus on work that matters.",
      },
      {
        icon: Share2,
        title: 'Integrations That Work',
        description:
          "Need your website to talk to your accounting software? Your CRM to sync with your email platform? We build bridges between tools that don't naturally talk to each other.",
      },
    ],
    steps: [
      {
        title: 'System Architecture',
        description:
          'We design comprehensive system architecture before coding, mapping data flows and integrations. This upfront planning eliminates 80% of potential issues, saving time and money during development.',
        visual: '/originals/media/services/backend-service.svg',
      },
      {
        title: 'Logic Implementation',
        description:
          'We choose the right tech stack—Python, Node.js, or Java—based on your scalability and maintenance needs. Our code is clean, documented, and built for long-term reliability.',
        visual: '/originals/media/services/coding-service.svg',
      },
      {
        title: 'API & Integrations',
        description:
          'We ensure your new software integrates seamlessly with existing tools via custom APIs. Automated data sync eliminates manual exports and reduces human error.',
        visual: '/originals/media/services/app-password.svg',
      },
    ],
    content: {
      heading: 'Software That Fits, Instead of Software You Fit Into',
      text: "We've worked with enough businesses to know that \"standard\" software rarely fits perfectly. You end up with workarounds, manual exports, and spreadsheets glued together with hope. We build custom systems that match your actual workflows. Inventory management, client portals, internal dashboards, approval systems — if you can describe it, we can build it. And we'll build it so you're not dependent on us forever.",
      benefits: [
        'Built around your specific workflow — no process changes required',
        "Clear documentation so your team isn't guessing how things work",
        'You own the code — no proprietary lock-in',
        'We can train your team or handle maintenance — your choice',
      ],
      image: '/media/software-portfolio.png',
    },
  },

  'graphics-design': {
    title: 'Graphic Design',
    description:
      'Design that actually communicates — not just "looks creative." Logos, branding, marketing materials, and digital assets that make you look professional without screaming for attention.',
    icon: '/originals/media/services/ui-ux-service.svg',
    features: [
      {
        icon: PenTool,
        title: 'Brand Identity That Sticks',
        description:
          'Logos and visual systems that work in one color, tiny sizes, and huge billboards — not just designs that look good on a mockup.',
      },
      {
        icon: Layout,
        title: 'Marketing Materials That Convert',
        description:
          'Brochures, flyers, and pitch decks that guide the eye to what matters. Design isn\'t decoration — it\'s communication.',
      },
      {
        icon: Zap,
        title: 'Digital Assets That Load Fast',
        description:
          'Social media graphics, web illustrations, and icons optimized for screens — not massive files that slow everything down.',
      },
      {
        icon: FileText,
        title: 'Print-Ready Files That Print Right',
        description:
          'Business cards, banners, and packaging delivered in actual print-ready formats. No "surprise, the colors shifted" when you get them back from the printer.',
      },
    ],
    steps: [
      {
        title: 'Branding Direction',
        description:
          'We uncover your unique brand attributes and translate them into a cohesive visual identity. Every color, font, and image is chosen to convey your message clearly across all touchpoints.',
        visual: '/originals/media/services/ui-ux-service.svg',
      },
      {
        title: 'Digital Refinement',
        description:
          'We design with a mobile-first approach, ensuring your brand looks crisp on any screen. Each element is refined to enhance user experience and reinforce brand recognition.',
        visual: '/originals/media/services/marketing-service.svg',
      },
      {
        title: 'Format Support',
        description:
          'We deliver files in all necessary formats—PNG, PDF, SVG, and source files—so you\'re ready for print, web, and social media without additional requests.',
        visual: '/originals/media/services/work-time.svg',
      },
    ],
    content: {
      heading: 'Design That Works Before It "Wows"',
      text: "We've seen too much design that wins awards but fails at its job — which is to communicate something clearly. We don't design for other designers. We design for your customers. Your logo should be recognizable at 16 pixels tall. Your brochure should guide someone to your phone number, not hide it in a fancy layout. Your website shouldn't make people hunt for the \"Contact\" button. If you want design that sells rather than design that collects awards, let's talk.",
      benefits: [
        'Design with a purpose — every element communicates something',
        "Files delivered in formats you'll actually need",
        'Brand consistency across print, web, and social',
        'No "design for design\'s sake" — just work that helps your business',
      ],
      image: '/media/graphics-portfolio.png',
    },
  },

  'social-media-marketing': {
    title: 'Social Media Marketing (SMM)',
    description:
      'Social media that actually builds your business — not just "engagement" that doesn\'t pay the bills. Strategy, content, and paid campaigns focused on real results.',
    icon: '/originals/media/services/marketing-service.svg',
    features: [
      {
        icon: Share2,
        title: 'Platform Strategy',
        description:
          'We help you focus on platforms where your actual customers hang out — not every platform just to check a box.',
      },
      {
        icon: FileText,
        title: 'Content That Fits Your Voice',
        description:
          'Posts, stories, and videos that sound like you, not like generic marketing copy. We write for humans, not algorithms.',
      },
      {
        icon: Search,
        title: 'Analytics You Can Actually Use',
        description:
          'Monthly reports that show what\'s working, what\'s not, and what we should change. No vanity metrics, just actionable data.',
      },
      {
        icon: Zap,
        title: 'Paid Campaigns That Pay Back',
        description:
          'We run ads focused on conversions — leads, sales, signups — not just "awareness" that\'s hard to measure. Every dollar spent has a purpose.',
      },
    ],
    steps: [
      {
        title: 'Growth Strategy',
        description:
          'We define measurable goals and audience personas, then build a content calendar aligned with your business objectives. Every post serves a purpose, whether engagement, traffic, or leads.',
        visual: '/originals/media/services/marketing-service.svg',
      },
      {
        title: 'Content Engine',
        description:
          'We maintain a consistent posting schedule with high-quality content tailored to each platform. This steady presence builds community and keeps your brand top-of-mind.',
        visual: '/originals/media/services/grow.svg',
      },
      {
        title: 'Ad Optimization',
        description:
          'We launch paid campaigns with small budgets to test creatives and audiences. Winning combinations are scaled for maximum ROI, ensuring every dollar spent is justified.',
        visual: '/originals/media/services/worried.svg',
      },
    ],
    content: {
      heading: 'Social Media That Actually Moves the Needle',
      text: 'Most social media "experts" will sell you on followers and likes. We don\'t. Followers don\'t pay rent. We focus on social media that builds actual business value — leads from LinkedIn, sales from Instagram, bookings from Facebook. If you want someone to post pretty pictures and celebrate when you hit 1,000 followers, we\'re not your person. If you want social media that brings in revenue, let\'s talk about how we\'ll measure and optimize for that.',
      benefits: [
        'Strategy before posting — no random content',
        'Focus on platforms where your customers actually are',
        'Paid campaigns optimized for ROI, not just reach',
        'Reporting on metrics that matter to your business',
      ],
      image: '/media/social-media-portfolio.png',
    },
  },

  'content-writing': {
    title: 'Content Writing',
    description:
      'Content that ranks and actually gets read. Blog posts, website copy, technical documentation — written for humans, structured for search engines.',
    icon: '/originals/media/services/grow.svg',
    features: [
      {
        icon: FileText,
        title: 'Blog & Article Writing',
        description:
          'Long-form content that builds authority and answers the questions your customers are actually searching for.',
      },
      {
        icon: Search,
        title: 'SEO-Optimized Structure',
        description:
          'Headings, internal links, and keyword placement that helps search engines understand your content without making it read like robot-speak.',
      },
      {
        icon: Code,
        title: 'Technical Writing',
        description:
          'Documentation, guides, and explainers that make complex topics clear — not more confusing.',
      },
      {
        icon: PenTool,
        title: 'Conversion Copy',
        description:
          'Landing pages, emails, and ads that actually persuade people to take action, not just sound clever.',
      },
    ],
    steps: [
      {
        title: 'Content Discovery',
        description:
          'We research audience search intent and competitor gaps using SEO tools. This uncovers unique angles and topics that have high potential to attract and engage readers.',
        visual: '/originals/media/services/grow.svg',
      },
      {
        title: 'SEO Writing',
        description:
          'We craft content that balances readability with SEO best practices—natural keyword placement, proper headings, and internal links. The result is content that ranks and resonates.',
        visual: '/originals/media/services/work-time.svg',
      },
      {
        title: 'Editing & Review',
        description:
          'Every piece undergoes rigorous editing for clarity, tone, and factual accuracy. We share drafts for your feedback and make revisions promptly—collaboration is key.',
        visual: '/originals/media/services/coding-service.svg',
      },
    ],
    content: {
      heading: 'Content People Actually Finish Reading',
      text: "There's too much content online that's technically \"optimized\" but absolutely unreadable. We write content that serves both goals: it helps you rank, but more importantly, it helps your readers. When someone lands on your blog, they should walk away feeling smarter, not more confused. Whether it's a 2,000-word guide or a 200-word landing page, we focus on clarity, usefulness, and a voice that sounds like a human being wrote it.",
      benefits: [
        'Research-backed topics — not just writing what "feels right"',
        'SEO structure without sacrificing readability',
        'Clear, confident brand voice throughout',
        "Revisions included until you're happy with it",
      ],
      image: '/media/content-portfolio.png',
    },
  },
};

export const serviceSlugs = Object.keys(servicesData) as string[];

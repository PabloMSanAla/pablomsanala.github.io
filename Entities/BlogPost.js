import { formatDate, generateSlug } from '../utils/index.js';

export class BlogPost {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.excerpt = data.excerpt;
    this.content = data.content;
    this.category = data.category;
    this.tags = data.tags || [];
    this.created_date = data.created_date;
    this.published = data.published;
    this.featured_image = data.featured_image;
    this.slug = data.slug || generateSlug(data.title);
  }

  // Mock data for development
  static async filter(filters = {}, sort = { field: 'created_date', order: 'desc' }) {
    const mockPosts = [
      {
        id: 1,
        title: "Galaxy Evolution in the Local Universe",
        excerpt: "Exploring the mechanisms behind galaxy formation and evolution through deep surface photometry and stellar population analysis.",
        content: `
          <p>Galaxy evolution remains one of the most fascinating areas of modern astrophysics. Through deep surface photometry, we can uncover the structural properties and formation histories of galaxies in our local universe.</p>
          
          <p>Recent observations with ground-based telescopes have revealed intricate details about the outer regions of galaxies, where signatures of past mergers and accretion events are preserved. These low surface brightness features provide crucial insights into how galaxies have grown over cosmic time.</p>
          
          <h2>Methodology</h2>
          <p>Our approach combines multi-band imaging with sophisticated analysis techniques to map the stellar populations across entire galaxy disks. By examining color gradients and structural parameters, we can reconstruct the assembly history of these systems.</p>
          
          <h2>Key Findings</h2>
          <p>The results suggest that most spiral galaxies have experienced significant growth through minor mergers, with the outer regions showing evidence of recently accreted stellar material from disrupted satellite galaxies.</p>
        `,
        category: "Research",
        tags: ["Galaxy Evolution", "Surface Photometry", "Astrophysics", "Stellar Populations"],
        created_date: "2024-09-15",
        published: true,
        featured_image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: 2,
        title: "Astrophotography: Capturing the Stellar Streams",
        excerpt: "Behind the scenes of our latest deep-sky imaging project focusing on tidal streams around nearby galaxies.",
        content: `
          <p>Astrophotography serves not only as an artistic pursuit but also as a valuable scientific tool. Our recent project aimed to capture the faint tidal streams surrounding nearby galaxies using advanced imaging techniques.</p>
          
          <h2>Equipment and Setup</h2>
          <p>For this project, we used a 16-inch Ritchey-Chrétien telescope equipped with a cooled CCD camera. The setup allowed us to achieve the sensitivity needed to detect extremely low surface brightness features.</p>
          
          <p>The imaging sessions were conducted over multiple nights, with total integration times exceeding 20 hours per target. Careful flat fielding and sky subtraction were crucial for revealing these elusive structures.</p>
          
          <h2>Scientific Value</h2>
          <p>The resulting images not only showcase the beauty of these cosmic structures but also provide quantitative data about the ongoing interaction processes shaping these galaxy systems.</p>
        `,
        category: "Astrophotography",
        tags: ["Astrophotography", "Deep Sky", "Imaging", "Tidal Streams"],
        created_date: "2024-09-10",
        published: true,
        featured_image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: 3,
        title: "Teaching Astronomy: Engaging the Next Generation",
        excerpt: "Reflections on innovative approaches to astronomy education and inspiring students to explore the cosmos.",
        content: `
          <p>Teaching astronomy presents unique opportunities to inspire wonder and scientific curiosity. Over the years, I've developed various approaches to make complex astrophysical concepts accessible and engaging for students at all levels.</p>
          
          <h2>Hands-On Learning</h2>
          <p>One of the most effective methods is incorporating hands-on activities and observations. When students can directly observe celestial objects through telescopes or analyze real astronomical data, the learning experience becomes much more meaningful.</p>
          
          <p>We regularly organize observing sessions where students can see planets, star clusters, and galaxies for themselves. These experiences often spark a lifelong interest in astronomy.</p>
          
          <h2>Connecting Research to Education</h2>
          <p>I believe in bringing current research into the classroom. By discussing ongoing discoveries and involving students in data analysis projects, we can show them that astronomy is a living, evolving field.</p>
        `,
        category: "Education",
        tags: ["Teaching", "Astronomy Education", "Student Engagement", "Outreach"],
        created_date: "2024-09-05",
        published: true,
        featured_image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=1000&auto=format&fit=crop"
      },
      {
        id: 4,
        title: "Hiking Under Dark Skies: Finding the Perfect Observing Sites",
        excerpt: "Combining outdoor adventures with astronomical observations - a guide to dark sky locations for both hiking and stargazing.",
        content: `
          <p>Some of the best astronomical observations happen in remote locations, far from city lights. These dark sky sites often require hiking to reach, combining two of my greatest passions: outdoor exploration and astronomy.</p>
          
          <h2>Planning the Journey</h2>
          <p>Finding the perfect observing site requires careful planning. Factors like light pollution, weather patterns, accessibility, and safety all play crucial roles in site selection.</p>
          
          <p>I use light pollution maps and satellite imagery to identify potential locations, then scout them during daylight hours to assess access routes and safety considerations.</p>
          
          <h2>Essential Equipment</h2>
          <p>When hiking to observing sites, every gram matters. I've learned to balance astronomical equipment with hiking gear, prioritizing lightweight options without compromising observational capabilities.</p>
          
          <h2>Unforgettable Experiences</h2>
          <p>Some of my most memorable observations have occurred at remote mountain locations, where the Milky Way stretches from horizon to horizon and faint galaxies become visible to the naked eye.</p>
        `,
        category: "Outdoors",
        tags: ["Hiking", "Dark Skies", "Observing Sites", "Adventure", "Stargazing"],
        created_date: "2024-08-28",
        published: true,
        featured_image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1000&auto=format&fit=crop"
      }
    ];

    // Apply filters
    let filteredPosts = mockPosts.filter(post => {
      if (filters.category && post.category !== filters.category) return false;
      if (filters.published !== undefined && post.published !== filters.published) return false;
      if (filters.tags && filters.tags.length > 0) {
        const hasMatchingTag = filters.tags.some(tag => 
          post.tags.some(postTag => postTag.toLowerCase().includes(tag.toLowerCase()))
        );
        if (!hasMatchingTag) return false;
      }
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        const searchableText = `${post.title} ${post.excerpt} ${post.content}`.toLowerCase();
        if (!searchableText.includes(searchTerm)) return false;
      }
      return true;
    });

    // Apply sorting
    filteredPosts.sort((a, b) => {
      const aValue = a[sort.field];
      const bValue = b[sort.field];
      
      if (sort.field === 'created_date') {
        return sort.order === 'desc' 
          ? new Date(bValue) - new Date(aValue)
          : new Date(aValue) - new Date(bValue);
      }
      
      if (sort.order === 'desc') {
        return bValue > aValue ? 1 : -1;
      } else {
        return aValue > bValue ? 1 : -1;
      }
    });

    // Convert to BlogPost instances
    return filteredPosts.map(post => new BlogPost(post));
  }

  static async findById(id) {
    const posts = await this.filter();
    return posts.find(post => post.id === parseInt(id));
  }

  static async findBySlug(slug) {
    const posts = await this.filter();
    return posts.find(post => post.slug === slug);
  }

  get formattedDate() {
    return formatDate(this.created_date);
  }

  get url() {
    return `/blog/${this.slug}`;
  }
}
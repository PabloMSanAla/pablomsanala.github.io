export const createPageUrl = (pageName) => {
  const routes = {
    'Home': '/',
    'Blog': '/blog',
    'Courses': '/courses',
    'About': '/about',
    'Contact': '/contact',
    'Research': '/research',
    'Photography': '/photography',
    'Outdoors': '/outdoors',
    'Education': '/education'
  };
  
  return routes[pageName] || '/';
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const truncateText = (text, maxLength = 150) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
};

export const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
};
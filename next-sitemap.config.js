/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.mybrandingstudio.ca/',
  generateRobotsTxt: true, // Generate robots.txt file
  changefreq: 'monthly', // Update frequency for all pages
  sitemapSize: 7000, // Maximum number of URLs per sitemap file
  exclude: ['/privacy'], // Exclude specific pages from the sitemap
  
  transform: async (config, path) => {
    if (path === '/') {
      return {
        loc: path, 
        changefreq: 'monthly', 
        priority: 1.0, 
      };
    }
    return {
      loc: path, // Default URL
      changefreq: config.changefreq, // Default change frequency
      priority: 0.7, // Default priority for other pages
    };
  },
};
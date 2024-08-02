// generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const fs = require('fs');
const path = require('path');

// Define your site's base URL
const SITE_URL = 'https://www.riverview-villas.com/';

(async () => {
  // Static paths
  const staticPaths = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/AboutUs', changefreq: 'monthly', priority: 0.8 },
    { url: '/Accomodation', changefreq: 'monthly', priority: 0.8 },
    { url: '/ContactUs', changefreq: 'monthly', priority: 0.8 },
    { url: '/Gallery', changefreq: 'monthly', priority: 0.8 },
    { url: '/Treatment', changefreq: 'monthly', priority: 0.8 },
   
  ];

  // Example function to fetch dynamic paths (e.g., blog posts)
  const getDynamicPaths = async () => {
    // Replace this with your actual data-fetching logic
    // Example with mock data:
    const posts = [
    
    ];

    return posts.map(post => ({
      url: `/posts/${post.slug}`,
      changefreq: post.changefreq,
      priority: post.priority,
    }));
  };

  // Fetch dynamic paths
  const dynamicPaths = await getDynamicPaths();

  // Combine static and dynamic paths
  const allPaths = [...staticPaths, ...dynamicPaths];

  // Create a sitemap stream
  const stream = new SitemapStream({ hostname: SITE_URL });

  // Generate the sitemap XML
  const xmlData = await streamToPromise(Readable.from(allPaths).pipe(stream)).then(data => data.toString());

  // Save the sitemap to the public directory
  fs.writeFileSync(path.resolve(__dirname, 'public', 'sitemap.xml'), xmlData);

  console.log('Sitemap generated successfully!');
})();

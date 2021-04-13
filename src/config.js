module.exports = {
  siteTitle: 'Shivansh Anand | Software Engineer',
  siteDescription:
    'Shivansh Anand is a software engineer based in Hyderabad, India who specializes in building websites, applications, and everything in between.',
  siteKeywords:
    'Shivansh Anand, Shivansh, Anand, _shivansh__anand_, software engineer, app developer, web developer, python, india',
  siteUrl: 'https://shivanshanand.netlify.app',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Shivansh Anand',
  location: 'Hyderabad, India',
  email: 'shivansh.anand@students.iiit.ac.in',
  github: 'https://github.com/anandshivansh',
  twitterHandle: '@AnandShivansh',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/anandshivansh',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/anandshivansh',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_shivansh__anand_',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/AnandShivansh',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#270c1a',
    darkNavy: '#270c1a',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};

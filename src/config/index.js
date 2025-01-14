module.exports = {
  siteTitle: 'Kunal Chhabra',
  siteDescription:
    'Kunal chhbra is a CSD sophomore',
  siteKeywords:
    'Kunal chhbra is a CSD sophomore',
  siteUrl: 'https://github.com/vipchhabra99/',
  siteLanguage: 'en_US',

  googleVerification: '',

  name: 'Kunal Chhabra',
  location: 'Ambala, India',
  email: 'Kunalchhabrapro99@gmail.com',
  github: 'https://github.com/kunalchhabra2001/',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/kunalchhabra2001/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/Kunal-chhabra',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  googleAnalyticsID: 'UA',

  navHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

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

import { nanoid } from 'nanoid';
import React from 'react';

// HEAD DATA
export const headData = {
  title: 'Michael Vincent | Technical Writer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, I am ',
  name: 'Michael Vincent-',
  subtitle: 'a technical writer with expertise in front end and web development.',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I graduate from the University of Texas at Austin in May with a degree in chemical engineering. Along the way, I realized I enjoyed writing essays on chemical processes more than I enjoyed working those same processes out mathematically!',
  paragraphTwo:
    'I now aspire to write for end users, developers, and others to help them understand technical topics in a way that is concise and easily digestible. I am also a self-taught programmer with a specialization in HTML, CSS, and JavaScript (this site was written in Gatsby JS)! Along the way, I also learned how to interpret API data in JSON and XML. I am currently learning React and Redux.',
  paragraphThree:
    'I have experience with API documentation, user manuals, and how-to documents, and I am always striving to learn more. You can check out some of my writing samples below or my blog on Medium ',
  resume: '../pdf/Michael_Vincent_Resume_Spring_2021.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'user-manual-pic.PNG',
    title: 'USER MANUAL - Aspen Plus V10',
    info:
      'Aspen Plus is a process simulation software used to model chemical processes. I created a user manual to help people get started with using the software.',
    info2: 'Skills used: SnagIt, Jekyll, Markdown, YAML',
    url: 'https://mvincent121212.github.io/Aspen-Intro-User-Manual/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'api-doc-pic.PNG',
    title: 'API Doc - GeoNames Web Services',
    info: (
      <p>
        I was looking at the{' '}
        <a
          target="_blank"
          rel="noreferrer"
          style={{ color: '#f79824' }}
          href="http://www.geonames.org/export/web-services.html"
        >
          GeoNames Webservices Documentation
        </a>{' '}
        and tried editing it to make it look cleaner. My result is this project.`
      </p>
    ),
    info2: 'Skills used: Jekyll, Markdown, Postman, Technical Editing',
    url: 'https://mvincent121212.github.io/GeoNames-Documentation-Editing/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'how-to-pic.PNG',
    title: 'HOW TO - How to Restring a Violin',
    info:
      'This is a shorter document made during my technical writing certification course. I thought I would try to create a document for something that many people do not know how to do and try to write it such that even a complete novice to a violin would be able to understand how to restring one.',
    info2: 'Skills used: MS Word',
    howToDoc: '../pdf/how-to.pdf',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Feel free to message me! I look forward to hearing from you.',
  btn: 'Email',
  email: 'mvincent1212@utexas.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mvincent12/',
    },
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://medium.com/@mvincent1212',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

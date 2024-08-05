const portfolio = [
  {
    id: 0,
    projectName: 'Food Delivery Web Application',
    url: 'https://cheesiano.com/',
    image: 'projects/cheesiano.png',
    projectDetail:
      ' Developed a website and admin pannel using React and Node.js, integrating third-party delivery APIs (Dunzo, Porter) for seamless operations and enhanced user experience.',
    technologiesUsed: [
      {
        tech: 'ReactJS',
      },
      {
        tech: 'Node.js',
      },
      {
        tech: 'MongoDB',
      },
      {
        tech: 'Express.js',
      },
      {
        tech: 'TailwindCSS',
      },
    ],
  },
  {
    id: 0,
    projectName: 'swimwear-website',
    url: 'https://www.sportsdrive.in/',
    image: 'projects/sports-drive.png',
    projectDetail:
      'Developed and maintained the admin panel, implemented invoice and delivery tracking systems, created a system to track purchase and sales orders, and generated reports for sell and purchase orders.',
    technologiesUsed: [
      {
        tech: 'ReactJS',
      },
      {
        tech: 'Ant Design',
      },
      {
        tech: 'TailwindCSS',
      },
      {
        tech: 'MongoDB',
      },
      {
        tech: 'Node.js',
      },
      {
        tech: 'Express.js',
      },
    ],
  },
  {
    id: 0,
    projectName: 'Real-time coding tool',
    url: 'http://13.234.77.71/',
    image: 'projects/code-view.png',
    projectDetail:
      'Developed a real-time coding collaboration tool using the MERN stack,enabling multiple users to connect and code together in a shared environment.',
    technologiesUsed: [
      {
        tech: 'ReactJS',
      },
      {
        tech: 'Node.js',
      },
      {
        tech: 'Websocket',
      },
    ],
  },
  {
    id: 0,
    projectName: 'Video sharing platform',
    url: 'https://video-app-frontend-azure.vercel.app/',
    image: 'projects/video-sharing.png',
    projectDetail:
      'Developed a video sharing platform inspired by YouTube, allowing users toupload, view, like, and subscribe to videos, with added features like dark and light mode for user customization',
    technologiesUsed: [
      {
        tech: 'ReactJS',
      },
      {
        tech: 'Express.js',
      },
      {
        tech: 'Node.js',
      },
      {
        tech: 'MongoDB',
      },
      {
        tech: 'Styled Component',
      },
    ],
  },
];
export default function handler(req, res) {
  res.status(200).json(portfolio);
}

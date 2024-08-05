const expertise = [
  {
    id: 0,
    title: 'Full Stack Development',
    desc: 'I am a skilled MERN stack developer with extensive experience in building robust web applications using MongoDB, Express.js, React.js, and Node.js. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients.',
  },

  {
    id: 1,
    title: 'Github',
    desc: 'GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.',
  },
];

export default function handler(req, res) {
  res.status(200).json(expertise);
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Hemant Mewada',
    image: 'images/hemant-image.png',
    designation: 'Full Stack Developer',
    view: 'I highly recommend Anshul as a MERN stack developer. As his senior at Trisha Websoft, I had the opportunity to work closely with him, and he consistently demonstrated exceptional skills in MongoDB, Express.js, React, and Node.js. His problem-solving abilities, attention to detail, and teamwork made him a valuable colleague. I am confident he will be an asset to any team. 👍! 🌟',
    linkednURL: 'https://www.linkedin.com/in/hemant-mewada/',
  },
  {
    id: 1,
    name: 'Shubham Prajapat',
    image: 'images/shubham.png',
    designation: 'Sr. Software Engineer',
    view: 'Anshul is a skilled MERN stack developer with a deep understanding of MongoDB, Express.js, React, and Node.js. His passion for technology and continuous learning is truly inspiring. I am confident that his technical expertise and positive attitude will make him a valuable addition to any team.',
    linkednURL: 'https://www.linkedin.com/in/shubham-prajapat/',
  },
];
export default function handler(req, res) {
  res.status(200).json(recommendationCard);
}

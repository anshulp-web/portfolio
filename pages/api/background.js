const background = [
  {
    eduCards: [
      {
        id: 0,
        title: 'P.M.B Gujarati Science College (Devi Ahilya University) Indore',
        degree: 'BCA',
        detail: "Bachelor's of computer application",
        year: '2018-2021',
      },
      {
        id: 1,
        title: 'N.V.M Excellence No. 2',
        degree: 'HSC',
        detail: 'Completed HSC from School for excellence dewas',
        year: '2017-2018',
      },
      {
        id: 2,
        title: 'N.V.M Excellence No. 2',
        degree: 'SSC',
        detail: 'Completed SSC from School for excellence dewas',
        year: '2015-2016',
      },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: 'Trisha Websoft',
        role: 'Full-Stack Developer',
        desc: 'As a Full-Stack developer, I use React & JavaScript to build user interfaces for web applications and use Express.js & Node.js for backend.',
        year: 'June/2022 - June/2024',
        location: 'Dewas, India',
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}

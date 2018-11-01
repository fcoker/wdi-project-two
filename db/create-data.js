const mongoose = require('mongoose');
const env = require('../config/environment');
mongoose.connect(env.dbUri);

const Circuit = require('../models/circuit');

Circuit.collection.drop();

const circuitData = [
  {
    name: 'Silverstone Circuit',
    lapLength: '3.66 miles',
    fastestLap: 1.29,
    numberOfCorners: 18,
    image: 'http://www.felixracing.se/wp-content/uploads/2014/04/Silverstone-map.jpg',
    video: 'https://www.youtube.com/embed/AaSz8JsCWiU?controls=1'
  },
  {
    name: 'Brands Hatch Circuit',
    lapLength: '2.433 miles',
    fastestLap: 1.13,
    numberOfCorners: 9,
    image: 'https://www.motorsportdays.com/wp-content/uploads/2015/03/Brands-Hatch2.png',
    video: 'https://www.youtube.com/embed/l_CYWTRPO0M?controls=1'

  },
  {
    name: 'Knockhill International Circuit',
    lapLength: '1.3 miles',
    fastestLap: 0.42,
    numberOfCorners: 9,
    image: 'http://www.motorsportcircuits.co.uk/assets/images/knockhill_track.gif',
    video: 'https://www.youtube.com/embed/p2-a269OrHI?controls=1'

  }
];

Circuit
  .create(circuitData)
  .then(circuits => {
    console.log(`${circuits.length} circuits made!`);
    mongoose.connection.close();
  });

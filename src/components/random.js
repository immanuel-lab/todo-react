import React, { useState } from 'react';
import { Random } from 'random-js';

const Random1 = () => {
  const [randomNumber, setRandomNumber] = useState([]);

  const handleClick = () => {
    const random = new Random(); // Create a new Random instance
    // const newRandomNumber = random.integer(1, 100); // 
    // const newRandomNumber = random.real(1, 100); // 
    // const newRandomNumber = random.uuid4();// 
    // const newRandomNumber = random.string(10);

    // const newRandomNumber=random.pick([1,2,3,4,5,6,7,5,4,23,32])
    // const newRandomNumber=random.shuffle([1,2,3,4,5,6,7,20,30,40]);

    const newRandomNumber=random.sample([1,2,3,4,5,6,7,20,30,40],3);
    setRandomNumber(newRandomNumber)

 
  };

  return (
    <div>
      <button onClick={handleClick}>Generate Random Number</button>
      <p>{randomNumber}</p>
    </div>
  );
};

export default Random1;




// import React, { useState } from 'react';
// import { Random } from 'random-js';

// const Random1 = () => {
//   const [randomDate, setRandomDate] = useState(null);

//   const handleClick = () => {
//     const random = new Random(); // Create a new Random instance
//     const startDate = new Date(2020, 0, 1); // Start date (e.g., January 1, 2020)
//     const endDate = new Date(2023, 11, 31); // End date (e.g., December 31, 2023)

//     const newRandomDate = random.date(startDate, endDate); // Generate a random date within the specified date range
//     setRandomDate(newRandomDate);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Generate Random Date</button>
//       {/* {randomDate !== null && <p>Random date: {randomDate.toDateString()}</p>} */}
//       {randomDate !== null && <p>Random date: {randomDate.toDateString()}</p>}
//     </div>
//   );
// };

// export default Random1;

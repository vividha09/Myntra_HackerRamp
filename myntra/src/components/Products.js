// import React, { useState } from "react";
// import "./Products.css";
// import shirt2 from "../images/products/style-1.jpg";
// import shirt3 from "../images/products/style-2.jpg";
// import shirt4 from "../images/products/style-3.jpg";
// import shirt5 from "../images/products/style-4.jpg";

// const db = [
//   {
//     name: "Richard Hendricks",
//     url: shirt2,
//   },
//   {
//     name: "Erlich Bachman",
//     url: shirt3,
//   },
//   {
//     name: "Monica Hall",
//     url: shirt4,
//   },
//   {
//     name: "Jared Dunn",
//     url: shirt5,
//   },
// ];

// function Products() {
//   const [index, setIndex] = useState(0);
//   const [lastDirection, setLastDirection] = useState(null);

//   const swiped = (direction) => {
//     setLastDirection(direction);
//     if (direction === "right") {
//       console.log("Liked: " + db[index].name);
//     } else {
//       console.log("Disliked: " + db[index].name);
//     }
//     if (index < db.length - 1) {
//       setIndex((prevIndex) => prevIndex + 1);
//     }
//   };

//   return (
//     <div>
//       <link
//         href="https://fonts.googleapis.com/css?family=Damion&display=swap"
//         rel="stylesheet"
//       />
//       <link
//         href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
//         rel="stylesheet"
//       />
//       {/* <h1>React Tinder Card</h1> */}
//       <div className="cardContainer">
//         {index < db.length ? (
//           <div
//             className={`card swipe ${lastDirection}`}
//             style={{ backgroundImage: `url(${db[index].url})` }}
//           >
//             {/* <h3>{db[index].name}</h3> */}
//             <div className="buttons">
//               <button onClick={() => swiped("left")}>Dislike</button>
//               <button onClick={() => swiped("right")}>Like</button>
//             </div>
//           </div>
//         ) : (
//           <h2 className="infoText">Your style is captured!</h2>
//         )}
//       </div>
//       {lastDirection && index < db.length && (
//         <h2 className="infoText">You swiped {lastDirection}</h2>
//       )}
//     </div>
//   );
// }

// export default Products;

import React, { useState } from "react";
import "./Products.css";
import shirt2 from "../images/products/style-1.jpg";
import shirt3 from "../images/products/style-2.jpg";
import shirt4 from "../images/products/style-3.jpg";
import shirt5 from "../images/products/style-4.jpg";
import { FaHeart, FaThumbsDown } from "react-icons/fa";

const db = [
  {
    name: "Richard Hendricks",
    url: shirt2,
  },
  {
    name: "Erlich Bachman",
    url: shirt3,
  },
  {
    name: "Monica Hall",
    url: shirt4,
  },
  {
    name: "Jared Dunn",
    url: shirt5,
  },
];

function Products() {
  const [index, setIndex] = useState(0);
  const [lastDirection, setLastDirection] = useState(null);

  const swiped = (direction) => {
    setLastDirection(direction);
    if (direction === "right") {
      console.log("Liked: " + db[index].name);
    } else {
      console.log("Disliked: " + db[index].name);
    }
    if (index < db.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Damion&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
        rel="stylesheet"
      />
      <div className="cardContainer">
        {index < db.length ? (
          <div
            className={`card swipe ${lastDirection}`}
            style={{ backgroundImage: `url(${db[index].url})` }}
          >
            <div className="buttons">
              <button onClick={() => swiped("left")}>
                <FaThumbsDown />
              </button>
              <button onClick={() => swiped("right")}>
                <FaHeart />
              </button>
            </div>
          </div>
        ) : (
          <h2 className="infoText">Your style is captured!</h2>
        )}
      </div>
      {lastDirection && index < db.length && (
        <h2 className="infoText">You swiped {lastDirection}</h2>
      )}
    </div>
  );
}

export default Products;

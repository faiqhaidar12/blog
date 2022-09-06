import React from "react";
import Cards from "./Cards";

const Home = () => {
  //   const [index, setIndex] = useState(0);

  //   const handleSelect = (selectedIndex, e) => {
  //     setIndex(selectedIndex);
  //   };

  return (
    <div className="mt-5 vh-100">
      <h1 className="container">Design Website</h1>
      <Cards />
    </div>
  );
};

export default Home;

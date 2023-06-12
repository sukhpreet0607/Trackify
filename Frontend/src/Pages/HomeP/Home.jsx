import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      
    </>
  );
};


export default Home;

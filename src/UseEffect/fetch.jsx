import { useEffect } from "react";
import axios from "axios";

const Fetch = () => {
  useEffect(() => {
    // console.log("Mounted");
    api();
  }, []);

  // const api = async () => {
  //   const a = await fetch("https://jsonplaceholder.typicode.com/comments");
  //   const b = await a.json();
  //   console.log(b);
  // };
  const api = async () => {
    const a = await axios.get("https://jsonplaceholder.typicode.com/comments");
    console.log(a);
  };

  return <></>;
};

export default Fetch;

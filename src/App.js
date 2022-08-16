import React, { useEffect, useState } from "react";
import Box from "./components/box";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Maincontainer from "./components/Maincontainer";

export default function App() {
  const [counter, setCounter] = useState(0);

  const handleOrder = (e) => {
    // console.log(e.target)
    // console.log(e.target.innerHTML)
    if (e.target.innerText == "Add to cart") {
      console.log("breargk");
      console.log(e.target);
      console.log(e.target.innerText);
      console.log(e.target.innerHTML);

      setCounter((current) => current + 1);
      e.target.innerText = "Remove from cart";

      console.log("breegak");
      console.log(e.target);
      console.log(e.target.innerText);
      console.log(e.target.innerHTML);
    } else {
      console.log("bretheak");
      console.log(e.target);
      console.log(e.target.innerText);
      console.log(e.target.innerHTML);

      setCounter((current) => current - 1);
      e.target.innerText = "Add to cart";

      console.log("breakr");
      console.log(e.target);
      console.log(e.target.innerText);
      console.log(e.target.innerHTML);
    }
  };

  return (
    <div>
      <Header order={counter} />
      <Box />
      <Maincontainer click={handleOrder} />
      <Footer />
    </div>
  );
}

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Box } from "@mui/material";
import { useState } from "react";
import Header from "./Components/Header";
import CardsDetails from "./Components/CardsDetails";

function App() {
  const [cartData, setCartData] = useState([]);

  console.log(cartData);

  return (
    <Box>
      <Header cartData={cartData} setCartData={setCartData} />

      <CardsDetails cartData={cartData} setCartData={setCartData} />
    </Box>
  );
}

export default App;


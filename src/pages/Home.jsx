import React, { useState } from "react";
import Header from "../components/Header";
import PopUp from "../components/PopUp";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && <PopUp setOpen={setOpen} />}
      <Header open={open} setOpen={setOpen} />
    </>
  );
};

export default Home;

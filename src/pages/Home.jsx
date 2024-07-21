import React, { useState } from "react";
import Header from "../components/Header";
import PopUp from "../components/PopUp";
import Front from "../components/Front";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && <PopUp setOpen={setOpen} />}
      <Header open={open} setOpen={setOpen} />
      <Front />
    </>
  );
};

export default Home;

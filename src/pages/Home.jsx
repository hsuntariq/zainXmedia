import React, { useState } from "react";
import Header from "../components/Header";
import PopUp from "../components/PopUp";
import Front from "../components/Front";
import Group from "../components/Group";
import { Particless } from "../components/Particles";
import Gallery from "../components/Gallery";
import Projects from "../components/Projects";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Particless />
      {open && <PopUp setOpen={setOpen} />}
      <div className="main">
        <Header open={open} setOpen={setOpen} />
        <Front />
      </div>
      <Group />
      <Gallery />
      <Projects />
    </>
  );
};

export default Home;

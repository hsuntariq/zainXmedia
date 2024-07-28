import React from "react";
import Dot from "./Dot";
import SlidingDiv from "./SlidingDiv";
import Cards from "./Cards";
const Gallery = () => {
  return (
    <>
      <div className="container-fluid py-5 ">
        <header className="d-flex  justify-content-center gap-3 align-items-center">
          <div className="bar-gallery"></div>
          <Dot moving={true} />
          <h2 className="text-secondary m-0 p-0">Gallery</h2>
          <Dot moving={true} />
          <div className="bar-gallery"></div>
        </header>
        <h2 className="text-center display-1 fw-bold m-0 p-0">
          Our Project Portfolio
        </h2>
        <div className="row m-0 justify-content-center align-items-center">
          <div className="col-lg-3 col-sm-6">
            <Cards contentNumber={0} />
          </div>
          <div className="row col-lg-9 col-sm-6 ">
            <div className="col-lg-8">
              <Cards contentNumber={1} />
            </div>
            <div className="col-lg-4">
              <Cards contentNumber={2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;

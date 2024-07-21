import React from "react";
import Dot from "./Dot";

const Front = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center  ">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-2"></div>
              <div className="col-10">
                <div className="d-flex gap-3 align-items-center">
                  <div className="bar-front"></div>
                  <div className="dot">
                    <Dot size={20} moving={true} />
                  </div>
                  <p className="text-secondary m-0">Innovative Ideas</p>
                </div>
                <h1 className="display-2 fw-bold ">
                  We Offer You <span className="text-red">A Digital</span>{" "}
                  Platform <Dot />
                </h1>
                <p className="text-secondary">
                  Vulputate enim nulla aliquet porttitor lacus luctus accumsan
                  tortor posuere. Nisl purus in mollis nunc sed id sempe egestas
                  quis ips.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              className="front-image"
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "contain" }}
              src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Slider-1-Image-1-2048x1796.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Front;

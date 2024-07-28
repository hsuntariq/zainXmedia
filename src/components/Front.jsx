import React from "react";
import Dot from "./Dot";
import { GoDotFill } from "react-icons/go";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialPintarest,
  SlSocialTwitter,
} from "react-icons/sl";
import { FaPlay } from "react-icons/fa6";

import frontImage from "../assets/images/image.png";
import SlidingDiv from "./SlidingDiv";

const Front = () => {
  return (
    <>
      <div className="container-fluid position-relative">
        <div className="row align-items-center   ">
          <div className="col-xl-6">
            <div className="row g-lg-4 g-sm-0 align-items-center">
              <div className="col-3 d-flex flex-column align-items-center justify-content-between gap-5">
                <div className="d-flex gap-5 flex-column fs-2 justify-content-between align-items-end">
                  <SlSocialFacebook color="gray" />
                  <SlSocialInstagram color="gray" />
                  <SlSocialTwitter color="gray" />
                  <SlSocialPintarest color="gray" />
                </div>
                <div className="scroll">
                  <div className="d-flex align-items-center jusitfy-content-center flex-column gap-2">
                    <Dot moving={true} />
                    <div className="bar3">
                      <div className="bar3-bar bg-danger"></div>
                    </div>
                    <h6 className="scroll-text mt-5">SCROLL</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-7 col-9 d-flex flex-column gap-4">
                <div className="d-flex gap-3 align-items-center">
                  <div className="bar-front"></div>
                  <div className="dot">
                    <Dot size={20} moving={true} />
                  </div>
                  <p className="text-secondary m-0">Innovative Ideas</p>
                </div>

                <h1 className="display-3 fw-bold ">
                  We Offer You <span className="text-red">A Digital</span>{" "}
                  Platform <GoDotFill size={25} color="#dd4242" />
                </h1>
                <p className="text-secondary">
                  Vulputate enim nulla aliquet porttitor lacus luctus accumsan
                  tortor posuere. Nisl purus in mollis nunc sed id sempe egestas
                  quis ips.
                </p>
                <div className="d-flex align-items-center hov justify-content-between">
                  <SlidingDiv content="Get Started" />
                  <div className="d-flex gap-4 align-items-center">
                    <div className="video-icon">
                      <FaPlay className="play" size={20} />
                    </div>
                    View Video
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 front-image">
            <img
              className=""
              width={"100%"}
              height={"100%"}
              style={{ objectFit: "contain" }}
              src={frontImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Front;

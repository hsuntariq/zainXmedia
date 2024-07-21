import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { imageData } from "../data/image_data";
import SingleImage from "./SingleImage";

const PopUp = ({ setOpen }) => {
  const [showClose, setShowClose] = useState(false);
  const [image, setImage] = useState("blog");
  return (
    <>
      <div
        className="container-fluid pop position-relative d-flex align-items-center justify-content-center pop-up position-fixed top-0 "
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <div
          onMouseEnter={() => setShowClose(true)}
          onMouseLeave={() => setShowClose(false)}
          className="close position-absolute p-4 "
          style={{
            top: "10px",
            right: "10px",
          }}
        >
          <RxCross1
            className="text-danger "
            size={40}
            style={{
              transition: "all 0.4s",
              scale: `${showClose ? "0" : "1"}`,
            }}
          />
        </div>
        <div
          onClick={() => setOpen(false)}
          style={{
            top: "15px",
            right: "10px",
            transition: "all 0.4s",
            scale: `${showClose ? "1" : "0"}`,
          }}
          className="close fw-bolder position-absolute p-4  text-danger"
        >
          CLOSE
        </div>

        <div className="blob-images w-50  position-relative  ">
          {imageData?.map((item, index) => {
            return <SingleImage key={index} {...item} image={image} />;
          })}
        </div>

        <ul className="list-unstyled stroke-items display-1 text-uppercase w-25">
          {imageData?.map((item, index) => {
            return (
              <>
                <li
                  key={index}
                  className="stroke"
                  onMouseOver={() => setImage(item?.name)}
                >
                  {item?.name}
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default PopUp;

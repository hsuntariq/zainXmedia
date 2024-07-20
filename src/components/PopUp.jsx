import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { imageData } from "../data/image_data";

const PopUp = ({ setOpen }) => {
  const [showClose, setShowClose] = useState(false);
  const [image, setImage] = useState("blog");
  return (
    <>
      <div
        className="container-fluid d-flex align-items-center justify-content-center pop-up position-fixed top-0"
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <div
          onMouseEnter={() => setShowClose(true)}
          onMouseLeave={() => setShowClose(false)}
          className="close position-absolute p-4 bg-info"
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
            return (
              <img
                style={{
                  transition: "all 0.7s",
                  scale: `${image == "blog" ? "1" : "1.2"}`,
                  opacity: `${image == "blog" ? "1" : "0"}`,
                }}
                className="d-block blob-image position-absolute "
                src="https://gaaga.wpengine.com/wp-content/uploads/2023/06/Gaaga-Side-Menu-Contact-Img.png"
                alt=""
              />
            );
          })}
        </div>

        <ul className="list-unstyled stroke-items display-1 text-uppercase w-25">
          <li className="stroke" onMouseOver={() => setImage("blog")}>
            blog
          </li>
          <li className="stroke" onMouseOver={() => setImage("career")}>
            career
          </li>
          <li className="stroke" onMouseOver={() => setImage("contact")}>
            contact
          </li>
          <li className="stroke" onMouseOver={() => setImage("services")}>
            services
          </li>
          <li className="stroke" onMouseOver={() => setImage("projects")}>
            projects
          </li>
        </ul>
      </div>
    </>
  );
};

export default PopUp;

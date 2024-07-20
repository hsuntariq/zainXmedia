import React from "react";
import Button from "./Button";
import { GoDotFill, GoHorizontalRule } from "react-icons/go";

const Header = ({ open, setOpen }) => {
  return (
    <>
      <div className="d-flex p-4 justify-content-around align-items-center">
        <div className="logo d-flex align-items-center">
          <GoDotFill size={25} color="#dd4242" />
          <div className="d-flex align-items-center">
            <h2 className="m-0">Zain</h2>
            <span className="x">X</span>
          </div>

          <GoDotFill size={25} />
        </div>
        <ul className="items  text-uppercase d-flex list-unstyled m-0 gap-5">
          <li>Home</li>
          <li>projects</li>
          <li>services</li>
          <li>blog</li>
          <li>contact us</li>
        </ul>
        <div className="d-flex align-items-center gap-5">
          <Button content="Book a meeting" />
          <div
            onClick={() => setOpen(true)}
            className="d-flex flex-column gap-3 line-parent"
          >
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

import React from "react";
import Button from "./Button";
import { GoDotFill, GoHorizontalRule } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa6";
import { menu_data } from "../data/menu_data";
import { MdHorizontalRule } from "react-icons/md";
import { GoChevronRight } from "react-icons/go";

const Header = ({ open, setOpen }) => {
  return (
    <>
      <div className="d-flex p-4 justify-content-around header align-items-center">
        <div className="logo d-flex align-items-center">
          <GoDotFill size={25} color="#dd4242" />
          <div className="d-flex  align-items-center">
            <h2 className="m-0 text-white">Zain</h2>
            <span className="x">X</span>
          </div>

          <GoDotFill size={25} />
        </div>
        <ul className="items  text-uppercase d-flex list-unstyled m-0 gap-5">
          <li className="menu-close ms-auto border-0">
            <IoMdClose size={25} />
          </li>
          {menu_data.map((item, index) => {
            return (
              <>
                <li key={index}>
                  <div
                    className={`d-flex my-item justify-content-between ${
                      item == "Home" && "active"
                    } align-items-center`}
                  >
                    <h6>{item}</h6>
                    <div className="menu-icon d-flex align-items-center">
                      <MdHorizontalRule className="bar" />
                      <GoChevronRight className="arrow-right" />
                    </div>
                  </div>
                </li>
              </>
            );
          })}
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

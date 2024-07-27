import React from "react";
import { card_data } from "../data/card_data";
import SlidingDiv from "./SlidingDiv";

const Cards = ({ contentNumber }) => {
  return (
    <>
      <div className="card gallery-card my-4 position-relative p-0 bg-transparent rounded-0">
        <img width={"100%"} src={card_data[contentNumber].image} alt="" />
        <div className="overlay w-100">
          <div className="p-4">
            <h2>{card_data[contentNumber].heading}</h2>
            <p className="text-white">{card_data[contentNumber].desc}</p>
            <SlidingDiv content="Read More" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;

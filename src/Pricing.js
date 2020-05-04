import React from "react";
import Nav from "./nav";
import PlanContainer from "./pricingStyles";
import styled from "styled-components";
import gold from "./img/gold.PNG";
import silver from "./img/silver.PNG";
import bronze from "./img/bronze.PNG";

const Pricing = ({ prices }) => {
  return (
    <PlanContainer className="plan-container">
      <Nav />
      <div className="title">
        <h1>Choose A Plan</h1>
      </div>
      <div className="plans-cards-container">
        <div className="plans-card">
          <div className="card-image"></div>
          <img className="plan-image" src={bronze} alt="bronze" />
          <div className="info">
            <h4 className="name">Bronze</h4>
            <StyleButton> {prices.bronze} </StyleButton>
          </div>
        </div>
        <div className="plans-card">
          <div className="card-image"></div>
          <img className="plan-image" src={silver} alt="silver" />
          <div className="info">
            <h4 className="name">Silver</h4>
            <StyleButton> {prices.silver} </StyleButton>
          </div>
        </div>
        <div className="plans-card">
          <div className="card-image"></div>
          <img className="plan-image" src={gold} alt="gold" />
          <div className="info">
            <h4 className="name">Gold</h4>
            <StyleButton> {prices.gold} </StyleButton>
          </div>
        </div>
      </div>
    </PlanContainer>
  );
};

export default Pricing;

const StyleButton = styled.button`
  color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 6px;
  height: 60%;
  width: 120%;
  font-size: 1.2rem;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  background: rgb(79, 173, 101);
  border-radius: 5%;
  padding: 1em 2em;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  transition: all 0.1s ease-out 0s;

  &:hover {
    color: #4fad65;
    padding-bottom: 0.3rem;
    border-bottom: 2px solid #4fad65;
    transition: ease-in 0.1s;
  }
`;

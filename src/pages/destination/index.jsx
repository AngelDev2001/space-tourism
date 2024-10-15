import styled from "styled-components";
import {
  BackgroundDestinationDesktop,
  BackgroundDestinationMobile,
  BackgroundDestinationTablet,
} from "../../assets";
import { destinationList } from "../../data-list";
import { useState } from "react";

export const Destination = () => {
  const [destination, setDestination] = useState("moon");

  const destinationView = destinationList[destination];

  return (
    <DestinationContainer>
      <picture>
        <source
          srcSet={BackgroundDestinationDesktop}
          media="(min-width: 1200px)"
        />
        <source
          srcSet={BackgroundDestinationTablet}
          media="(min-width: 425px)"
        />
        <img
          className="background-img"
          src={BackgroundDestinationMobile}
          alt=""
        />
      </picture>
      <h3>
        <span>01</span> Pick Your Destination
      </h3>
      <div>
        <img className="destination-img" src={destinationView.image} alt="" />
      </div>
      <div className="text">
        <div className="types">
          <button
            className={destination === "moon" ? "active" : ""}
            onClick={() => setDestination("moon")}
          >
            Moon
          </button>
          <button
            className={destination === "mars" ? "active" : ""}
            onClick={() => setDestination("mars")}
          >
            Mars
          </button>
          <button
            className={destination === "europa" ? "active" : ""}
            onClick={() => setDestination("europa")}
          >
            Europa
          </button>
          <button
            className={destination === "titan" ? "active" : ""}
            onClick={() => setDestination("titan")}
          >
            Titan
          </button>
        </div>
        <h2>{destinationView.title}</h2>
        <p>{destinationView.description}</p>
        <div className="line"></div>
        <div className="units-time">
          <span>Avg. Distance</span>
          <p>{destinationView.distance}</p>
        </div>
        <div className="units-time">
          <span>Est. Travel Time</span>
          <p>{destinationView.travelTime}</p>
        </div>
      </div>
    </DestinationContainer>
  );
};

const DestinationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  text-align: center;
  padding: 2rem 1rem;
  position: relative;
  color: #ffffff;

  .background-img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  h3 {
    font-weight: 500;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-family: "Barlow Condensed", sans-serif;

    span {
      display: inline-flex;
      margin-right: 0.5rem;
      opacity: 25%;
      font-weight: 700;
    }
  }

  .destination-img {
    width: 12rem;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .types {
    display: flex;
    justify-content: center;
    gap: 2rem;

    button {
      background-color: transparent;
      border: none;
      color: #d0d6f9;
      position: relative;
      font-size: 1.25rem;
      font-family: "Barlow Condensed", sans-serif;
      text-transform: uppercase;

      &::after {
        content: "";
        width: 100%;
        height: 2px;
        position: absolute;
        bottom: -4px;
        left: 0;
        background-color: transparent;
        transition: 0.3s all ease-in-out;
      }
    }

    .active:hover {
      cursor: pointer;
      &::after {
        background-color: #ffffff;
      }
    }
  }

  h2 {
    font-size: 4rem;
    font-family: "Bellefair", serif;
    font-weight: 500;
    text-transform: uppercase;
  }

  p {
    line-height: 1.5;
    color: #d0d6f9;
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: #383b4b;
  }

  .units-time {
    text-transform: uppercase;
    span {
      color: #d0d6f9;
      font-size: 0.8rem;
    }
    p {
      color: #ffffff;
      font-size: 1.5rem;
      font-family: "Bellefair", serif;
    }
  }
`;

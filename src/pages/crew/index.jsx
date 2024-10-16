import styled from "styled-components";
import {
  BackgroundCrewDesktop,
  BackgroundCrewMobile,
  BackgroundCrewTablet,
  ImageDouglasHurley,
} from "../../assets";

export const Crew = () => {
  return (
    <CrewContainer>
      <picture>
        <source srcSet={BackgroundCrewDesktop} media="(min-width: 1200px)" />
        <source srcSet={BackgroundCrewTablet} media="(min-width: 425px)" />
        <img className="background-img" src={BackgroundCrewMobile} alt="" />
      </picture>
      <h3>
        <span>02</span> Meet your crew
      </h3>
      <div className="crew-img">
        <img src={ImageDouglasHurley} alt="" />
        <div className="line"></div>
        <div className="options">
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
      <div className="text">
        <h3>Commander</h3>
        <h2>Douglas Hurley</h2>
        <p>
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </p>
      </div>
    </CrewContainer>
  );
};

const CrewContainer = styled.div`
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

  .crew-img {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 12rem;
    }

    .options {
      display: flex;
      gap: 1.5rem;

      button {
        width: 1rem;
        height: 1rem;
        background-color: #ffffff;
        opacity: 17.44%;
        border: none;
        border-radius: 50%;
      }
    }
  }

  .line {
    width: 100%;
    height: 2px;
    background-color: #383b4b;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 2rem;
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
`;

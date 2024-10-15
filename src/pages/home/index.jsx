import styled from "styled-components";
import {
  BackgroundHomeDesktop,
  BackgroundHomeMobile,
  BackgroundHomeTablet,
} from "../../assets";

export const Home = () => {
  return (
    <HomeContainer>
      <picture>
        <source srcSet={BackgroundHomeDesktop} media="(min-width: 1200px)" />
        <source srcSet={BackgroundHomeTablet} media="(min-width: 425px)" />
        <img src={BackgroundHomeMobile} alt="" />
      </picture>
      <div className="text">
        <span>SO, YOU WANT TO TRAVEL TO</span>
        <h2>SPACE</h2>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div>
        <button>Explore</button>
      </div>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  text-align: center;
  padding: 2rem 1rem;
  position: relative;
  color: #ffffff;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  span {
    font-size: 1.35rem;
    font-family: "Barlow Condensed", sans-serif;
    color: #d0d6f9;
  }

  h2 {
    font-size: 5rem;
    font-family: "Bellefair", serif;
    font-weight: 500;
  }

  p {
    line-height: 1.5;
    color: #d0d6f9;
  }

  button {
    width: 10rem;
    height: 10rem;
    background-color: #ffffff;
    color: #0b0d17;
    border: none;
    border-radius: 50%;
    font-size: 1.5rem;
    font-family: "Bellefair", serif;
    text-transform: uppercase;
  }
`;

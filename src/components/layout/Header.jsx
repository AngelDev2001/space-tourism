import { Link } from "react-router-dom";
import { BtnNavbar, Logo } from "../../assets";
import styled from "styled-components";

export const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <img src={Logo} alt="" />
      </div>
      <div>
        <img src={BtnNavbar} alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <span>00</span> Home
            </Link>
          </li>
          <li>
            <Link to="/destination">
              <span>01</span> Destination
            </Link>
          </li>
          <li>
            <Link to="/crew">
              <span>02</span> Crew
            </Link>
          </li>
          <li>
            <Link to="/technology">
              <span>03</span>Technology
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;

  nav {
    display: none;
  }
`;

import React from "react";
import styled from "styled-components";
import wishIcon from "../assets/header/Icon - Wish List.svg";
import cartIcon from "../assets/header/Icon - Shopping Cart.svg";
import searchIcon from "../assets/header/Icon - Search.svg";
import imgIcon from "../assets/header/Icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import sellImg from "../assets/header/sell.svg";
import AllItemsDrop from "./Others/AllItemsDrop";
import ProfileDrop from "./Others/ProfileDrop";
import NotificationDrop from "./Others/NotificationDrop";
import topNewImg from "../assets/header/Text - New Arrivals.svg";
import smallLogo from "../assets/Icons/logoSmall.svg";
import rightSVG from "../assets/header/Visit Artnstock Collectibles.svg";
// Styled Components

const Container = styled.div`
  width: 100%;
  height: 13.8rem;
  /* border-bottom: 1px solid black; */
`;

const TopBar = styled.div`
  height: 3.2rem;
  background: #333333;
  position: relative;
`;
const TopContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
`;
const TopLeft = styled.div`
  border-right: 1px solid #8e8e8e;
  display: flex;
  align-items: center;
  padding-right: 10px;
`;

const TopConP = styled.p`
  color: #d1d1d1;
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.9rem;
  margin: 0;
`;

const TopCona = styled.a`
  color: #8e8e8e !important;
  border: 1px solid #8e8e8e !important;
  font-size: 1rem;
  font-weight: 400;
  border-radius: 10px;
  padding: 0px 8px;
  margin-left: 4px;
  text-decoration: none;
`;

const TopMid = styled.div`
  /* border-right: 1px solid #8e8e8e; */
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

const TopMidImg = styled.img``;

const TopRight = styled.div`
  /* border-right: 1px solid #8e8e8e; */
  border-left: 1px solid #8e8e8e;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

const TopRightA = styled.a`
  color: #7ad8c5 !important;
  text-transform: uppercase;
  font-size: 13px;
  text-decoration: none;
`;
const TopRightAA = styled.a`
  color: #6cbfef !important;
  text-transform: uppercase;
  font-size: 13px;
  text-decoration: none;
`;

const TopRightImg = styled.img`
  margin: 0 8px;
`;

const MainBar = styled.div`
  /* width: 100%; */
  height: 105px;
  display: flex;
  flex-direction: column;
  padding: 5px 30px;
`;

const MainBarTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0 10px 0;
  width: 100%;
`;

const MainBarBottom = styled.div``;

const MainImg = styled.img`
  margin: 0 5px;
`;

const LeftSideContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MiddleContainer = styled.div``;

const SellImg = styled.img``;

const RightSideContainer = styled.div``;

const RightUl = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style-type: none;
`;

const RightLi = styled.li`
  /* display: inline; */
  &:not(:first-child) {
    margin-left: 15px;
  }
  align-items: center;
`;

const IconImage = styled.img``;

const LinkContainer = styled.ul`
  margin: 0;
  padding-left: 20px;
`;

const LinkLi = styled.li`
  display: inline;
  &:not(:first-child) {
    margin-left: 17px;
  }
  color: #757575;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 2rem;
  text-transform: uppercase;
`;

const LinkA = styled.a`
  text-transform: uppercase;
  color: #757575 !important;
  font-size: 1.4rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #333333 !important;
  }
`;

const SearchContainer = styled.div`
  background: #eeeeee;
  height: 4.8rem;
  padding: 0 0 0 20px;
  border-radius: 100px;
  /* overflow: hidden; */
  /* border-top-left-radius: 20px;
border-bottom-left-radius: 20px; */
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const SearchRight = styled.div`
  display: flex;
`;

const SearchInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  /* width: 80%; */
  /* height: 4rem; */
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 2.2rem;
  color: #bbbbbb;
  flex: 1;
`;

const SearchImageButton = styled.button`
  background: transparent;
  color: #757575;
  font-size: 1.4rem;
  border: none;
  /* margin: 0 5px; */
  padding: 5px;
  border-right: 1px solid #bbbbbb;
  height: inherit;
  display: flex;
  align-items: center;
  width: max-content;
`;

const SearchButton = styled.button`
  background: #bbbbbb;
  border: none;
  height: inherit;
  padding: 0 10px;
  color: #333333;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 500;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
`;

const AllItemsCon = styled.div`
  padding: 15px 15px;
  border-left: 1px solid #dadada;
  border-right: 1px solid #dadada;
`;

const SellButton = styled.button`
  background: linear-gradient(90deg, #3dfcdc 0%, #9efd58 49.7%, #ffe82a 100%);
  border: none;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.7rem;
  height: 2.8rem;
  width: 11.3rem;
  border-radius: 50px;
`;

const Header = () => {
  const navigate = useNavigate();
  // const isLoggedIn = true
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Container>
      <TopBar>
        <TopContent>
          <TopLeft>
            <TopConP>SELL YOUR PAINTINGS AND OTHER ART ONLINE</TopConP>
            <TopCona>Learn more</TopCona>
          </TopLeft>
          <TopMid>
            <TopMidImg src={topNewImg} />
          </TopMid>
          <TopRight>
            {/* <TopRightA>Visit</TopRightA> */}
            <TopRightImg src={rightSVG} />
            {/* <TopRightAA>MERCHANDISE</TopRightAA> */}
          </TopRight>
        </TopContent>
      </TopBar>

      <MainBar>
        <MainBarTop>
          <LeftSideContainer>
            <Link to="/">
              {" "}
              <MainImg src={smallLogo} alt="" />
            </Link>
            <LinkContainer>
              <LinkLi>
                <Link to="/art-home">Art</Link>
              </LinkLi>
              <LinkLi>
                <Link to="/product-home">Products</Link>
              </LinkLi>
              <LinkLi>Blogs</LinkLi>
            </LinkContainer>
          </LeftSideContainer>
          <MiddleContainer>
            <SellButton>Sell on Artnstock</SellButton>
          </MiddleContainer>
          <RightSideContainer>
            <RightUl>
              <RightLi>
                <LinkA>Plans & Pricing</LinkA>
              </RightLi>
              {isLoggedIn ? (
                <RightLi>
                  <LinkA>
                    <ProfileDrop />{" "}
                  </LinkA>{" "}
                </RightLi>
              ) : (
                <>
                  <RightLi>
                    <LinkA onClick={() => navigate("/join")}>Join </LinkA>{" "}
                  </RightLi>
                  <RightLi>
                    <LinkA onClick={() => navigate("/login")}>Sign In</LinkA>{" "}
                  </RightLi>
                </>
              )}
              <RightLi>
                <LinkA>
                  <NotificationDrop />
                </LinkA>
              </RightLi>
              <RightLi>
                <LinkA>
                  <IconImage src={wishIcon} />
                </LinkA>
              </RightLi>
              <RightLi>
                <LinkA>
                  <IconImage src={cartIcon} />
                </LinkA>
              </RightLi>
            </RightUl>
          </RightSideContainer>
        </MainBarTop>
        <MainBarBottom>
          <SearchContainer>
            <SearchInput placeholder="Find Something Great" />
            <SearchRight>
              <AllItemsCon>
                <AllItemsDrop />
              </AllItemsCon>
              <SearchImageButton>
                <IconImage style={{ marginRight: "5px" }} src={imgIcon} />{" "}
                Search by image
              </SearchImageButton>
              <SearchButton>
                <IconImage style={{ marginRight: "5px" }} src={searchIcon} />{" "}
                Search
              </SearchButton>
            </SearchRight>
          </SearchContainer>
        </MainBarBottom>
      </MainBar>
    </Container>
  );
};

export default Header;

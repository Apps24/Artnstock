import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { httpClient } from '../../axios';
import Masonry from "@mui/lab/Masonry";
import Box from '@mui/material/Box';
import icon from "../../assets/art/ArtWhite.svg"

const Para = styled.p`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 400;
  color: #757575;
  margin: 30px 0 8px 0;
`;

const Para1 = styled.p`
  text-align: center;
  font-size: 1.4rem;
  font-weight: 400;
  color: #757575;
  line-height: 2rem;
  margin: 19px 0 25px 0;
`;

const H1 = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: 3.8rem;
  line-height: 4.1rem;
  color: #333333;
  margin: 0;
`;

const DiscoverBtn = styled.button`
  background: #333333;
  color: #ffffff;
  border-radius: 50px;
  padding: 15px 20px;
  margin: 30px auto 50px;
  font-size: 14px;
  display: block;
 
  font-weight: 500;

`;

const Content = styled.div`
  color: white;
  opacity: 0;
  transition: 0.3s all ease-in;
  width: 100%;
  height: 100%;
`;

const Detail = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Head = styled.h1`
  font-size: 3.8rem;
  margin: 0;
  font-weight: 500;
`;

const P = styled.p`
  font-size: 1.1rem;
  margin: 0;
  font-weight: 500;
`;

const Div = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  &:hover ${Content} {
    opacity: 1;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.3);
  }
`;

const IconImg = styled.img`
  position: absolute;
  bottom: 3%;
  left: 3%;
`
const Grid = ({type}) => {
  const [grid, gridChange] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {
    httpClient.get("/subject_master/getActiveSubject" ).then((res) => {
        gridChange(res.data);
    });
  }, []);

  const sendProduct = (grid) => {
    console.log(grid);
    // sessionStorage.setItem("artId", grid.artId)
    sessionStorage.setItem("subId",grid.subjectId)
    sessionStorage.setItem("catName", "cat")
    navigate("/productList/art")
  }
  
  const sendAllProd = () => {
    sessionStorage.setItem("catName", "all")
    navigate("/productList/art")
  }
  return (
    <>
        <Para>Artnstock / Home</Para>
      <H1>
        The Most inspiring Abstract Art<br /> from Artnstock
      </H1>
      <Para1>
        Every piece of ar we offer is available in multiple products and sizes
        to fit any decor style or budget. Our art collection will open new
        horizons<br /> for your visual projects and would be a perfect
        solution for anyone who needs high-quality art at affordable prices.
      </Para1>
      <div style={{position: "relative"}} className="container text-center mb-5 ps-5 pe-5">
        <Box sx={{ minHeight: 650 }}>
          <Masonry columns={4} spacing={3}>
            {grid.map((grid) => (
              // console.log(typeof(grid.gridHeight))
              <Div
                key={grid.subjectId}
                style={{
                  height: Number(grid.gridHeight),
                  backgroundImage: `url('${grid.subjectImage}')`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                }}
                onClick={() => sendProduct(grid)}
              >
                <Content>
                  <Detail>
                    <Head>{grid.subjectName}</Head>
                    <P>{grid.subjectDescription}</P>
                  </Detail>
                  <IconImg src={icon} alt="" />
                </Content>
              </Div>
            ))}
          </Masonry>
        </Box>
        <DiscoverBtn onClick={() => sendAllProd()}>Discover More</DiscoverBtn>
      </div>
    </>
  )
}

export default Grid
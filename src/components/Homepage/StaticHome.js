import React from 'react'
import styled from 'styled-components';
import musicIcon from "../../assets/art/music.svg"
import photIcon from "../../assets/art/photos.svg"
import videoIcon from "../../assets/art/video.svg"

const H1 = styled.h1`
  font-size: 38px;
  font-weight: 500;
  width: 70%;
  margin: auto;
`;

const P = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #757575;
  width: 70%;
  margin: 15px auto;
`;

const BotDesc = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #757575;
  margin: 10px 0;
`;
const CustomHr = styled.hr`
  width: 80%;
  margin: auto;
  color: #efefef;
`;

const IconImg = styled.img`
  width: 70px;
  height: 66px;
  margin: auto;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 10px 0;
`;

const BotIcon = styled.img`
width: 17px;
height: 15px;
position: absolute;
bottom: 10px;
left: 10px;
`

const DiscoverBtn = styled.button`
    background: #333333;
    color: #FFFFFF;
    border-radius: 50px;
    padding: 6px 25px;
    margin: 30px 0 100px 0;
    font-size: 14px;
    font-weight: 500;
`
const Content = styled.div`
  color: white;
  opacity: 0;
  transition: 0.2s all ease-in;
  width: 100%;
  height: 100%;
border-radius: 16px;
  z-index: 99;
`;

const Detail = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
`;

const Head = styled.h1`
  font-size: 38px;
  margin: 0;
  font-weight: 500;
`;

const CardP = styled.p`
  font-size: 11px;
  margin: 0;
  font-weight: 500;
  line-height: 14px;
`;

const PriceP = styled.p`
font-size: 38px;
  margin: 0;
  font-weight: 300;
  
`

const Div = styled.div`
border-radius: 16px;
 &:hover ${Content} {
    opacity: 1;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.2);
  }
`

const temparray = [
  {
    id: 1,
    imageLink:
      "https://zplusglobalmarketinsights.com/artNStockImages/photo.png",
    logo: photIcon,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor",
  },
  {
    id: 2,
    imageLink:
      "https://zplusglobalmarketinsights.com/artNStockImages/video.png",
    logo: videoIcon,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor",
  },
  {
    id: 3,
    imageLink:
      "https://zplusglobalmarketinsights.com/artNStockImages/audio.png",
    logo: musicIcon,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor",
  },
];

const sellTempArray = [
  {
    id: 1,
    iconLink:
      "https://zplusglobalmarketinsights.com/artNStockImages/Create.png",
    title: "Create",
    desc: "Lorem ipsum dolor sit amet labore consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore",
  },
  {
    id: 2,
    iconLink:
      "https://zplusglobalmarketinsights.com/artNStockImages/Submit.png",
    title: "Submit",
    desc: "Lorem ipsum dolor sit amet labore consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore",
  },
  {
    id: 3,
    iconLink:
      "https://zplusglobalmarketinsights.com/artNStockImages/GetPaid.png",
    title: "Get Paid",
    desc: "Lorem ipsum dolor sit amet labore consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore",
  },
  {
    id: 4,
    iconLink: "https://zplusglobalmarketinsights.com/artNStockImages/Refer.png",
    title: "Refer",
    desc: "Lorem ipsum dolor sit amet labore consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore",
  },
];

const StaticHome = () => {
  return (
    <>
    <div className="container text-center pt-5 pb-5">
      <H1>
        Royalty-Free stock images, footage, music and more for your creative
        projects
      </H1>
      <P>
        Every piece of art we offer is available in multiple products and
        sizes to fit any decor style or budget. Our art collection will open
        new horizons for your visual projects and would be a perfect solution
        for anyone who needs high-quality art at affordable prices.
      </P>
      <div className="row mt-4">
        {temparray.map((data) => {
          return (
            <div key={data.id} className="col-lg-4">
              <Div
                className="card"
                style={{
                  border: "none",
                  overflow: "hidden",
                  height: "260px",
                  backgroundImage: `url('${data.imageLink}')`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  position: 'relative',
                }}
              >
                <Content>
                    <Detail>
                        <Head>Photos</Head>
                        <CardP>The most inspiring abstract art from Artnstock</CardP>
                        <PriceP>86429+</PriceP>
                    </Detail>
                </Content>
                <BotIcon src={data.logo} />
              </Div>
              <BotDesc>{data.desc}</BotDesc>
            </div>
          );
        })}
      </div>
    </div>
    <CustomHr />
    <div className="container text-center pt-5 pb-5">
      <H1>Sell your Art, Design & Photos on Artnstock</H1>
      <P>
        artnstock.com is an online platform for promoting quality art created
        by artists worldwide. With a simple registration process, we allow you
        to sell paintings as many as you choose, with the freedom of putting
        up the price you want.
      </P>
      <div className="row mt-5">
        {sellTempArray.map((data1) => {
          return (
            <div key={data1.id} className="col-lg-3">
              <div
                style={{ borderColor: "#EFEFEF", borderRadius: "20px" }}
                className="card text-center p-4"
              >
                <IconImg src={data1.iconLink} />
                <Title>{data1.title}</Title>
                <BotDesc>{data1.desc}</BotDesc>
              </div>
            </div>
          );
        })}
      </div>
      <DiscoverBtn>Get Started</DiscoverBtn>
    </div>
  </>
  )
}


export default StaticHome
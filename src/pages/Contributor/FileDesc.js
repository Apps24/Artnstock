import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Homepage/Footer";
import headImg from "../../assets/contri/Con_Head.png";
import artImg from "../../assets/contri/art_img.svg";
import photoImg from "../../assets/contri/photo.svg";
import videoImg from "../../assets/contri/video.svg";
import templateImg from "../../assets/contri/template.svg";
import { Checkbox } from "@mui/material";

const MainContainer = styled.div``;

const InsideCon = styled.div`
  padding: 0 250px;
`;

const HeadImgDiv = styled.img`
  width: 100%;
`;

const HeadDesc = styled.p`
  font-size: 12px;
  margin: 30px 0;
  font-weight: 500;
  color: #757575;
  text-align: center;
`;

const StrongText = styled.span`
  font-size: 14px;
  /* margin: 30px 0; */
  font-weight: 600;
  margin: 0;
  color: #333333;
  /* text-align: left; */
  line-height: 20px;
`;
const NormalText = styled.p`
  font-size: 14px;
  /* margin: 30px 0; */
  margin: 0;
  font-weight: 600;
  color: #757575;
  /* text-align: left; */
  line-height: 20px;
`;

const OrangeText = styled.span`
  /* font-size: 14px; */
  /* margin: 30px 0; */
  font-weight: 600;
  color: #f7941d;
  margin: 0;

  /* text-align: left; */
  /* line-height: 20px; */
`;

const Ul = styled.ul`
  padding-left: 1.1rem;
  /* list-style: none; */
`;

const Li = styled.li`
 /* &::before {
    content: "\2022";
  color: red;
  font-weight: bold;
  display: inline-block; 
  width: 15px;
  margin-left: -1em;
 } */
`;

const MainHeading = styled.h1`
  font-size: 25px;
  margin: 0px 0 20px 0;
  font-weight: 600;
  color: #333333;
  text-align: left;
  /* line-height: 20px; */
`;

const SubHeading = styled.h1`
  font-size: 18px;
  color: #333333;
  margin: 30px 0 20px 0;
`;

const FlexContainer = styled.div`
  display: flex;
`;

const SmallCon = styled.div`
  text-align: center;
`;

const IconImg = styled.img``;

const Count = styled.h1`
  margin: 0;
  color: #333333;
  font-size: 25px;
  font-weight: 300;
`;

const TableCon = styled.div`
  width: 618px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #dddddd;
`;

const TableHeadCon = styled.div`
  background: #ececec;
  text-align: center;
  padding: 10px 0;
`;

const TableHeading = styled.h1`
  margin: 0;
  color: #333333;
  font-size: 15px;
  line-height: 26px;
`;

const Table = styled.table``;

const Tr = styled.tr``;

const Th = styled.th`
  font-size: 13px;
  line-height: 26px;
  color: #333333;
  border: 1px solid #dddddd;
  &:first-child {
    padding-left: 10px;
    width: 165px;
  }
  &:not(:first-child) {
    width: 90px;
    padding: 5px 0;
    text-align: center;
  }
`;

const Td = styled.td`
  font-size: 13px;
  line-height: 26px;
  color: #333333;
  border: 1px solid #dddddd;
  &:first-child {
    padding-left: 10px;
    width: 165px;
    font-weight: 700;
    background: #f7f7f7;
  }
  &:not(:first-child) {
    width: 90px;
    padding: 5px 0;
    text-align: center;
    font-weight: 500;
    color: #757575;
  }
`;

const Hr = styled.hr`
  color: #efefef;
  background-color: #efefef;
  margin: 31px 0;
  border: none;
  height: 2px;
`;

const GreenBtn = styled.button`
  background: #00f9c6;
  padding: 7px 10px;
  font-size: 12px;
  font-weight: 600;
  color: #333333;
  border: none;
  border-radius: 50px;
`;

const CheckGroup = styled.div`
 display: flex;
 align-items: center;
 width: fit-content;
 margin:20px auto 15px;
`

const BtnCon = styled.div`
 margin: 0 auto;
 width: fit-content;
 margin-bottom: 50px;
`

const FillBtn = styled.button`
    /* margin: 24px 0 8px 0; */
    padding: 10px 20px;
    background: #333333;
    color: #ffffff;
    font-size: 14px;
    font-weight: 400;
    border-radius: 50px;
    cursor: pointer;
`

const OutlineBtn = styled.button`
  padding: 10px 20px;
  background:#ffffff ;
    border: 2px solid #333333;
    color: #757575;
    font-size: 14px;
    font-weight: 400;
    border-radius: 50px;
    cursor: pointer;
    margin-left: 15px;
`

const FileDesc = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <HeadImgDiv src={headImg} />
        <HeadDesc>
          Artnstock / Sell on Artnstock / Technical Specifications
        </HeadDesc>
        <InsideCon>
          <StrongText style={{ marginBottom: "20px" }}>
            All of the files you upload will be checked by our inspectors, and
            once they pass inspection, they'll appear on the website. Starting
            from that moment, <br /> they are available to Buyers, and can start
            turning a profit!
          </StrongText>
          <NormalText>
            By accepting the <OrangeText>Terms of Service</OrangeText>,{" "}
            <OrangeText>License Agreement</OrangeText>,{" "}
            <OrangeText>Privacy Policy</OrangeText> and{" "}
            <OrangeText>Copyright and Trademark Policy</OrangeText> of Artnstock
            that you sign while creating a <br /> Artnstock's account, and
            uploading your files to our website, you warrant the following:
          </NormalText>
          <Ul>
            <Li>
              <NormalText>
                You are the author of all the files you upload.
              </NormalText>
            </Li>
            <Li>
              <NormalText>You are 18 or older.</NormalText>
            </Li>
            <Li>
              <NormalText>
                You possess all the required documents and rights allowing you
                to display and use your files as well as their related elements
                (model releases, <br />
                property releases, minor releases).
              </NormalText>
            </Li>
            <Li>
              <NormalText>
                All of the files you upload will be checked by our inspectors,
                and once they pass inspection, they'll appear on the website.
                Starting from that <br />
                moment, they are available to buyers, and can start turning a
                profit.
              </NormalText>
            </Li>
          </Ul>
          <Hr />
          <MainHeading>Files Upload Limit</MainHeading>
          <NormalText>
            Our review team handles hundreds of thousands of file submissions
            every week. To ensure a timely and consistent turnaround for our
            global <br /> community of contributors, we limit the rate of weekly
            submissions.
          </NormalText>
          <NormalText style={{ margin: "20px 0" }}>
            Artnstock contributors can submit up to{" "}
            <StrongText>
              250 Art, 250 Photos, 90 Video Clips, 90 Music Tracks and 250
              Templates during any 7 day period.
            </StrongText>{" "}
            The 7-day <br /> timeframe is a rolling window. If you exceed the
            submission limit, you will receive a pop-up message on the dashboard
            of your account page, that will <br /> remain until the limit window
            expires.
          </NormalText>
          <FlexContainer>
            <SmallCon>
              <IconImg src={artImg} />
              <NormalText>Art</NormalText>
              <Count>250</Count>
            </SmallCon>
            <SmallCon style={{ marginLeft: "18px" }}>
              <IconImg src={photoImg} />
              <NormalText>Photos</NormalText>
              <Count>250</Count>
            </SmallCon>
            <SmallCon style={{ marginLeft: "18px" }}>
              <IconImg src={videoImg} />
              <NormalText>Footage</NormalText>
              <Count>90</Count>
            </SmallCon>
            <SmallCon style={{ marginLeft: "18px" }}>
              <IconImg src={templateImg} />
              <NormalText>Templates</NormalText>
              <Count>250</Count>
            </SmallCon>
          </FlexContainer>
          <NormalText style={{ fontSize: "11px" }}>
            Weekly submissions with approval rate more than 80%
          </NormalText>
          <NormalText style={{ margin: "20px 0" }}>
            Contributors with more than 500 files online and an approval ratio
            higher than 80% are eligible to submit 2-times more than the current
            upload limit. <br />
            Feature available only based on{" "}
            <OrangeText>application request</OrangeText>.
          </NormalText>
          <TableCon>
            <TableHeadCon>
              <TableHeading>Files Upload Limit Per Week</TableHeading>
            </TableHeadCon>
            <Table>
              <Tr style={{ background: "#ececec " }}>
                <Th>Approval Percentage</Th>
                <Th>Art</Th>
                <Th>Photos</Th>
                <Th>Footage</Th>
                <Th>Music</Th>
                <Th>Templates</Th>
              </Tr>
              <Tr style={{ background: "#feeeee" }}>
                <Td>Higher Than 80%</Td>
                <Td>250</Td>
                <Td>250</Td>
                <Td>250</Td>
                <Td>250</Td>
                <Td>250</Td>
              </Tr>
              <Tr>
                <Td>Beetween 60% - 80%</Td>
                <Td>250</Td>
                <Td>250</Td>
                <Td>250</Td>
                <Td>250</Td>
                <Td>250</Td>
              </Tr>
              <Tr>
                <Td>Beetween 40% - 60%</Td>
                <Td>250</Td>
                <Td>250</Td>
                <Td>250</Td>
                <Td>250</Td>
                <Td>250</Td>
              </Tr>
              <Tr>
                <Td>Beetween 20% - 40%</Td>
                <Td>250</Td>
                <Td>250</Td>
                <Td>250</Td>
                <Td>250</Td>
                <Td>250</Td>
              </Tr>
              <Tr>
                <Td>Beetween 0% - 20%</Td>
                <Td>250</Td>
                <Td>250</Td>
                <Td>250</Td>
                <Td>250</Td>
                <Td>250</Td>
              </Tr>
            </Table>
          </TableCon>
          <Hr />
          <MainHeading>Technical File Requirements</MainHeading>
          <SubHeading>Art</SubHeading>
          <NormalText>
            To make sure your designs are printing well on products, you've got
            to keep Dimensions and Format in mind. When uploading your files,
            please make <br /> sure that your files are saved in RGB and not
            CMYK. Only JPEG (raster image), PNG (raster image) and EPS (vector
            image) files will be accepted.{" "}
          </NormalText>
          <NormalText style={{marginTop: "15px", marginBottom: "10px"}}>
            Most products require different minimum dimensions to ensure a high
            print quality. If your goal is to enable all products Artnstock has
            to offer including large format products like curtains, bedding,
            outdoor items, wall murals, and furniture, we recommend starting
            with a horizontal asset that, 14040 x 9930 Pixels, a vertical asset
            that, 9930 x 14040 Pixels, and a square asset that, 14040 x 14040
            Pixels (any one of these dimensions) at 300 dpi. For certain
            cut-and-sew products like backpacks, duffle bags, and all over
            graphic tees, we recommend referencing our{" "}
            <OrangeText>print templates</OrangeText> with required pixels and
            dimensions to ensure your artwork is correctly placed.{" "}
          </NormalText>
          {/* <TableCon>
            <TableHeadCon>
              <TableHeading>Art Image Specification</TableHeading>
            </TableHeadCon>
            <Table>
              <Tr style={{ background: "#ececec " }}>
                <Th>Image Dimensions</Th>
                <Th>Inches</Th>
                <Th>Centimeters</Th>
                <Th>Milimeters</Th>
                <Th>Pixels</Th>
                <Th>Templates</Th>
              </Tr>
              <Tr style={{ background: "#feeeee" }}>
                <Td>Higher Than 80%</Td>
                <Td>250</Td>
                <Td>250</Td>
                <Td>250</Td>
                <Td>250</Td>
                <Td>250</Td>
              </Tr>
              <Tr>
                <Td>Beetween 60% - 80%</Td>
                <Td>250</Td>
                <Td>250</Td>
                <Td>250</Td>
                <Td>250</Td>
                <Td>250</Td>
              </Tr>
              <Tr>
                <Td>Beetween 40% - 60%</Td>
                <Td>250</Td>
                <Td>250</Td>
                <Td>250</Td>
                <Td>250</Td>
                <Td>250</Td>
              </Tr>
              <Tr>
                <Td>Beetween 20% - 40%</Td>
                <Td>250</Td>
                <Td>250</Td>
                <Td>250</Td>
                <Td>250</Td>
                <Td>250</Td>
              </Tr>
              <Tr>
                <Td>Beetween 0% - 20%</Td>
                <Td>250</Td>
                <Td>250</Td>
                <Td>250</Td>
                <Td>250</Td>
                <Td>250</Td>
              </Tr>
            </Table>
          </TableCon> */}
          <Ul>
            <Li><NormalText>You must include a JPEG file preview of Horizontal: 2400 x 1697 Pixels (300 DPI) or Vertical: 1697 x 2400 Pixels (300 DPI) or Square: 2400 x 2400 Pixels (300 DP!)</NormalText></Li>
            <Li><NormalText>We do not accept PSD or TIFF files for Art</NormalText></Li>
            <Li><NormalText>No greater than 100 MB (art image) and 50 MB (vector image)</NormalText></Li>
            <Li><NormalText>We recommend referencing our “Required Pixels & Dimensions” page to ensure your artwork is correctly placed.</NormalText></Li>
          </Ul>
          <GreenBtn>Required Pixels & Dimensions</GreenBtn>
          <CheckGroup>
          <Checkbox color="default" />
          <NormalText>acknowledge and warrant that have read and agree with Artnstoc’s uploading Terms and Conditions.</NormalText>
          </CheckGroup>
          <BtnCon>
            <FillBtn>Continue</FillBtn>
            <OutlineBtn>Cancel</OutlineBtn>
          </BtnCon>
        </InsideCon>
      </MainContainer>
      <Footer />
    </>
  );
};

export default FileDesc;

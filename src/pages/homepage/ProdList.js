import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify";
import styled from "styled-components";
import filterIcon from "../../assets/temp/Icon - Filter.svg";
import closeIcon from "../../assets/Icons/crossIcon.svg";
import artIcon from "../../assets/Icons/artIcon.svg";
import photoIcon from "../../assets/Icons/photosIcon.svg";
import videoIcon from "../../assets/Icons/videoIcon.svg";
import musicIcon from "../../assets/Icons/musicIcon.svg";
import tempIcon from "../../assets/Icons/templatesIcon.svg";
import prodIcon from "../../assets/Icons/productsIcon.svg";
import wishIcon from "../../assets/header/white-heart.svg";

import plusIcon from "../../assets/header/plus.svg";
import shareIcon from "../../assets/header/share.svg";
import userIcon from "../../assets/header/user.svg";
import filesIcon from "../../assets/header/files.svg";
import viewIcon from "../../assets/header/view.svg";

import bagIcon from "../../assets/temp/bag.svg";

import rec1Icon from "../../assets/temp/rec1.svg";
import rec2Icon from "../../assets/temp/rec2.svg";
import squareIcon from "../../assets/temp/square.svg";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Box, Drawer, IconButton } from "@mui/material";
import { styled as styles, useTheme } from "@mui/material/styles";
import { SwatchesPicker } from "react-color";
import Tooltip from "@mui/material/Tooltip";
import Footer from '../../components/Homepage/Footer';
import Header from '../../components/Header';
import { httpClient } from '../../axios';
import Dropdown from '../../components/Others/Dropdown';
import { useNavigate } from 'react-router-dom';

const TopContainer = styled.div`
  padding: 15px 40px;
`;

const MainContainer = styled.div`
  padding: ${(props) => (props.open ? "15px 40px 15px 0px" : "15px 40px")};
  position: relative;
  height: max-content;
`;

const GridContainer = styled.div`
  margin-top: 15px;
`;

const TopP = styled.p`
  font-weight: 500;
  margin: 0;
  font-size: 12px;
  color: #757575;
`;

const Heading = styled.h2`
  font-weight: 500;
  margin: 0;
  font-size: 38px;
  color: #333333;
`;

const FlexDiv = styled.div`
  margin-bottom: 15px;
`;

const ArtTitle = styled.p`
  font-size: 15px;
  font-weight: 600;
  margin: 0;
  color: #333333;
`;

const ArtDesc = styled.p`
  font-size: 11px;
  color: #757575;
  margin: 0;
`;

const Content = styled.div`
  color: white;
  opacity: 0;
  transition: 0.3s all ease-in;
  width: 100%;
  height: 100%;
  position: relative;
`;

const HovTitle = styled.h3`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Div = styled.div`
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  &:hover ${Content} {
    opacity: 1;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.2);
  }
`;

const TopCon = styled.div`
  display: flex;
  /* justify-content: space-between; */
  overflow: hidden;
  /* flex-wrap: wrap; */
  margin-top: 15px;
`;

const IconImage = styled.img``;

const BtnCon = styled.button`
  background: none;
  border: 1px solid #757575;
  padding: 5px 10px;
  border-radius: 50px;
  color: #757575;
  font-size: 12px;
  margin-left: 5px;
`;

const PaginationCon = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0%;
  transform: translateX(-50%);
  text-align: center;
  /* height: 210px; */
  /* margin-top: 15px; */
`;

const PaginationConTemp = styled.div`
  display: flex;
  align-items: center;
`;

const PageText = styled.p`
  font-size: 13px;
  font-weight: 600;
  color: #757575;
  margin: 0;
`;
const InputCon = styled.div`
  width: fit-content;
  overflow: hidden;
  border-radius: 50px;
  height: 30px;
  border: 1px solid #e8e8e8;
  display: flex;
`;

const Input = styled.input`
  width: 32px;
  border: none;
`;

const InputBtn = styled.button`
  padding: 1px 8px;
  border: none;
`;

const DiscoverBtn = styled.button`
  background: #333333;
  color: #ffffff;
  border-radius: 50px;
  padding: 6px 25px;
  margin: 10px 0 100px 0;
  font-size: 14px;
  font-weight: 500;
`;
const DiscoverBtn1 = styled.button`
  background: #333333;
  color: #ffffff;
  border-radius: 50px;
  padding: 6px 0;
  /* margin: 10px 0 100px 0; */
  font-size: 12px;
  width: 99px;
  margin-top: 25px;
  font-weight: 500;
`;

const FilterTop = styled.div`
  height: 4.7rem;
  width: 100%;
  position: relative;
`;

const FlexContainer = styled.div`
  display: flex;
`;

const SideSelect = styled.select`
  height: 40px;
  padding: 4px 8px;
  color: #757575;
  border-color: #757575;
  border-radius: 50px;
  outline: none;
`;

const SideOption = styled.option``;

const FilterLabel = styled.label`
  color: #757575;
  font-size: 1.2rem;
  line-height: 1.2rem;
  margin-bottom: 5px;
  /* font-weight: 600; */
  &:first-child {
    margin-top: 25px;
  }
  margin-top: 12px;
`;

const ContainDraw = styled.div``;

const SizeFlex = styled.div`
  display: flex;
`;

const SizeBox = styled.div`
  border: 1px solid #757575;
  padding: 20px;
  border-radius: 10px;
  margin-right: 12px;
`;

const ConInputContainer = styled.div`
  border: 1px solid #757575;
  display: flex;
  border-radius: 50px;
  overflow: hidden;
`;
const ConInput = styled.input`
  border: none;
  height: 40px;
  padding: 2px 10px;
  width: 80%;
  outline: none;
`;
const ConButton = styled.button`
  border: none;
  padding: 0 10px;
  color: #757575;
  margin: 5px;
  border-radius: 20px;
  font-size: 12px;
`;

const OrangeText = styled.div`
  color: #f7941d;
  font-size: 11px;
  font-weight: 600;
  margin: 0;
`;

const ColorPickerCon = styled.div``;

const HovBotContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 10px;
`;

const Main = styles("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    width: "0%",
    flexGrow: 1,
    padding: "0 0 0 15px",
    // padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${277}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);


const ProdList = () => {
    const [prodList, setProdList] = useState([]);
    const [stylesList, setStylesList] = useState([])
    const [subjectList, setSubjectList] = useState([])

    const navigate = useNavigate()
    
    useEffect(() => {
      if (sessionStorage.getItem("catName") === "cat") {
        httpClient
          .get("/art_master/getSubjectIdWiseSubjectMaster/"+ sessionStorage.getItem("subId"))
          .then((res) => {
            // console.log(res);
            if (res.status === 200) {
              setProdList(res.data);
            }
          })
          .catch((err) => {
            toast.error("Something Went Wrong");
          });
      } else if (sessionStorage.getItem("catName") === "all") {
        httpClient
          .get("/art_master/getActiveArtMasterList")
          .then((res) => {
            // console.log(res);
            if (res.status === 200) {
              setProdList(res.data);
            }
          })
          .catch((err) => {
            toast.error("Something Went Wrong");
          });
      }
    getActiveStyles()
    getActiveSubjects()
    }, []);

    const getActiveStyles = () => {
      httpClient.get("/style_master/getActiveStyleMaster").then((res) => {
        // console.log(res);
        setStylesList(res.data)
      })
    }

    const getActiveSubjects = () => {
      httpClient.get("/subject_master/getActiveSubject").then((res) => {
        setSubjectList(res.data)
      })
    }


    const [open, setOpen] = useState(false);
    const [responsive, setResponsive] = useState({
      350: 2,
      750: 3,
      900: 4,
      1200: 6,
    });
  
    const handleDrawerOpen = () => {
      setOpen(true);
      setResponsive({ 350: 1, 750: 2, 900: 3, 1200: 5 });
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
      setResponsive({ 350: 2, 750: 3, 900: 4, 1200: 6 });
    };

    const showDetailsPage = (data) => {
      // console.log(data);
      if(data != null) {
        navigate("/artDetails")
        sessionStorage.setItem("artId",data.artId)
      }
    }

  return (
    <>
    <Header />
    <TopContainer>
      <TopP>Artnstock / Art / All Art</TopP>
      <Heading>All Art</Heading>
    </TopContainer>
    <MainContainer open={open}>
      <ContainDraw>
        <Box sx={{ display: "flex" }}>
          <Drawer
            sx={{
              width: "27.7rem",
              flexShrink: 0,
              height: 1043,
              "& .MuiDrawer-paper": {
                width: "27.7rem",
                height: 1043,
                paddingLeft: "2.3rem",
                paddingRight: "1.8rem",
                boxSizing: "border-box",
              },
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >  
            <FilterTop>
              <IconImage
                style={{
                  // width: "15px",
                  position: "absolute",
                  right: "0",
                  top: "15px",
                }}
                onClick={handleDrawerClose}
                src={closeIcon}
              />
            </FilterTop>
            <FlexContainer>
              <IconImage src={artIcon} />
              <IconImage
                style={{ marginLeft: "10px" }}
                src={photoIcon}
              />
              <IconImage
                style={{ marginLeft: "10px" }}
                src={videoIcon}
              />
              <IconImage
                style={{ marginLeft: "10px" }}
                src={musicIcon}
              />
              <IconImage
                style={{ marginLeft: "10px" }}
                src={tempIcon}
              />
              <IconImage
                style={{ marginLeft: "10px" }}
                src={prodIcon}
              />
            </FlexContainer>

            <FilterLabel>Sort By</FilterLabel>
            <SideSelect>
              <SideOption>Most Popular</SideOption>
            </SideSelect>
            <FilterLabel>Style</FilterLabel>  
            <Dropdown title="All Styles" list={stylesList} type="styles" />
            <FilterLabel>Subject</FilterLabel>
            <Dropdown title="All Subjects" list={subjectList} type="subjects" />
            <FilterLabel>Medium</FilterLabel>
            <Dropdown title="All Mediums" list={prodList} type="mediums" />


            <FilterLabel>Size</FilterLabel>
            <SizeFlex>
              <SizeBox>S</SizeBox>
              <SizeBox>M</SizeBox>
              <SizeBox>L</SizeBox>
            </SizeFlex>
            <FilterLabel>Orientation</FilterLabel>
            <SizeFlex>
              <IconImage style={{ marginRight: "10px" }} src={rec1Icon} />
              <IconImage style={{ marginRight: "10px" }} src={rec2Icon} />
              <IconImage src={squareIcon} />
            </SizeFlex>
            <FilterLabel>Search By Artist/Contributor</FilterLabel>
            <ConInputContainer>
              <ConInput placeholder="Contributor's Name" />
              <ConButton>Search</ConButton>
            </ConInputContainer>
            <ColorPickerCon>
              <FilterLabel>Colours</FilterLabel>

              <SwatchesPicker width={"100%"} />
            </ColorPickerCon>
            <OrangeText>Clear Colour Filter</OrangeText>
            <DiscoverBtn1>Clear All Filters</DiscoverBtn1>
          </Drawer>
          <Main open={open}>
            <TopCon>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <IconImage src={filterIcon} />
              </IconButton>
              <BtnCon>Architecture/Buildings</BtnCon>
              <BtnCon>Backgrounds/Textarea</BtnCon>
              <BtnCon>Beauty/Fashion</BtnCon>
              <BtnCon>Bussiness/Finance</BtnCon>
              <BtnCon>Computer/Communication</BtnCon>
              <BtnCon>Education</BtnCon>
              <BtnCon>Emotions</BtnCon>
              <BtnCon>Health/Medical</BtnCon>
              <BtnCon>Industry/Craft</BtnCon>
              <BtnCon>Nature/Landscape</BtnCon>
              <BtnCon>People</BtnCon>
              <BtnCon>Computer/Communication</BtnCon>
              <BtnCon>Education</BtnCon>
              <BtnCon>Emotions</BtnCon>
            </TopCon>

            <GridContainer>
              <ResponsiveMasonry columnsCountBreakPoints={responsive}>
                <Masonry gutter="15px">
                  {prodList.map((data) => {
                    return (
                      <FlexDiv onClick={() => showDetailsPage(data)} key={data.artId} >
                        <Div
                          style={{
                            // lineHeight: Number(data.height),
                            height: Number(200),
                            backgroundImage: `url('${data.image}')`,
                            backgroundSize: "100% 100%",
                            backgroundRepeat: "no-repeat",
                          }}
                        >
                          <Content>
                            <Tooltip
                              title="Save To Wishlist"
                              disableInteractive
                              placement="bottom"
                              componentsProps={{
                                tooltip: {
                                  sx: {
                                    bgcolor: "white",
                                    color: "#757575",
                                    borderRadius: "50px",
                                  },
                                },
                              }}
                            >
                              <IconImage
                                style={{
                                  height: "24px",
                                  width: "24px",
                                  position: "absolute",
                                  right: "10px",
                                  top: "10px",
                                }}
                                src={wishIcon}
                              />
                            </Tooltip>
                            <HovTitle>Nature</HovTitle>
                            <HovBotContainer>
                              <Tooltip
                                arrow
                                placement="top"
                                title={
                                  <div>
                                    <h5 style={{color: 'black', fontSize: '15px', fontWeight: '600', margin: 0}} >Create Account</h5>
                                    <p style={{color: '#757575', fontSize: '11px', fontWeight: '500', margin: 0}}>To create and add to a collection, you must be a <br />logged-in member</p> 
                                    <button style={{height: '28px', backgroundColor: '#757575', color: 'white', border: 'none', padding: '2px 10px', margin: '5px 0', borderRadius: '50px'}}>Create Account</button>
                                    <p style={{color: '#f88331', fontSize: '11px', fontWeight: '500', margin: 0}}>Already a member? Sign in</p> 
                                    <p style={{color: '#ff369f', fontSize: '11px', fontWeight: '500', margin: 0}}>Note Downloaded images will be saved in<br />'Collections' folder</p> 

                                  </div>
                                }
                                componentsProps={{
                                  tooltip: {
                                    sx: {
                                      bgcolor: "white",
                                      color: "#757575",
                                      borderRadius: "10px",
                                      width: '266px',
                                      height: '160px',
                                      boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                                      padding: '16px',
                                      textAlign: 'center',
                                      '& .MuiTooltip-arrow': {
                                        color: 'white',
                                      // bgcolor: "white",
                                      overflow: 'hidden',

                                      },
                                    },
                                  },
                                }}
                              >
                                <IconImage
                                  style={{
                                    width: "16px",
                                    marginLeft: "12px",
                                  }}
                                  src={plusIcon}
                                />
                              </Tooltip>
                              <IconImage
                                style={{ width: "16px", marginLeft: "12px" }}
                                src={filesIcon}
                              />
                              <IconImage
                                style={{ width: "16px", marginLeft: "12px" }}
                                src={userIcon}
                              />
                              <IconImage
                                style={{ width: "16px", marginLeft: "12px" }}
                                src={bagIcon}
                              />
                              <IconImage
                                style={{ width: "16px", marginLeft: "12px" }}
                                src={shareIcon}
                              />
                            </HovBotContainer>
                            <IconImage
                              style={{
                                width: "16px",
                                position: "absolute",
                                right: "10px",
                                bottom: "10px",
                              }}
                              src={viewIcon}
                            />
                          </Content>
                        </Div>
                        <ArtTitle>{data.artName}</ArtTitle>
                        <ArtDesc>
                          Artnstock <br />
                          35.4” x 31.5” Multiple Sizes
                        </ArtDesc>
                        <ArtTitle>${data.price}</ArtTitle>
                      </FlexDiv>
                    );
                  })}
                </Masonry>
              </ResponsiveMasonry>
            </GridContainer>
          </Main>
        </Box>
      </ContainDraw>

      <PaginationCon>
        <PaginationConTemp>
          <PageText style={{ marginRight: "5px" }}>Page</PageText>
          <InputCon>
            <InputBtn>{"<"}</InputBtn>
            <Input />
            <InputBtn>{">"}</InputBtn>
          </InputCon>
          <PageText style={{ marginLeft: "5px" }}>of 18</PageText>
        </PaginationConTemp>
        <DiscoverBtn>Next</DiscoverBtn>
      </PaginationCon>
    </MainContainer>

    <Footer />
  </>
  )
}

export default ProdList
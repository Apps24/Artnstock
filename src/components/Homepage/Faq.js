import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Maindiv = styled.div`
padding:50px 260px;
`;

const H2 = styled.h2`
    text-align:center;
    margin-bottom:20px;
`

const Faq = () => {
  return (
    <Maindiv>
        <H2>Frequently Asked Questions</H2>
      <Accordion style={{boxShadow: "none", borderTop:"0.5px solid lightgray", borderBottom: "0.5px solid lightgray", borderRadius: 0}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Maindiv>
  )
}

export default Faq
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';
import Container from '@mui/material/Container';


export default function DisabledAccordion() {
    const [checked2, setChecked2] = useState(false)
    const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <Container maxWidth="sm">


      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ display: "flex", justifyContent: "center" }}>
          <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" , backgroundColor: "orange", paddingBottom: checked2 == true ? "200px" : "20px"}}
      >
        hello world :)
      </div> */}
          <Typography style={{ display: "flex", justifyContent: "center" }}>
          <Collapse in={checked} collapsedSize={40}>

        <div style={{backgroundColor: "orange", height: "400px"}} >
          <h2 >hello</h2>
        </div>
          </Collapse>
          </Typography>

    </Container>
  );
}

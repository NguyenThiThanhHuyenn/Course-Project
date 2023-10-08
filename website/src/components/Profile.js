import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Stack, Button, Container, Accordion, TextField } from "@mui/material";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Avatar from "@mui/material/Avatar";
import EditIcon from "@mui/icons-material/Edit";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

export default function Profile() {
  const [value, setValue] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);

  const handleChangeExpanded = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box marginTop="80px" marginLeft="80px">
        <Avatar
          alt="Avatar"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 100, height: 100 }}
        />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          marginTop: "24px",
          p: 1,
          border: "1px solid grey"
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab label="Danh sach doc" {...a11yProps(0)} />
          <Tab label="Truyen da dang" {...a11yProps(1)} />
          <Tab label="Sua ho so" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Box
            sx={{
              height: 300,
              backgroundColor: "primary.dark",
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: [0.9, 0.8, 0.7]
              }
            }}
          >
            a
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box
            sx={{
              height: 300,
              backgroundColor: "primary.dark",
              "&:hover": {
                backgroundColor: "primary.main",
                opacity: [0.9, 0.8, 0.7]
              }
            }}
          >
            b
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChangeExpanded("panel1")}
            >
              <AccordionSummary
                expandIcon={<EditIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Email
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Example@email.com
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack>
                  <Typography sx={{ color: "text.secondary" }}>
                    Email moi
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
                  <Typography sx={{ color: "text.secondary" }}>
                    Xac nhan mat khau
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
                  <Button>Xac nhan</Button>
                </Stack>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChangeExpanded("panel2")}
            >
              <AccordionSummary
                expandIcon={<EditIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Ten dang nhap
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>ten</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack width="50%" position="revert-layer">
                  <Typography sx={{ color: "text.secondary" }}>
                    Ten dang nhap moi
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
                  <Typography sx={{ color: "text.secondary" }}>
                    Xac nhan mat khau
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
                  <Button>Xac nhan</Button>
                </Stack>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChangeExpanded("panel3")}
            >
              <AccordionSummary
                expandIcon={<EditIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  Mat khau
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>****</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack width="50%" position="revert-layer">
                  <Typography sx={{ color: "text.secondary" }}>
                    Mat khau cu
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
                  <Typography sx={{ color: "text.secondary" }}>
                    Mat khau moi
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
                  <Typography sx={{ color: "text.secondary" }}>
                    Xac nhan mat khau moi
                  </Typography>
                  <TextField fullWidth id="fullWidth" />
                  <Button>Xac nhan</Button>
                </Stack>
              </AccordionDetails>
            </Accordion>
        </TabPanel>
      </Box>
    </Container>
  );
}

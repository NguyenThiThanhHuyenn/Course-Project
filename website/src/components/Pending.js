import * as React from "react";
import { Typography, Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Table from "../layouts/Table";


export default function PendingBook() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Typography
        marginTop="30px"
        variant="caption"
        fontFamily="serif"
        fontSize="2rem"
      >
        Danh sách chờ duyệt
      </Typography>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange}>
              <Tab label="Sách" value="1" />
              <Tab label="Audio book" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Table />
          </TabPanel>
          <TabPanel value="2">
            <Table />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}

import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../cart/cart.css";
import "../../App.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: "#222428", color: "white", width: 1310, height: 600 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          className="tab bg-[#222428] cart_shadow"
        >
          <Tab
            label="Education"
            {...a11yProps(0)}
            className="shadow-md"
            sx={{ height: "80px" }}
          />
          <Tab
            label="Professional Skills"
            {...a11yProps(1)}
            sx={{ height: "80px" }}
            className="card_shadow"
          />
          <Tab
            label="Experience"
            {...a11yProps(2)}
            className="card_shadow"
            sx={{ height: "80px" }}
          />
          <Tab
            label="Interview"
            {...a11yProps(3)}
            className="tab_shadow"
            sx={{ height: "80px" }}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        education
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        professional Skill
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        experience
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        interview
      </TabPanel>
    </Box>
  );
}

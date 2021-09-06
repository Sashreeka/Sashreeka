import React, { useState, useEffect } from "react";
import "./delivery.css";
import Sidebar from "../../components/sidebar/Sidebar";

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import {
  Box,
  Typography,
  Tab,
  Tabs,
  AppBar,
  makeStyles,
  useTheme,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
    backgroundColor: "#f2f4f2",
    indicatorColor: "#00ff00",
    color: "#00ff00",
  },
  tabtable: {
    backgroundColor: "#f3f5f3",
    fontWeight: "bold",
    textTransform: "capitalize",
    "&:hover": {
      color: "#008000",
      opacity: 1,
      backgroundColor: "#d7ded7",
    },
    "&:focus": {
      color: "##008000",
      borderColor: "#003300",
      backgroundColor: "#a1b1a1",
    },
    "&:select": {
      color: "#008000",
      borderColor: "#003300",
      backgroundColor: "#a1b1a1",
    },
  },
}));

export default function Delivery() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className="deliveryCon">
      <Sidebar title="delivery" />
      <div style={{ flex: 4 }}>
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              //   variant="fullWidth"
              aria-label="full width tabs example"
              className={classes.tab}
            >
              <Tab
                label="Delivery History"
                {...a11yProps(0)}
                className={classes.tabtable}
              />
              <Tab
                label="Agents"
                {...a11yProps(1)}
                className={classes.tabtable}
              />
              <Tab
                label="Assign Deliveries"
                {...a11yProps(2)}
                className={classes.tabtable}
              />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              Item One
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              Item Three
            </TabPanel>
          </SwipeableViews>
        </div>
      </div>
    </div>
  );
}

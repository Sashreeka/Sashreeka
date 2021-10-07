import React from "react";
import "./deliveries.css";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import {
  Box,
  Typography,
  Tab,
  Tabs,
  AppBar,
  makeStyles,
  withStyles,
  useTheme,
} from "@material-ui/core";
import Sidebar from "../../components/sidebar/Sidebar";
import Tab1_DelivaryHistory from "./Tab1_DelivaryHistory";
import Tab2_Agents from "./Tab2_Agents";
import AssignDeliveries from "./AssignDeliveries";
import Tabee from "./Tabee";

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

const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid #e8e8e8",
  },
  indicator: {
    backgroundColor: "#1890ff",
  },
})(Tabs);

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

export default function Orders() {
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
    <div className="deliverCon">
      <Sidebar title="deliver" />
      <div style={{ flex: 4 }}>
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              aria-label="full width tabs example"
              className={classes.tab}
            >
              <Tab
                label="Deliveries"
                {...a11yProps(0)}
                className={classes.tabtable}
              />
              <Tab
                label="Assign Deliveries"
                {...a11yProps(1)}
                className={classes.tabtable}
              />
              <Tab
                label="History"
                {...a11yProps(2)}
                className={classes.tabtable}
              />
              <Tab
                label="Delivery Agents"
                {...a11yProps(3)}
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
              <div>
                <Tabee />
              </div>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <div>
                <AssignDeliveries />
              </div>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <div>
                <Tab1_DelivaryHistory />
              </div>
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
              <div>
                <Tab2_Agents />
              </div>
            </TabPanel>
          </SwipeableViews>
        </div>
      </div>
    </div>
  );
}

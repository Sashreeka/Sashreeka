import React from "react";
import "./orders.css";
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
import Tab_Orders from "./Tab_Orders";

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
    <div className="orderCon">
      <Sidebar title="order" />
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
                label="Order tab1"
                {...a11yProps(0)}
                className={classes.tabtable}
              />
              <Tab
                label="Order tab2"
                {...a11yProps(1)}
                className={classes.tabtable}
              />
              <Tab
                label="Order tab2"
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
              <Tab_Orders />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              these are the main tabs of orders
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              these are the main tabs of orders
            </TabPanel>
          </SwipeableViews>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import Control from "../../../../common/Control";
import clsx from "clsx";
import {
  FilterList,
  Edit,
  Delete,
  Visibility,
  CheckCircle,
  FiberManualRecord,
  Close,
  PersonAdd,
} from "@material-ui/icons";
import {
  Switch,
  FormControlLabel,
  IconButton,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Tooltip,
  Typography,
  Paper,
  lighten,
  makeStyles,
  ThemeProvider,
  ButtonGroup,
  Button,
  Dialog,
  withStyles,
} from "@material-ui/core";

import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";

import ReuseTable from "./ReuseTable";
import Label from "../../../../common/labels/Label";
import MaterialTable from "material-table";
import ReuseDialog from "./ReuseDialog";
import AgentView from "./AgentView";
import AgentEdit from "./AgentEdit";
// import ReuseDialog from "./ReuseDialog";

const headCells = [
  { id: "userId", numeric: false, disablePadding: false, label: "ID" },
  { id: "Name", numeric: false, disablePadding: false, label: "Name" },
  {
    id: "availability",
    numeric: false,
    disablePadding: false,
    label: "Availability",
  },
  {
    id: "vehicleId",
    numeric: false,
    disablePadding: false,
    label: "vehicle Id",
  },
  { id: "maxLoad", numeric: false, disablePadding: false, label: "MaxLoad" },
  {
    id: "drivingLicence",
    numeric: false,
    disablePadding: false,
    label: "Driving Licence",
  },
  { id: "action", numeric: true, disablePadding: false, label: "Actions" },
];

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    rows,
  } = props;
  const { theme } = ReuseTable(rows);
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <ThemeProvider theme={theme}>
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ "aria-label": "select all desserts" }}
              // ***********************************************************************
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? "right" : "left"}
              padding={headCell.disablePadding ? "none" : "normal"}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : "asc"}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === "desc"
                      ? "sorted descending"
                      : "sorted ascending"}
                  </span>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    </ThemeProvider>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
  rows: PropTypes.array,
};

const EnhancedTableToolbar = (props) => {
  const { numSelected, rows } = props;
  const { useToolbarStyles, theme } = ReuseTable(rows);
  const classes = useToolbarStyles();
  const [addNew, SetAddNew] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Toolbar
        className={clsx(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        {numSelected > 0 ? (
          <Typography
            className={classes.title}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            className={classes.title}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Agents
          </Typography>
        )}

        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="delete">
              <Delete />
            </IconButton>
          </Tooltip>
        ) : (
          <div style={{ display: "flex" }}>
            <Control.Button
              variant="contained"
              size="large"
              color="secondary"
              text="ADD NEW"
              type="submit"
              onClick={() => {
                SetAddNew(true);
              }}
              style={{ width: 150 }}
              startIcon={<PersonAdd />}
            />
          </div>
        )}
      </Toolbar>
    </ThemeProvider>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  rows: PropTypes.array,
};

const Availble = () => {
  return <Label label="Available" colour="green" icon={<CheckCircle />} />;
};
const Unavailble = () => {
  return (
    <Label label="Unavailable" colour="red" icon={<FiberManualRecord />} />
  );
};

export default function AgentTable() {
  const [rows, setRows] = useState([]);
  const [visible, setVisible] = useState(false);
  const [Editable, setEditable] = useState(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    // console.log("useeffect working! ");
    axios
      .get("http://localhost:4000/admin/getdeliveyagentetails")
      .then((res) => {
        setRows(res.data);
        console.log("AgentDetails : ", res.data);
      })
      .catch((err) => console.log("Error in Agent Dtails: ", err));
  }, []);

  const openVisibility = (userId) => {
    console.log("visivle to you");
    setVisible(true);
    setUserId(userId);
  };
  const closeVisibility = () => {
    console.log("visivle to you -closed");
    setVisible(false);
  };
  const openEditability = (userId) => {
    console.log("Editable content");
    setEditable(true);
    setUserId(userId);
  };
  const closeEditability = () => {
    console.log("Editable content closed");
    setEditable(false);
  };

  const {
    order,
    orderBy,
    selected,
    page,
    dense,
    rowsPerPage,
    useStyles,
    theme,
    getComparator,
    stableSort,
    handleRequestSort,
    handleSelectAllClick,
    handleClick,
    handleChangePage,
    handleChangeRowsPerPage,
    isSelected,
    emptyRows,
  } = ReuseTable(rows);
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <EnhancedTableToolbar numSelected={selected.length} rows={rows} />
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={dense ? "small" : "medium"}
              aria-label="enhanced table"
            >
              <EnhancedTableHead
                classes={classes}
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
                rows={rows}
              />
              <TableBody>
                {stableSort(rows, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.Name);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, row.Name)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.Name}
                        selected={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{ "aria-labelledby": labelId }}
                          />
                        </TableCell>
                        <TableCell
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                        >
                          {row.userId}
                        </TableCell>
                        <TableCell align="left">{row.Name}</TableCell>
                        <TableCell align="center">
                          {row.availability === 1 ? (
                            <Availble />
                          ) : (
                            <Unavailble />
                          )}
                        </TableCell>
                        <TableCell align="left">{row.vehicleId}</TableCell>
                        <TableCell align="center">{row.maxLoad}</TableCell>
                        <TableCell align="left">{row.drivingLicence}</TableCell>
                        <TableCell align="right">
                          <ButtonGroup
                            size="small"
                            variant="contained"
                            color="primary"
                            aria-label="contained primary button group"
                          >
                            <Button
                              onClick={() => {
                                openVisibility(row.userId);
                              }}
                            >
                              <Visibility fontSize="small" />
                            </Button>
                            <Button onClick={() => openEditability(row.userId)}>
                              <Edit fontSize="small" />
                            </Button>
                            <Button onClick={() => console.log("Delete")}>
                              <Delete fontSize="small" />
                            </Button>
                          </ButtonGroup>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>

      {/* popup dialog box 1 - view details */}
      <div>
        <ReuseDialog
          onclose={closeVisibility}
          open={visible}
          dialogTitle={"Agent Details"}
        >
          <AgentView userId={userId} />
        </ReuseDialog>
      </div>

      {/* popup dialog box 2 - Edit details */}
      <div>
        <ReuseDialog
          onclose={closeEditability}
          open={Editable}
          dialogTitle={"Edit Agent Details"}
        >
          <AgentEdit userId={userId} />
        </ReuseDialog>
      </div>

      <div></div>
    </ThemeProvider>
  );
}

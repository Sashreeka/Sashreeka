import {
  InputAdornment,
  makeStyles,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
} from "@material-ui/core";
import React, { useState } from "react";
import useTable from "../../components/table/useTable";
import Controls from "../../../../common/Control";
import { Filter, Search, PersonAdd } from "@material-ui/icons";

const useStyles = makeStyles({
  searchbar: {
    width: "70%",
  },
  Toolbar: {
    display: "flex",
    alignItems: "center",
  },
  addNewBtn: {
    position: "absolute",
    right: "10px",
  },
});

export default function ReusableTable() {
  const headCells = [
    { id: "fullName", label: "Employee Name" },
    { id: "email", label: "Employee Email" },
    { id: "mobile", label: "Mobile Number" },
    { id: "deparment", label: "Department" },
  ];

  const classes = useStyles();
  const [records, setRecords] = useState([]);
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });

  const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } =
    useTable(records, headCells, filterFn);

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == "") return items;
        else
          return items.filter((x) =>
            x.fullName.toLowerCase().includes(target.value)
          );
      },
    });
  };

  return (
    <>
      <Toolbar alignItems="center">
        <Controls.Input
          label="Search Employees"
          className={classes.searchbar}
          size="small"
          InputProps={{
            startAdornemnt: (
              <InputAdornment position="start">
                <Search color="primary" />
              </InputAdornment>
            ),
          }}
          onChange={handleSearch}
        />
        <Controls.Button
          varient="contained"
          size="large"
          color="primary"
          className={classes.addNewBtn}
          // onClick={() => setOpenPopup(true)}
          text="New Employee"
          startIcon={<PersonAdd />}
        />
      </Toolbar>
      <TblContainer>
        <TblHead />
        <TableBody>
          {recordsAfterPagingAndSorting().map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.fullName}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.mobile}</TableCell>
              <TableCell>{item.department}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TblContainer>
      <TblPagination />
    </>
  );
}

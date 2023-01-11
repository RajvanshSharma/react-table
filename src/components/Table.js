import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Checkbox from "@mui/material/Checkbox";

function createData(packages, rate, total) {
  return {
    packages,
    rate,
    total,
    history: [
      {
        packages: "Activity 1",
        rates: "567.80",
        total: "$ 2,98,6792",
        work: "Work 1",
      },
      {
        packages: "Activity 2",
        rates: "567.80",
        total: "$ 2,98,6792",
        work: "Work 2",
      },
      {
        packages: "Activity 3",
        rates: "567.80",
        total: "$ 2,98,6792",
        work: "Work 3",
      },
      {
        packages: "Activity 4",
        rates: "567.80",
        total: "$ 2,98,6792",
        work: "Work 4",
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell align="left">
          <Checkbox></Checkbox>
        </TableCell>
        <TableCell align="left">{row.packages}</TableCell>
        <TableCell align="left">{row.rate}</TableCell>
        <TableCell align="left">{row.total}</TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead></TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.packages}>
                      <TableCell align="left">
                        <Checkbox></Checkbox>
                      </TableCell>
                      <TableCell align="left">{historyRow.packages}</TableCell>
                      <TableCell align="left">{historyRow.rates}</TableCell>
                      <TableCell align="left">{historyRow.total}</TableCell>
                      <TableCell>
                        <IconButton
                          aria-label="expand row"
                          size="small"
                          onClick={() => setOpen2(!open2)}
                        >
                          {open ? (
                            <KeyboardArrowUpIcon />
                          ) : (
                            <KeyboardArrowDownIcon />
                          )}
                        </IconButton>
                      </TableCell>
                      <TableRow>
                        <TableCell
                          style={{ paddingBottom: 0, paddingTop: 0 }}
                          colSpan={6}
                        >
                          <Collapse in={open2} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                              <Table size="small" aria-label="purchases">
                                <TableHead></TableHead>
                                <TableBody>
                                  {row.history.map((historyRow) => (
                                    <TableRow key={historyRow.packages}>
                                      <TableCell align="left">
                                        <Checkbox></Checkbox>
                                      </TableCell>
                                      <TableCell align="left">
                                        {historyRow.work}
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </Box>
                          </Collapse>
                        </TableCell>
                      </TableRow>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData("Civil 1", 567.8, "$ 2,98,6792"),
  createData("Civil 2", 567.8, "$ 2,98,6792"),
  createData("Civil 3", 567.8, "$ 2,98,6792"),
  createData("Civil 4", 567.8, "$ 2,98,6792"),
  createData("Civil 5", 567.8, "$ 2,98,6792"),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Checkbox></Checkbox>
            </TableCell>
            <TableCell align="left">Packages</TableCell>
            <TableCell align="left">Rate (insqft)</TableCell>
            <TableCell align="left">Total</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.packages} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

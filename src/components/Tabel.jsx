import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React from "react";

const Tabel = ({ tableData }) => {
  return (
    <TableContainer component={Paper}>
      <table className="w-full border-collapse" aria-label="table">
        <TableRow className=" text-black  border-2 text-left bg-gray-300">
          <TableCell className="">
            <span className="font-bold text-lg">Month</span>
          </TableCell>
          <TableCell>
            <span className="font-bold text-lg">Due</span>
          </TableCell>
          <TableCell>
            <span className="font-bold text-lg">BK Status</span>
          </TableCell>
          <TableCell>
            <span className="font-bold text-lg">Accounts Remarks</span>
          </TableCell>
          <TableCell>
            <span className="font-bold text-lg">Bookkeeper Remarks</span>
          </TableCell>
          <TableCell>
            <span className="font-bold text-lg">Last Update</span>
          </TableCell>
        </TableRow>

        <TableBody>
          {tableData.map((it, i) => (
            <TableRow className=" even:bg-slate-100" key={i}>
              <TableCell>
                <span className="font-bold text-white text-sm rounded-md bg-green-500 p-1">
                  {it.Month}
                </span>
              </TableCell>
              <TableCell>
                <span className="font-bold text-white text-sm rounded-md bg-green-500 p-1">
                  {it.Due}
                </span>
              </TableCell>
              <TableCell>
                <div className="font-bold text-gray-500 text-sm w-full h-full">
                  {/* {it.BK_Status} */} Done
                </div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-sm">
                  {/* {it.Accounts_Remarks} */}
                  <TextField
                    className=""
                    id="outlined-basic"
                    size="small"
                    variant="outlined"
                  />
                </div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-sm">
                  {/* {it.Bookkeeper_Remarks} */}
                  <TextField
                    className=""
                    id="outlined-basic"
                    size="small"
                    variant="outlined"
                  />
                </div>
              </TableCell>
              <TableCell>
                <span className="font-bold text-sm">{it.Last_Update}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </table>
    </TableContainer>
  );
};

export default Tabel;

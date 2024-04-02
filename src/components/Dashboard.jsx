import React, { useState } from "react";

import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import TablePagination from "@mui/material/TablePagination";
import { Paper, Table, TextField } from "@mui/material";
import Tabel from "./Tabel";

const Dashboard = () => {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };
  const title = [
    {
      title: "Contact Name",
      value: "Puneet Bhardwaj",
      color: "bg-blue-500",
    },
    {
      title: "Business Name",
      value: "",
      color: "bg-blue-500",
    },
    {
      title: "BK Service",
      value: "yes",
      color: "bg-blue-500",
    },
    {
      title: "Star",
      value: "1",
      color: "bg-blue-500",
    },
    {
      title: "Status",
      value: "active",
      color: "bg-green-500",
    },
    {
      title: "CRA",
      value: "yes",
      color: "bg-blue-500",
    },
    {
      title: "QBO",
      value: "yes",
      color: "bg-blue-500",
    },
    {
      title: "Industry",
      value: "Holding Co.",
      color: "bg-blue-500",
    },
    {
      title: "Bank Access",
      value: "",
      color: "bg-blue-500",
    },
    {
      title: "KAD Members",
      value: "komal | moksha patel | shruti",
      color: "bg-yellow-500 text-black",
    },
  ];
  const dummyData = [
    {
      Month: "Jan-2023",
      Due: "2024-01-15",
      BK_Status: "Pending",
      Accounts_Remarks: "Confirmed transactions.",
      Bookkeeper_Remarks: "Completed reconciliations.",
      Last_Update: "2024-01-16 14:30:00",
    },
    {
      Month: "Feb-2024",
      Due: "2024-02-12",
      BK_Status: "In Progress",
      Accounts_Remarks: "Awaiting reconciliation.",
      Bookkeeper_Remarks: "In the process of auditing.",
      Last_Update: "2024-02-13 10:45:00",
    },
    {
      Month: "Mar-2024",
      Due: "2024-03-20",
      BK_Status: "Completed",
      Accounts_Remarks: "Discrepancies found.",
      Bookkeeper_Remarks: "Further investigation required.",
      Last_Update: "2024-03-21 16:20:00",
    },
    {
      Month: "Apr-2024",
      Due: "2024-04-05",
      BK_Status: "Overdue",
      Accounts_Remarks: "All accounts balanced.",
      Bookkeeper_Remarks: "Documentation submitted.",
      Last_Update: "2024-04-06 12:15:00",
    },
    {
      Month: "May-2024",
      Due: "2024-05-10",
      BK_Status: "On Hold",
      Accounts_Remarks: "Need further verification.",
      Bookkeeper_Remarks: "Errors rectified.",
      Last_Update: "2024-05-11 09:00:00",
    },
    {
      Month: "Jun-2024",
      Due: "2024-06-15",
      BK_Status: "Not Started",
      Accounts_Remarks: "Transaction errors detected.",
      Bookkeeper_Remarks: "Pending approval from supervisor.",
      Last_Update: "2024-06-16 15:50:00",
    },
    {
      Month: "Jul-2024",
      Due: "2024-07-20",
      BK_Status: "Pending",
      Accounts_Remarks: "Confirmed transactions.",
      Bookkeeper_Remarks: "Completed reconciliations.",
      Last_Update: "2024-07-21 11:25:00",
    },
    {
      Month: "Aug-2024",
      Due: "2024-08-02",
      BK_Status: "In Progress",
      Accounts_Remarks: "Awaiting reconciliation.",
      Bookkeeper_Remarks: "In the process of auditing.",
      Last_Update: "2024-08-03 17:00:00",
    },
    {
      Month: "Sep-2024",
      Due: "2024-09-18",
      BK_Status: "Completed",
      Accounts_Remarks: "Discrepancies found.",
      Bookkeeper_Remarks: "Further investigation required.",
      Last_Update: "2024-09-19 14:40:00",
    },
    {
      Month: "Oct-2024",
      Due: "2024-10-25",
      BK_Status: "Overdue",
      Accounts_Remarks: "All accounts balanced.",
      Bookkeeper_Remarks: "Documentation submitted.",
      Last_Update: "2024-10-26 08:55:00",
    },
    {
      Month: "Nov-2024",
      Due: "2024-11-15",
      BK_Status: "On Hold",
      Accounts_Remarks: "Need further verification.",
      Bookkeeper_Remarks: "Errors rectified.",
      Last_Update: "2024-11-16 13:10:00",
    },
    {
      Month: "Dec-2024",
      Due: "2024-12-30",
      BK_Status: "Not Started",
      Accounts_Remarks: "Transaction errors detected.",
      Bookkeeper_Remarks: "Pending approval from supervisor.",
      Last_Update: "2024-12-31 10:30:00",
    },
    {
      Month: "Jan-2023",
      Due: "2024-01-15",
      BK_Status: "Pending",
      Accounts_Remarks: "Confirmed transactions.",
      Bookkeeper_Remarks: "Completed reconciliations.",
      Last_Update: "2024-01-16 14:30:00",
    },
    {
      Month: "Feb-2024",
      Due: "2024-02-12",
      BK_Status: "In Progress",
      Accounts_Remarks: "Awaiting reconciliation.",
      Bookkeeper_Remarks: "In the process of auditing.",
      Last_Update: "2024-02-13 10:45:00",
    },
    {
      Month: "Mar-2024",
      Due: "2024-03-20",
      BK_Status: "Completed",
      Accounts_Remarks: "Discrepancies found.",
      Bookkeeper_Remarks: "Further investigation required.",
      Last_Update: "2024-03-21 16:20:00",
    },
    {
      Month: "Apr-2024",
      Due: "2024-04-05",
      BK_Status: "Overdue",
      Accounts_Remarks: "All accounts balanced.",
      Bookkeeper_Remarks: "Documentation submitted.",
      Last_Update: "2024-04-06 12:15:00",
    },
    {
      Month: "May-2024",
      Due: "2024-05-10",
      BK_Status: "On Hold",
      Accounts_Remarks: "Need further verification.",
      Bookkeeper_Remarks: "Errors rectified.",
      Last_Update: "2024-05-11 09:00:00",
    },
    {
      Month: "Jun-2024",
      Due: "2024-06-15",
      BK_Status: "Not Started",
      Accounts_Remarks: "Transaction errors detected.",
      Bookkeeper_Remarks: "Pending approval from supervisor.",
      Last_Update: "2024-06-16 15:50:00",
    },
    {
      Month: "Jul-2024",
      Due: "2024-07-20",
      BK_Status: "Pending",
      Accounts_Remarks: "Confirmed transactions.",
      Bookkeeper_Remarks: "Completed reconciliations.",
      Last_Update: "2024-07-21 11:25:00",
    },
    {
      Month: "Aug-2024",
      Due: "2024-08-02",
      BK_Status: "In Progress",
      Accounts_Remarks: "Awaiting reconciliation.",
      Bookkeeper_Remarks: "In the process of auditing.",
      Last_Update: "2024-08-03 17:00:00",
    },
    {
      Month: "Sep-2024",
      Due: "2024-09-18",
      BK_Status: "Completed",
      Accounts_Remarks: "Discrepancies found.",
      Bookkeeper_Remarks: "Further investigation required.",
      Last_Update: "2024-09-19 14:40:00",
    },
    {
      Month: "Oct-2024",
      Due: "2024-10-25",
      BK_Status: "Overdue",
      Accounts_Remarks: "All accounts balanced.",
      Bookkeeper_Remarks: "Documentation submitted.",
      Last_Update: "2024-10-26 08:55:00",
    },
    {
      Month: "Nov-2024",
      Due: "2024-11-15",
      BK_Status: "On Hold",
      Accounts_Remarks: "Need further verification.",
      Bookkeeper_Remarks: "Errors rectified.",
      Last_Update: "2024-11-16 13:10:00",
    },
    {
      Month: "Dec-2024",
      Due: "2024-12-30",
      BK_Status: "Not Started",
      Accounts_Remarks: "Transaction errors detected.",
      Bookkeeper_Remarks: "Pending approval from supervisor.",
      Last_Update: "2024-12-31 10:30:00",
    },
    {
      Month: "Jan-2023",
      Due: "2024-01-15",
      BK_Status: "Pending",
      Accounts_Remarks: "Confirmed transactions.",
      Bookkeeper_Remarks: "Completed reconciliations.",
      Last_Update: "2024-01-16 14:30:00",
    },
    {
      Month: "Feb-2024",
      Due: "2024-02-12",
      BK_Status: "In Progress",
      Accounts_Remarks: "Awaiting reconciliation.",
      Bookkeeper_Remarks: "In the process of auditing.",
      Last_Update: "2024-02-13 10:45:00",
    },
    {
      Month: "Mar-2024",
      Due: "2024-03-20",
      BK_Status: "Completed",
      Accounts_Remarks: "Discrepancies found.",
      Bookkeeper_Remarks: "Further investigation required.",
      Last_Update: "2024-03-21 16:20:00",
    },
    {
      Month: "Apr-2024",
      Due: "2024-04-05",
      BK_Status: "Overdue",
      Accounts_Remarks: "All accounts balanced.",
      Bookkeeper_Remarks: "Documentation submitted.",
      Last_Update: "2024-04-06 12:15:00",
    },
    {
      Month: "May-2024",
      Due: "2024-05-10",
      BK_Status: "On Hold",
      Accounts_Remarks: "Need further verification.",
      Bookkeeper_Remarks: "Errors rectified.",
      Last_Update: "2024-05-11 09:00:00",
    },
    {
      Month: "Jun-2024",
      Due: "2024-06-15",
      BK_Status: "Not Started",
      Accounts_Remarks: "Transaction errors detected.",
      Bookkeeper_Remarks: "Pending approval from supervisor.",
      Last_Update: "2024-06-16 15:50:00",
    },
    {
      Month: "Jul-2024",
      Due: "2024-07-20",
      BK_Status: "Pending",
      Accounts_Remarks: "Confirmed transactions.",
      Bookkeeper_Remarks: "Completed reconciliations.",
      Last_Update: "2024-07-21 11:25:00",
    },
    {
      Month: "Aug-2024",
      Due: "2024-08-02",
      BK_Status: "In Progress",
      Accounts_Remarks: "Awaiting reconciliation.",
      Bookkeeper_Remarks: "In the process of auditing.",
      Last_Update: "2024-08-03 17:00:00",
    },
    {
      Month: "Sep-2024",
      Due: "2024-09-18",
      BK_Status: "Completed",
      Accounts_Remarks: "Discrepancies found.",
      Bookkeeper_Remarks: "Further investigation required.",
      Last_Update: "2024-09-19 14:40:00",
    },
    {
      Month: "Oct-2024",
      Due: "2024-10-25",
      BK_Status: "Overdue",
      Accounts_Remarks: "All accounts balanced.",
      Bookkeeper_Remarks: "Documentation submitted.",
      Last_Update: "2024-10-26 08:55:00",
    },
    {
      Month: "Nov-2024",
      Due: "2024-11-15",
      BK_Status: "On Hold",
      Accounts_Remarks: "Need further verification.",
      Bookkeeper_Remarks: "Errors rectified.",
      Last_Update: "2024-11-16 13:10:00",
    },
    {
      Month: "Dec-2024",
      Due: "2024-12-30",
      BK_Status: "Not Started",
      Accounts_Remarks: "Transaction errors detected.",
      Bookkeeper_Remarks: "Pending approval from supervisor.",
      Last_Update: "2024-12-31 10:30:00",
    },
    {
      Month: "Jan-2023",
      Due: "2024-01-15",
      BK_Status: "Pending",
      Accounts_Remarks: "Confirmed transactions.",
      Bookkeeper_Remarks: "Completed reconciliations.",
      Last_Update: "2024-01-16 14:30:00",
    },
    {
      Month: "Feb-2024",
      Due: "2024-02-12",
      BK_Status: "In Progress",
      Accounts_Remarks: "Awaiting reconciliation.",
      Bookkeeper_Remarks: "In the process of auditing.",
      Last_Update: "2024-02-13 10:45:00",
    },
    {
      Month: "Mar-2024",
      Due: "2024-03-20",
      BK_Status: "Completed",
      Accounts_Remarks: "Discrepancies found.",
      Bookkeeper_Remarks: "Further investigation required.",
      Last_Update: "2024-03-21 16:20:00",
    },
    {
      Month: "Apr-2024",
      Due: "2024-04-05",
      BK_Status: "Overdue",
      Accounts_Remarks: "All accounts balanced.",
      Bookkeeper_Remarks: "Documentation submitted.",
      Last_Update: "2024-04-06 12:15:00",
    },
    {
      Month: "May-2024",
      Due: "2024-05-10",
      BK_Status: "On Hold",
      Accounts_Remarks: "Need further verification.",
      Bookkeeper_Remarks: "Errors rectified.",
      Last_Update: "2024-05-11 09:00:00",
    },
    {
      Month: "Jun-2024",
      Due: "2024-06-15",
      BK_Status: "Not Started",
      Accounts_Remarks: "Transaction errors detected.",
      Bookkeeper_Remarks: "Pending approval from supervisor.",
      Last_Update: "2024-06-16 15:50:00",
    },
    {
      Month: "Jul-2024",
      Due: "2024-07-20",
      BK_Status: "Pending",
      Accounts_Remarks: "Confirmed transactions.",
      Bookkeeper_Remarks: "Completed reconciliations.",
      Last_Update: "2024-07-21 11:25:00",
    },
    {
      Month: "Aug-2024",
      Due: "2024-08-02",
      BK_Status: "In Progress",
      Accounts_Remarks: "Awaiting reconciliation.",
      Bookkeeper_Remarks: "In the process of auditing.",
      Last_Update: "2024-08-03 17:00:00",
    },
    {
      Month: "Sep-2024",
      Due: "2024-09-18",
      BK_Status: "Completed",
      Accounts_Remarks: "Discrepancies found.",
      Bookkeeper_Remarks: "Further investigation required.",
      Last_Update: "2024-09-19 14:40:00",
    },
    {
      Month: "Oct-2024",
      Due: "2024-10-25",
      BK_Status: "Overdue",
      Accounts_Remarks: "All accounts balanced.",
      Bookkeeper_Remarks: "Documentation submitted.",
      Last_Update: "2024-10-26 08:55:00",
    },
    {
      Month: "Nov-2024",
      Due: "2024-11-15",
      BK_Status: "On Hold",
      Accounts_Remarks: "Need further verification.",
      Bookkeeper_Remarks: "Errors rectified.",
      Last_Update: "2024-11-16 13:10:00",
    },
    {
      Month: "Dec-2024",
      Due: "2024-12-30",
      BK_Status: "Not Started",
      Accounts_Remarks: "Transaction errors detected.",
      Bookkeeper_Remarks: "Pending approval from supervisor.",
      Last_Update: "2024-12-31 10:30:00",
    },
    {
      Month: "Jan-2023",
      Due: "2024-01-15",
      BK_Status: "Pending",
      Accounts_Remarks: "Confirmed transactions.",
      Bookkeeper_Remarks: "Completed reconciliations.",
      Last_Update: "2024-01-16 14:30:00",
    },
    {
      Month: "Feb-2024",
      Due: "2024-02-12",
      BK_Status: "In Progress",
      Accounts_Remarks: "Awaiting reconciliation.",
      Bookkeeper_Remarks: "In the process of auditing.",
      Last_Update: "2024-02-13 10:45:00",
    },
    {
      Month: "Mar-2024",
      Due: "2024-03-20",
      BK_Status: "Completed",
      Accounts_Remarks: "Discrepancies found.",
      Bookkeeper_Remarks: "Further investigation required.",
      Last_Update: "2024-03-21 16:20:00",
    },
    {
      Month: "Apr-2024",
      Due: "2024-04-05",
      BK_Status: "Overdue",
      Accounts_Remarks: "All accounts balanced.",
      Bookkeeper_Remarks: "Documentation submitted.",
      Last_Update: "2024-04-06 12:15:00",
    },
    {
      Month: "May-2024",
      Due: "2024-05-10",
      BK_Status: "On Hold",
      Accounts_Remarks: "Need further verification.",
      Bookkeeper_Remarks: "Errors rectified.",
      Last_Update: "2024-05-11 09:00:00",
    },
    {
      Month: "Jun-2024",
      Due: "2024-06-15",
      BK_Status: "Not Started",
      Accounts_Remarks: "Transaction errors detected.",
      Bookkeeper_Remarks: "Pending approval from supervisor.",
      Last_Update: "2024-06-16 15:50:00",
    },
    {
      Month: "Jul-2024",
      Due: "2024-07-20",
      BK_Status: "Pending",
      Accounts_Remarks: "Confirmed transactions.",
      Bookkeeper_Remarks: "Completed reconciliations.",
      Last_Update: "2024-07-21 11:25:00",
    },
    {
      Month: "Aug-2024",
      Due: "2024-08-02",
      BK_Status: "In Progress",
      Accounts_Remarks: "Awaiting reconciliation.",
      Bookkeeper_Remarks: "In the process of auditing.",
      Last_Update: "2024-08-03 17:00:00",
    },
    {
      Month: "Sep-2024",
      Due: "2024-09-18",
      BK_Status: "Completed",
      Accounts_Remarks: "Discrepancies found.",
      Bookkeeper_Remarks: "Further investigation required.",
      Last_Update: "2024-09-19 14:40:00",
    },
    {
      Month: "Oct-2024",
      Due: "2024-10-25",
      BK_Status: "Overdue",
      Accounts_Remarks: "All accounts balanced.",
      Bookkeeper_Remarks: "Documentation submitted.",
      Last_Update: "2024-10-26 08:55:00",
    },
    {
      Month: "Nov-2024",
      Due: "2024-11-15",
      BK_Status: "On Hold",
      Accounts_Remarks: "Need further verification.",
      Bookkeeper_Remarks: "Errors rectified.",
      Last_Update: "2024-11-16 13:10:00",
    },
    {
      Month: "Dec-2024",
      Due: "2024-12-30",
      BK_Status: "Not Started",
      Accounts_Remarks: "Transaction errors detected.",
      Bookkeeper_Remarks: "Pending approval from supervisor.",
      Last_Update: "2024-12-31 10:30:00",
    },
    {
      Month: "Jan-2023",
      Due: "2024-01-15",
      BK_Status: "Pending",
      Accounts_Remarks: "Confirmed transactions.",
      Bookkeeper_Remarks: "Completed reconciliations.",
      Last_Update: "2024-01-16 14:30:00",
    },
    {
      Month: "Feb-2024",
      Due: "2024-02-12",
      BK_Status: "In Progress",
      Accounts_Remarks: "Awaiting reconciliation.",
      Bookkeeper_Remarks: "In the process of auditing.",
      Last_Update: "2024-02-13 10:45:00",
    },
    {
      Month: "Mar-2024",
      Due: "2024-03-20",
      BK_Status: "Completed",
      Accounts_Remarks: "Discrepancies found.",
      Bookkeeper_Remarks: "Further investigation required.",
      Last_Update: "2024-03-21 16:20:00",
    },
    {
      Month: "Apr-2024",
      Due: "2024-04-05",
      BK_Status: "Overdue",
      Accounts_Remarks: "All accounts balanced.",
      Bookkeeper_Remarks: "Documentation submitted.",
      Last_Update: "2024-04-06 12:15:00",
    },
    {
      Month: "May-2024",
      Due: "2024-05-10",
      BK_Status: "On Hold",
      Accounts_Remarks: "Need further verification.",
      Bookkeeper_Remarks: "Errors rectified.",
      Last_Update: "2024-05-11 09:00:00",
    },
    {
      Month: "Jun-2024",
      Due: "2024-06-15",
      BK_Status: "Not Started",
      Accounts_Remarks: "Transaction errors detected.",
      Bookkeeper_Remarks: "Pending approval from supervisor.",
      Last_Update: "2024-06-16 15:50:00",
    },
    {
      Month: "Jul-2024",
      Due: "2024-07-20",
      BK_Status: "Pending",
      Accounts_Remarks: "Confirmed transactions.",
      Bookkeeper_Remarks: "Completed reconciliations.",
      Last_Update: "2024-07-21 11:25:00",
    },
    {
      Month: "Aug-2024",
      Due: "2024-08-02",
      BK_Status: "In Progress",
      Accounts_Remarks: "Awaiting reconciliation.",
      Bookkeeper_Remarks: "In the process of auditing.",
      Last_Update: "2024-08-03 17:00:00",
    },
    {
      Month: "Sep-2024",
      Due: "2024-09-18",
      BK_Status: "Completed",
      Accounts_Remarks: "Discrepancies found.",
      Bookkeeper_Remarks: "Further investigation required.",
      Last_Update: "2024-09-19 14:40:00",
    },
    {
      Month: "Oct-2024",
      Due: "2024-10-25",
      BK_Status: "Overdue",
      Accounts_Remarks: "All accounts balanced.",
      Bookkeeper_Remarks: "Documentation submitted.",
      Last_Update: "2024-10-26 08:55:00",
    },
    {
      Month: "Nov-2024",
      Due: "2024-11-15",
      BK_Status: "On Hold",
      Accounts_Remarks: "Need further verification.",
      Bookkeeper_Remarks: "Errors rectified.",
      Last_Update: "2024-11-16 13:10:00",
    },
    {
      Month: "Dec-2024",
      Due: "2024-12-30",
      BK_Status: "Not Started",
      Accounts_Remarks: "Transaction errors detected.",
      Bookkeeper_Remarks: "Pending approval from supervisor.",
      Last_Update: "2024-12-31 10:30:00",
    },
    {
      Month: "Jan-2023",
      Due: "2024-01-15",
      BK_Status: "Pending",
      Accounts_Remarks: "Confirmed transactions.",
      Bookkeeper_Remarks: "Completed reconciliations.",
      Last_Update: "2024-01-16 14:30:00",
    },
    {
      Month: "Feb-2024",
      Due: "2024-02-12",
      BK_Status: "In Progress",
      Accounts_Remarks: "Awaiting reconciliation.",
      Bookkeeper_Remarks: "In the process of auditing.",
      Last_Update: "2024-02-13 10:45:00",
    },
    {
      Month: "Mar-2024",
      Due: "2024-03-20",
      BK_Status: "Completed",
      Accounts_Remarks: "Discrepancies found.",
      Bookkeeper_Remarks: "Further investigation required.",
      Last_Update: "2024-03-21 16:20:00",
    },
    {
      Month: "Apr-2024",
      Due: "2024-04-05",
      BK_Status: "Overdue",
      Accounts_Remarks: "All accounts balanced.",
      Bookkeeper_Remarks: "Documentation submitted.",
      Last_Update: "2024-04-06 12:15:00",
    },
    {
      Month: "May-2024",
      Due: "2024-05-10",
      BK_Status: "On Hold",
      Accounts_Remarks: "Need further verification.",
      Bookkeeper_Remarks: "Errors rectified.",
      Last_Update: "2024-05-11 09:00:00",
    },
    {
      Month: "Jun-2024",
      Due: "2024-06-15",
      BK_Status: "Not Started",
      Accounts_Remarks: "Transaction errors detected.",
      Bookkeeper_Remarks: "Pending approval from supervisor.",
      Last_Update: "2024-06-16 15:50:00",
    },
    {
      Month: "Jul-2024",
      Due: "2024-07-20",
      BK_Status: "Pending",
      Accounts_Remarks: "Confirmed transactions.",
      Bookkeeper_Remarks: "Completed reconciliations.",
      Last_Update: "2024-07-21 11:25:00",
    },
    {
      Month: "Aug-2024",
      Due: "2024-08-02",
      BK_Status: "In Progress",
      Accounts_Remarks: "Awaiting reconciliation.",
      Bookkeeper_Remarks: "In the process of auditing.",
      Last_Update: "2024-08-03 17:00:00",
    },
    {
      Month: "Sep-2024",
      Due: "2024-09-18",
      BK_Status: "Completed",
      Accounts_Remarks: "Discrepancies found.",
      Bookkeeper_Remarks: "Further investigation required.",
      Last_Update: "2024-09-19 14:40:00",
    },
    {
      Month: "Oct-2024",
      Due: "2024-10-25",
      BK_Status: "Overdue",
      Accounts_Remarks: "All accounts balanced.",
      Bookkeeper_Remarks: "Documentation submitted.",
      Last_Update: "2024-10-26 08:55:00",
    },
    {
      Month: "Nov-2024",
      Due: "2024-11-15",
      BK_Status: "On Hold",
      Accounts_Remarks: "Need further verification.",
      Bookkeeper_Remarks: "Errors rectified.",
      Last_Update: "2024-11-16 13:10:00",
    },
    {
      Month: "Dec-2024",
      Due: "2024-12-30",
      BK_Status: "Not Started",
      Accounts_Remarks: "Transaction errors detected.",
      Bookkeeper_Remarks: "Pending approval from supervisor.",
      Last_Update: "2024-12-31 10:30:00",
    },
    {
      Month: "Jan-2023",
      Due: "2024-01-15",
      BK_Status: "Pending",
      Accounts_Remarks: "Confirmed transactions.",
      Bookkeeper_Remarks: "Completed reconciliations.",
      Last_Update: "2024-01-16 14:30:00",
    },
    {
      Month: "Feb-2024",
      Due: "2024-02-12",
      BK_Status: "In Progress",
      Accounts_Remarks: "Awaiting reconciliation.",
      Bookkeeper_Remarks: "In the process of auditing.",
      Last_Update: "2024-02-13 10:45:00",
    },
    {
      Month: "Mar-2024",
      Due: "2024-03-20",
      BK_Status: "Completed",
      Accounts_Remarks: "Discrepancies found.",
      Bookkeeper_Remarks: "Further investigation required.",
      Last_Update: "2024-03-21 16:20:00",
    },
    {
      Month: "Apr-2024",
      Due: "2024-04-05",
      BK_Status: "Overdue",
      Accounts_Remarks: "All accounts balanced.",
      Bookkeeper_Remarks: "Documentation submitted.",
      Last_Update: "2024-04-06 12:15:00",
    },
    {
      Month: "May-2024",
      Due: "2024-05-10",
      BK_Status: "On Hold",
      Accounts_Remarks: "Need further verification.",
      Bookkeeper_Remarks: "Errors rectified.",
      Last_Update: "2024-05-11 09:00:00",
    },
    {
      Month: "Jun-2024",
      Due: "2024-06-15",
      BK_Status: "Not Started",
      Accounts_Remarks: "Transaction errors detected.",
      Bookkeeper_Remarks: "Pending approval from supervisor.",
      Last_Update: "2024-06-16 15:50:00",
    },
    {
      Month: "Jul-2024",
      Due: "2024-07-20",
      BK_Status: "Pending",
      Accounts_Remarks: "Confirmed transactions.",
      Bookkeeper_Remarks: "Completed reconciliations.",
      Last_Update: "2024-07-21 11:25:00",
    },
    {
      Month: "Aug-2024",
      Due: "2024-08-02",
      BK_Status: "In Progress",
      Accounts_Remarks: "Awaiting reconciliation.",
      Bookkeeper_Remarks: "In the process of auditing.",
      Last_Update: "2024-08-03 17:00:00",
    },
    {
      Month: "Sep-2024",
      Due: "2024-09-18",
      BK_Status: "Completed",
      Accounts_Remarks: "Discrepancies found.",
      Bookkeeper_Remarks: "Further investigation required.",
      Last_Update: "2024-09-19 14:40:00",
    },
    {
      Month: "Oct-2024",
      Due: "2024-10-25",
      BK_Status: "Overdue",
      Accounts_Remarks: "All accounts balanced.",
      Bookkeeper_Remarks: "Documentation submitted.",
      Last_Update: "2024-10-26 08:55:00",
    },
    {
      Month: "Nov-2024",
      Due: "2024-11-15",
      BK_Status: "On Hold",
      Accounts_Remarks: "Need further verification.",
      Bookkeeper_Remarks: "Errors rectified.",
      Last_Update: "2024-11-16 13:10:00",
    },
    {
      Month: "Dec-2024",
      Due: "2024-12-30",
      BK_Status: "Not Started",
      Accounts_Remarks: "Transaction errors detected.",
      Bookkeeper_Remarks: "Pending approval from supervisor.",
      Last_Update: "2024-12-31 10:30:00",
    },
  ];

  return (
    <section className="w-full divide-y-2 bg-white px-6 py-4">
      <header className="p-2 pb-4 ">
        <h3 className="text-2xl font-semibold text-justify">
          Bookkeeping Status for{" "}
          <span className="rounded-full bg-blue-500 text-white text-xl p-[1px] px-3 ">
            order number 1100 1000 1545
          </span>
        </h3>
      </header>
      {/* title section */}
      <div className="py-4 p-2  flex justify-between">
        {title.map((tl, i) => (
          <div key={i} className="">
            <h4 className="font-bold text-[19px] leading-7">{tl.title}</h4>
            <p
              className={`mt-3 capitalize inline-block ${
                tl.value && tl.color
              } w-auto text-center rounded-full p-[2px] px-2 text-white font-bold text-sm`}
            >
              {tl.value}
            </p>
          </div>
        ))}
      </div>
      {/* search bar */}
      <div className="flex justify-end items-center py-3">
        <label htmlFor="Search" className="text-lg mr-2 text-gray-500">
          Search:
        </label>
        <TextField
          className=""
          id="outlined-basic"
          size="small"
          variant="outlined"
        />
      </div>
      <div className="my-2 border-2 border-b-black">
        <Tabel
          tableData={dummyData
            .slice((page - 1) * rowsPerPage)
            .slice(0, rowsPerPage)}
        />
      </div>
      {/* page Navigation */}
      <div className="flex flex-row items-center py-4  border-b-2  justify-between">
        <TablePagination
          component="div"
          count={dummyData.length} //100
          page={page - 1}
          onPageChange={handleChange}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />

        <Pagination
          defaultPage={1}
          shape="rounded"
          count={Math.floor(dummyData.length / rowsPerPage) + 1}
          page={page}
          onChange={handleChange}
        />
      </div>
    </section>
  );
};

export default Dashboard;

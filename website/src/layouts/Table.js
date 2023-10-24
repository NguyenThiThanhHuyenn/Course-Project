import { Checkbox, ButtonGroup, Tooltip, IconButton } from "@mui/material";
import DataTable from "react-data-table-component";
import CheckIcon from "@mui/icons-material/Check";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import * as React from "react";
import axios from "axios";

const customStyles = {
  rows: {
    style: {
      minHeight: "72px" // override the row height
    }
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px"
    }
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px"
    }
  },
  header: {
    fontSize: "22px",
    minHeight: "56px",
    paddingLeft: "16px",
    paddingRight: "8px"
  },
  head: {
    style: {
      fontSize: "18px",
      fontWeight: 700
    }
  }
};

export default function Table({type}) {
  const [data, setData] = React.useState([]);
  const [listPendingBooks, setListPendingBooks] = React.useState([]);

  React.useEffect(() => {
    axios.get(`http://localhost:8080/api/book/pending-book-list`)
      .then(response => {
        setListPendingBooks(response.data);
      })
      .catch(error => {
        console.error(error);
      });
    
  }, []);
  
  const handleApproved = async (row) => {
    try {
      const res = await axios.post(`http://localhost:8080/api/book/${row.index}/approved`);
      console.log(res);
      if(res.status===200) {
        const newData = data.filter(item => item.id !== row.id);
        setData(newData);
      }
    } catch(error) {
      console.error('Error fetching book:', error);
    }
  }
  const handleRejected = async (row) => {
    try {
      const res = await axios.post(`http://localhost:8080/api/book/${row.index}/rejected`);
      if(res.ok) {
        const newData = data.filter(item => item.id !== row.id);
        setData(newData);
      }
      console.log(res);
    } catch(error) {
      console.error('Error fetching book:', error);
    }
  }

  // React.useEffect( () => {
  //   function setType() {
  //     if(type==="audio") {
  //       setListPendingBooks( listPendingBooks.filter(i => _.some(i.listGenre, ['id',13])));
  //     } else {
  //       setListPendingBooks( listPendingBooks.filter(i => !_.some(i.listGenre, ['id',13])));
  //     }
  //   };
  //   setType();
  // }, [listPendingBooks, type]);

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id
    },
    {
      name: "Tên truyện",
      selector: (row) => row.nameBook
    },
    {
      name: "Người đăng",
      selector: (row) => row.user.userName
    },
    {
      cell: (row) => (
        <ButtonGroup>
      <Tooltip title="Duyệt">
        <IconButton color="success" onClick={handleApproved}>
          <CheckIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Từ chối" onClick={handleRejected}>
        <IconButton color="error">
          <RemoveCircleIcon />
        </IconButton>
      </Tooltip>
    </ButtonGroup>
      ),
      name: "Trạng thái",
      allowOverflow: true,
      button: true
    }
  ];
  return (
    <DataTable
      selectableRowsComponent={Checkbox}
      columns={columns}
      data={listPendingBooks}
      pagination
      selectableRows
      customStyles={customStyles}
    />
  );
}

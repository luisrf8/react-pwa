import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { DataGrid } from '@mui/x-data-grid';
import Footer from "../../Components/Footer/Footer";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const columns = [
  {
    field: 'date',
    headerName: '',
    width: 120,
    editable: true,
  },
  {
    field: 'transaction',
    headerName: '',
    width: 195,
    editable: true,
  },
  {
    field: 'status',
    headerName: '',
    type: 'number',
    width: 70,
    editable: true,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
export default function Home() {
  return (
    <div>
      <Topbar />
      <div>
        <Card
          sx={{
            borderRadius: "12px",
            minWidth: 275,
            margin: "5px",
            marginTop: "15px",
            backgroundColor: "#CC195A",
            color: "#FFFFFF",
          }}
        >
          <CardContent>
            <Typography sx={{ fontSize: 14 }}>yorsystem@gmail.com</Typography>
            <Typography variant="body2">
              Saldo Disponible:
              <br />
              100.00 BUSD
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "end" }}>
            <IconButton
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="#404040"
            >
              <LibraryBooksIcon sx={{ color: "#ffff" }} />
            </IconButton>
          </CardActions>
        </Card>
      </div>
      <div>
        <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#8C113E", margin: '1rem', fontWeight: '700'}}
          >
            Actividades recientes
          </Typography>
        <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
    </div>
    <div>
      <Footer />
    </div>
    </div>
  );
}

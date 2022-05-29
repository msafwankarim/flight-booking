import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import FlightContext from "../store/flight-context";

const PricingInfoCard = ({ flights, passenger, seats }) => {
  const fContext = useContext(FlightContext);
  seats = seats || fContext.seats;

  const { inboundFlight, outboundFlight } = flights;

  let baseprice = outboundFlight.price,
    totalPrice = baseprice * seats;

  if (inboundFlight) {
    baseprice += inboundFlight.price;
    totalPrice = baseprice * seats;
  }

  return (
    <Card variant="outlined">
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography fontWeight="bold">First Name</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography>{passenger.first_name}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography fontWeight="bold">Last Name</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography>{passenger.last_name}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography fontWeight="bold">CNIC</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography>{passenger.cnic}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography fontWeight="bold">Phone</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography>{passenger.phone}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography fontWeight="bold">Base Price</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography>Rs. {baseprice.toLocaleString()}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography fontWeight="bold">Number of Passengers</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography>{seats}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography fontWeight="bold">Total Price</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography>Rs. {totalPrice.toLocaleString()}</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default PricingInfoCard;

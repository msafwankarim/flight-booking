import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { useSearchParams } from "react-router-dom";

const PricingInfoCard = ({ flight, passenger }) => {
  const [searchParams] = useSearchParams();
  const seats = searchParams.get("seats") * 1 || 1;

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
                <Typography>{passenger.firstName}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography fontWeight="bold">Last Name</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography>{passenger.lastName}</Typography>
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
                <Typography>Rs. {flight.price.toLocaleString()}</Typography>
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
                <Typography>
                  Rs. {(flight.price * seats).toLocaleString()}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default PricingInfoCard;

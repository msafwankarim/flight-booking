import {
  AccountCircle,
  CloseOutlined,
  CreditCard,
  Key,
} from "@mui/icons-material";
import {
  Button,
  Container,
  Grid,
  Icon,
  IconButton,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const PaymentModal = ({ onPayment, handleClose, amount }) => {
  const [creditCardNumber, setCreditCardNumber] = useState(""),
    [cvc, setCvc] = useState(""),
    [expiry, setExpiry] = useState(""),
    [owner, setOwner] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onPayment({
      cc_name: owner,
      cc_number: creditCardNumber,
      cvv: cvc,
      expiry: expiry,
    });
  };
  return (
    <Modal open={true} onClose={handleClose}>
      <Container sx={style} maxWidth="sm">
        <IconButton
          sx={{ position: "absolute", right: 0, top: 0 }}
          onClick={handleClose}
        >
          <CloseOutlined />
        </IconButton>
        <Paper
          variant="outlined"
          component={"form"}
          onSubmit={onSubmit}
          sx={{ p: 2 }}
        >
          <Typography mb={2} variant="h5">
            Credit Card Details
          </Typography>
          <Grid container spacing={2}>
            <Grid xs={12} item>
              <TextField
                InputProps={{
                  startAdornment: (
                    <Icon sx={{ mr: 1 }}>
                      <AccountCircle color="action" />
                    </Icon>
                  ),
                }}
                required
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
                fullWidth
                label="Name on Credit Card"
              ></TextField>
            </Grid>
            <Grid md={8} xs={12} item>
              <TextField
                InputProps={{
                  startAdornment: (
                    <Icon sx={{ mr: 1 }}>
                      <CreditCard color="action" />
                    </Icon>
                  ),
                }}
                type="number"
                required
                value={creditCardNumber}
                onChange={(e) => setCreditCardNumber(e.target.value)}
                fullWidth
                label="Credit Card Number"
              ></TextField>
            </Grid>
            <Grid md={4} xs={12} item>
              <TextField
                InputProps={{
                  startAdornment: (
                    <Icon sx={{ mr: 1 }}>
                      <Key color="action" />
                    </Icon>
                  ),
                }}
                type="number"
                required
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                fullWidth
                label="CVC"
                placeholder=""
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Expiry"
                InputLabelProps={{
                  shrink: true,
                }}
                required
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                placeholder="MM/YY"
                type="month"
              ></TextField>
            </Grid>
            <Grid item md={6} xs={12} m="auto">
              <Button type="submit" variant="contained" fullWidth>
                Pay PKR {amount}
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Modal>
  );
};

export default PaymentModal;

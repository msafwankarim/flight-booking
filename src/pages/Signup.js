import { Alert, Button, Snackbar } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import PaymentModal from "../components/PaymentModal";
import PersonalInfoForm from "../components/PersonalInfoForm";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [modalVisible, setModalVisible] = useState(false),
    [message, setMessage] = useState(null);
  const onFormSubmit = (data) => {
    setUserInfo(data);
    setModalVisible(true);
  };

  const onPayment = async (creditCardInfo) => {
    const data = { ...userInfo, ...creditCardInfo };
    setModalVisible(false);
    try {
      await axios.post("http://localhost:8000/api/auth/signup", data);

      setMessage({
        type: "success",
        text: "Account successfully created",
        action: (
          <Link
            to="/login"
            style={{ textDecoration: "none", alignSelf: "center" }}
          >
            <Button sx={{ color: "primary.light" }} variant="body2">
              Go to Login Page
            </Button>
          </Link>
        ),
      });
    } catch (e) {
      console.log(e);
      setMessage({
        type: "error",
        text: "Email or CNIC already in use",
      });
    }
  };

  return (
    <Container maxWidth="sm">
      <PersonalInfoForm onFormSubmit={onFormSubmit} />

      <PaymentModal
        visible={modalVisible}
        onPayment={onPayment}
        buttonText={"Sign Up"}
        handleClose={() => setModalVisible(false)}
      />
      {message && (
        <Snackbar
          open={true}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          onClose={() => setMessage(null)}
        >
          <Alert
            severity={message.type}
            variant="filled"
            sx={{ width: "100%" }}
            action={message.action}
            onClose={() => setMessage(null)}
          >
            {message.text}
          </Alert>
        </Snackbar>
      )}
    </Container>
  );
};

export default SignUp;

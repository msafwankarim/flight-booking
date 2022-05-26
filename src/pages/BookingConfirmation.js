import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import BookingInfoTabs from "../components/BookingInfoTabs";
import { DUMMY_RESULTS } from "../utils/dummy-data";

const BookingConfirmation = () => {
  const params = useParams();

  const flightInfo = DUMMY_RESULTS.find((elem) => elem.id === params.id * 1);

  return (
    <Container maxWidth="xl">
      <BookingInfoTabs flightInfo={flightInfo} />
    </Container>
  );
};

export default BookingConfirmation;

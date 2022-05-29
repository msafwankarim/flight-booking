import { Alert, Button, Snackbar } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import AlertDialog from "./AlertDialog";
import TicketInfo from "./TicketInfo";

const TicketResult = ({ ticket, deleteCallback, message, setMessage }) => {
  const [confirmDialog, setConfirmDialog] = useState(false);

  const onDelete = () => {
    axios
      .delete(`http://localhost:8000/api/tickets/${ticket.ticket_id}`)
      .then((res) => {
        setMessage({
          type: "success",
          text: "Ticket cancelled successfully",
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
        deleteCallback();
        setConfirmDialog(false);
      })
      .catch((e) => {
        console.log(e);
        setMessage({
          type: "error",
          text: "Failed to cancel the ticket",
          action: <></>,
        });
      });
  };

  return (
    <div>
      <TicketInfo
        mt={2}
        flights={{
          inboundFlight: ticket.inboundFlight,
          outboundFlight: ticket.outboundFlight,
        }}
        personalInfo={ticket.passenger}
        ticketNumber={ticket.ticket_id}
        ticketActionText="Cancel Ticket"
        onTicketAction={() => {
          setConfirmDialog(true);
        }}
        seats={ticket.seats}
      />
      {confirmDialog && (
        <AlertDialog
          visible={confirmDialog}
          title="Confirm"
          description="Are you sure you want to cancel this ticket"
          yesLabel="Confirm"
          noLabel="Cancel"
          handleYes={onDelete}
          handleCancel={() => setConfirmDialog(false)}
        />
      )}
    </div>
  );
};

export default TicketResult;

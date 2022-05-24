import { List } from "@mui/material";
import FlightListItem from "./FlightListItem";

const FlightList = ({ list }) => {
  return (
    <List>
      {list.map((e, i) => (
        <FlightListItem data={e} key={i} />
      ))}
    </List>
  );
};

export default FlightList;

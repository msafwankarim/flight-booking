import { Box } from "@mui/material";

const TabPanel = ({ value, activeValue, children, ...others }) => {
  return value === activeValue && <Box {...others}>{children}</Box>;
};

export default TabPanel;

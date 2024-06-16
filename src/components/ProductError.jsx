import { Box } from "@mui/material";
import { useRouteError } from "react-router-dom";

function ProductError() {
const error = useRouteError();
console.log(error)
  return (
    <Box color={"red"} fontSize={40}>
      {error.message}
    </Box>
  );
}

export default ProductError;

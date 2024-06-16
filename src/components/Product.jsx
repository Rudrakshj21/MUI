import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import productColumns from "../utils/productColumns";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
function Product() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    return async () => {
      const response = await axios.get("https://dummyjson.com/products");
      // console.log(response.data.products);
      setRows(response.data.products);
    };
  }, []);
  return (
    <Container sx={{ justifyContent: "center", mt: 2 }}>
      <Box fontSize={40} textAlign={"center"} mt={3} mb={2} fontWeight={"bold"}>
        Product Details
      </Box>
      <DataGrid
        rows={rows}
        columns={productColumns}
        sx={{
          boxShadow: 20,
          fontSize: "16px",
          backgroundColor: "ButtonHighlight",
        }}
      ></DataGrid>
    </Container>
  );
}

export default Product;

import { CardMedia, Container, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function ProductCard() {
  const { id } = useParams();

  const [product, setProduct] = useState("");
  useEffect(() => {
    return async function () {
      if (isNaN(id)) {
        return new Error("Product ID is not valid...");
      }
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      const productDetails = response.data;
      console.log(productDetails);
      setProduct(() => {
        return { ...productDetails };
      });
    };
  }, [id]);

  return (
    <Container
      sx={{
        mt: 1,
        fontSize: 45,
        textAlign: "center",
        fontFamily: "sans-serif",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {product && (
        <Card sx={{ maxWidth: 600 }}>
          <CardMedia
            sx={{ height: 400 }}
            image={product?.images}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h3" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
            <Typography variant="body2" color="red" fontSize={30}>
              ${product.price}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Container>
  );
}

export default ProductCard;

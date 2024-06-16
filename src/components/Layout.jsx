import { Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Layout() {
  const navigate = useNavigate();
  function navigateToResourcePage(resource) {
    navigate(`/${resource}`);
  }
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        height: "100vh",
        gap: 5,
      }}
    >
      <Button
        variant="contained"
        color="primary"
        sx={{ p: 2 }}
        onClick={() => navigateToResourcePage("form")}
      >
        To Form Page
      </Button>
      <Button
        variant="contained"
        color="success"
        sx={{ p: 2 }}
        onClick={() => navigateToResourcePage("products")}
      >
        To Products Page
      </Button>
    </Container>
  );
}

export default Layout;

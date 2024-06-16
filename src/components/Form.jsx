import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";

import Autocomplete from "@mui/material/Autocomplete";

import top100Films from "../utils/moveData";

// import Chip from "@mui/material/Chip";

import Switch from "@mui/material/Switch";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers";

import Button from "@mui/material/Button";

import { useState } from "react";
import initialStates from "../utils/initialStates";

import checkAllStates from "../utils/checkAllStates";
import { DataGrid } from "@mui/x-data-grid";
import formColumns from "../utils/formColumns";

import Snackbar from "@mui/material/Snackbar";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function Form() {
  const [formHeading, setFormHeading] = useState("View Form");
  const [states, setStates] = useState(initialStates);
  const [rows, setRows] = useState([]);
  const [users, setUsers] = useState([]);
  const [snackOpen, setSnackOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  // console.log(states)

  function handleStateChange(event) {
    // console.log(event);
    const name = event.target.name;
    const value = event.target.value;
    // console.log(name);
    // console.log(value);
    setStates((prevStates) => {
      return { ...prevStates, [name]: value };
    });
  }

  function handleMovie(movie) {
    setStates((prevStates) => {
      return { ...prevStates, movie: movie ? movie.label : "" };
    });
  }

  function handleDegree(isOn) {
    // console.log(isOn);
    setStates((prevStates) => {
      return { ...prevStates, inDegree: isOn };
    });
  }

  function handleDate(date) {
    // console.log(date);
    const formattedDate = new Date(date).toLocaleDateString();

    setStates((prevStates) => {
      return { ...prevStates, birthDate: formattedDate };
    });
  }

  function handleTime(time) {
    // console.log(time);
    // console.log(time.toString());
    let formattedTime = new Date(time).toTimeString();

    formattedTime = formattedTime.split(" ")[0];
    setStates((prevStates) => {
      return { ...prevStates, collegeStartTime: formattedTime };
    });
  }
  function clearForm() {
    setStates(() => {
      return {
        ...initialStates,
      };
    });
  }

  function handleSubmit() {
    if (checkAllStates(states)) {
      console.log(states, "submit success");
      const newUser = { ...states, id: users.length + 1 };
      // setRows({ ...states });
      setUsers((prevUsers) => {
        const updatedUsers = [...prevUsers, newUser];
        setRows(updatedUsers);
        return updatedUsers;
      });

      setFormStatus("Submitted successfully");
      clearForm();
    } else {
      setFormStatus("Submission unsuccessful");
      console.log("submit fail");
    }
    setSnackOpen(true);
    setTimeout(() => setSnackOpen(false), 1000);
    // setSnackOpen(false)
  }

  // useEffect(() => {
  //   setRows((records) => [...users]);
  // }, [users]);

  // console.log("users", users);
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
          justifyContent: "start",
          width: 800,
          p: 2,
          fontWeight: "bold",
          fontSize: "25px",
        }}
      >
        <Accordion
          sx={{ width: 500 }}
          onClick={() => setFormHeading("Fill the Form Details")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {formHeading}
          </AccordionSummary>
          <AccordionDetails>
            <Container
              sx={{ display: "flex", flexDirection: "column", gap: 4 }}
            >
              {/* textfield name */}
              <Box sx={{ border: "" }}>
                <TextField
                  label="Name"
                  name="name"
                  placeholder="Enter your name"
                  sx={{ width: "60%" }}
                  onChange={(e) => handleStateChange(e)}
                  value={states["name"]}
                ></TextField>
              </Box>
              {/* sport selector */}
              <Box>
                <Box sx={{}}>
                  <FormControl sx={{ width: "60%" }}>
                    <InputLabel id="demo-simple-select-label">
                      Sports
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Sports"
                      name="sports"
                      defaultValue="cricket"
                      value={states["sports"]}
                      onChange={(e) => handleStateChange(e)}
                    >
                      <MenuItem value={"cricket"}>Cricket</MenuItem>
                      <MenuItem value={"football"}>Football</MenuItem>
                      <MenuItem value={"volleyball"}>volleyball</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              {/* radio group gender */}
              <Box>
                <FormControl fullWidth>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    sx={{ display: "flex", flexDirection: "row" }}
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    onChange={(e) => handleStateChange(e)}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                      name="gender"
                      checked={states["gender"] == "female"}
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                      name="gender"
                      checked={states["gender"] == "male"}
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                      name="gender"
                      checked={states["gender"] == "other"}
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              {/* autocomplete movies */}
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: "60%" }}
                name="movie"
                defaultValue={top100Films[4]}
                onChange={(e, val) => handleMovie(val)}
                //  freeSolo = {true}
                //   isOptionEqualToValue={(option, value) => {
                //   return option.label === value?.label;
                // }}
                renderInput={(params) => (
                  <TextField {...params} label="Movie" />
                )}
              />
              {/* Switch */}
              <Box sx={{}}>
                <FormGroup>
                  <FormControlLabel
                    label="Pursuing Degree?"
                    control={
                      <Switch
                        checked={states.inDegree == true}
                        name="inDegree"
                        onChange={(e, checkVal) => handleDegree(checkVal)}
                      />
                    }
                  ></FormControlLabel>
                </FormGroup>
              </Box>
              {/* Date */}
              <Box>
                <DatePicker
                  label="Enter your birth date"
                  onChange={(date) => handleDate(date)}
                ></DatePicker>
              </Box>
              {/* Time Picker */}
              <Box>
                <TimePicker
                  label="College Start Time?"
                  onChange={(time) => handleTime(time)}
                ></TimePicker>
              </Box>
              <Box display={"flex"} gap={10}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => setDialogOpen(true)}
                >
                  Clear
                </Button>
                <Snackbar
                  open={snackOpen}
                  autoHideDuration={3000}
                  message={formStatus}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  ContentProps={{
                    style: {
                      backgroundColor:
                        formStatus === "Submitted successfully"
                          ? "green"
                          : "red",
                      color: "white",
                      fontSize: "18px",
                      boxShadow: "2px 2px 10px rgba(0,0,0,0.5)",
                    },
                  }}
                />
              </Box>
            </Container>
          </AccordionDetails>
        </Accordion>
      </Container>
      {rows?.length > 0 && (
        <Box
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "40px",
            color: "black",
            mt: 10,
          }}
        >
          User Details
        </Box>
      )}
      <Container sx={{ width: 1200, mt: 5 }}>
        {rows.length > 0 && (
          <DataGrid
            rows={rows}
            columns={formColumns}
            sx={{
              backgroundColor: "azure",
              color: "black",
              fontWeight: "bold",
              fontFamily: "monospace",
              fontSize: "18px",
            }}
          />
        )}
      </Container>
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          color={"error"}
          sx={{ fontSize: "25px", fontWeight: "bold" }}
        >
          {"Are you sure you want to clear the form?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{ fontSize: "18px", color: "black" }}
          >
            Once you click on agree all values will either be empty or default
            values
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Disagree</Button>
          <Button
            onClick={() => {
              clearForm();
              setDialogOpen(false);
            }}
            autoFocus
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Form;

import { Stack, TextField } from "@mui/material";

function MuiTextField() {
  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={2}>
        <TextField
          label="Name"
          variant="outlined"
          size="small"
          color="secondary"
        ></TextField>
        <TextField label="Name" variant="filled" color="success"></TextField>
        <TextField label="Name" variant="standard"></TextField>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField label="Form input" required disabled></TextField>
        <TextField
          label="Password"
          helperText="do not share your password"
          type="password"
          required
          color="primary"
        ></TextField>
        <TextField label="read only" inputProps={{readOnly : true}}></TextField>
      </Stack>
    </Stack>
  );
}

export default MuiTextField;

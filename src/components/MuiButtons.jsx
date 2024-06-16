import {
  Stack,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { useState } from "react";

function MuiButtons() {
  const [formats, setFormats] = useState("");
  function handleFormatChange(e,formatSelected){
    setFormats(formatSelected)

  }
  console.log(formats)
  return (
    <div>
      <Stack spacing={5}>
        <IconButton>
          <SendIcon></SendIcon>
        </IconButton>
        <h1>hi</h1>
      </Stack>
      <Stack direction={"row"}>
        <ToggleButtonGroup aria-label="text formatting" value={formats} exclusive  onChange={handleFormatChange} size="small" orientation="vertical" color="success">
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon></FormatBoldIcon>
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon></FormatItalicIcon>
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon></FormatUnderlinedIcon>
          </ToggleButton>
        </ToggleButtonGroup>
        {formats}
      </Stack>
    </div>
  );
}

export default MuiButtons;

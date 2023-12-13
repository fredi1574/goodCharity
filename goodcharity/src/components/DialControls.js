import React from "react";

import { SpeedDial, SpeedDialAction } from "@mui/material";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";

// TODO: change the blue color of the speed dial to #11A78B

const actions = [
  { icon: <AddIcon />, name: "Add" },
  { icon: <EditIcon />, name: "Edit" },
  { icon: <PersonIcon />, name: "Profile" },
];

function DialControls() {
  return (
    <SpeedDial
      ariaLabel="SpeedDial"
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
      }}
      icon={<KeyboardArrowUpIcon sx={{ color: "#53F3D3" }} />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          sx={{ color: "#53F3D3", backgroundColor: "#11A78B" }}
        />
      ))}
    </SpeedDial>
  );
}

export default DialControls;

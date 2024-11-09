import { useState } from "react";
import { styled } from "@mui/material/styles";

const Root = styled("div")(({ theme }) => ({
  color: theme.palette.primary.main,
  "& .menuIcon": {
    color: theme.portfolio.palette.primary.border,
    fontSize: "1.2rem",
    transitionDuration: "0.3s",
    cursor: "pointer",
    margin: "2px",
    marginTop: "20px",
    marginBottom: "20px",
  },
}));

const LeftMenu = () => {
  return <Root>12:00</Root>;
};

export default LeftMenu;

import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Tooltip } from "react-tooltip";
import { IconContext } from "react-icons";
import { AiOutlineHome as HomeIcon } from "react-icons/ai";
import { AiOutlineUser as UserIcon } from "react-icons/ai";
import { HiMiniComputerDesktop as WorkIcon } from "react-icons/hi2";
import { MdOutlineThumbUp as ExperimentIcon } from "react-icons/md";
import { IoChatboxEllipsesOutline as ContactIcon } from "react-icons/io5";

const Root = styled("div")(({ theme }) => ({
  color: theme.palette.primary.main,
  //   position: "absolute",
  //   height: "100vh",
  //   width: "100%",
  //   overflow: "hidden",
  //   padding: theme.spacing(1),
  "& .menuIcon": {
    color: theme.portfolio.palette.primary.border,
    fontSize: "1.2rem",
    transitionDuration: "0.3s",
    cursor: "pointer",
    margin: "2px",
    marginTop: "20px",
    marginBottom: "20px",
  },
  "& .menuIcon:hover": {
    color: "#cccccc",
    transitionDuration: "0.3s",
  },
}));

const LeftMenu = () => {
  return (
    <Root>
      <ul>
        <li>
          <IconContext.Provider value={{ className: "menuIcon" }}>
            <HomeIcon id="Home" />
            <Tooltip anchorSelect="#Home">
              <span className="audiowide">Home</span>
            </Tooltip>
          </IconContext.Provider>
        </li>
        <li>
          <IconContext.Provider value={{ className: "menuIcon" }}>
            <UserIcon id="User" />
            <Tooltip anchorSelect="#User">
              <span className="audiowide">User</span>
            </Tooltip>
          </IconContext.Provider>
        </li>
        <li>
          <IconContext.Provider value={{ className: "menuIcon" }}>
            <WorkIcon id="Work" />
            <Tooltip anchorSelect="#Work">
              <span className="audiowide">Work</span>
            </Tooltip>
          </IconContext.Provider>
        </li>
        <li>
          <IconContext.Provider value={{ className: "menuIcon" }}>
            <ExperimentIcon id="Experiment" />
            <Tooltip anchorSelect="#Experiment">
              <span className="audiowide">Experiment</span>
            </Tooltip>
          </IconContext.Provider>
        </li>
        <li>
          <IconContext.Provider value={{ className: "menuIcon" }}>
            <ContactIcon id="Contact" />
            <Tooltip anchorSelect="#Contact">
              <span className="audiowide">Contact</span>
            </Tooltip>
          </IconContext.Provider>
        </li>
      </ul>
    </Root>
  );
};

export default LeftMenu;

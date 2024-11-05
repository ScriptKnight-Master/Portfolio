import { useState } from "react";
import { styled } from "@mui/material/styles";
import { useSpring, animated } from "react-spring";
import { Tooltip } from "react-tooltip";
// import { useDispatch } from "react-redux";
// import { toggleTheme } from "store/themeSlice";
import LeftMenu from "./leftmenu.js";
import { IconContext } from "react-icons";
import { BsWindows } from "react-icons/bs";
import { FaWindowMinimize } from "react-icons/fa6";
import { FaRegSquare } from "react-icons/fa6";
import { RiCloseLargeLine } from "react-icons/ri";

import "swiper/css/bundle";

const Root = styled("div")(({ theme }) => ({
  color: theme.palette.primary.main,
  position: "absolute",
  height: "100vh",
  width: "100%",
  overflow: "hidden",
  padding: theme.spacing(1),
  "& .themeborder": {
    borderColor: theme.portfolio.palette.primary.border,
    color: theme.portfolio.palette.primary.border,
  },
  "& .frame-main": {
    display: "grid",
    gridTemplateAreas: `"header top" "header content" "bottom bottom"`,
    gridTemplateColumns: "2.5rem 1fr",
    gridTemplateRows: "2.5rem 1fr 2.5rem",
  },
  "& header": {
    gridTemplateRows: "subgrid",
    gridArea: "header",
    gridTemplateColumns: "subgrid",
  },
  "& .hero": {
    height: "calc(100vh - 6rem)",
  },
  "& .scrollbar-custom": {
    scrollbarColor: "green transparent",
    scrollbarWidth: "thin",
  },
  "& .HomeIcon": {
    color: theme.portfolio.palette.primary.border,
    fontSize: "1rem",
    transitionDuration: "0.5s",
    cursor: "pointer",
  },
  "& .HomeIcon:hover": {
    color: "#00aaf7",
    transitionDuration: "0.5s",
  },
  "& .tool-header": {
    color: theme.portfolio.palette.primary.border,
    transitionDuration: "0.5s",
    cursor: "pointer",
  },
  "& .tool-header:hover": {
    color: "#00aaf7",
    transitionDuration: "0.5s",
  },
  "& .toolIcon": {
    color: theme.portfolio.palette.primary.border,
    fontSize: "0.8rem",
    transitionDuration: "0.3s",
    cursor: "pointer",
    margin: "5px",
    marginTop: "3px",
    marginBottom: "3px",
  },
  "& .toolIcon:hover": {
    color: "#cccccc",
    transitionDuration: "0.3s",
  },
}));

const Home = () => {
  return (
    <div className="themeborder md:size-full frame-main-m frame-main relative h-full overflow-hidden rounded border border-solid transition-all duration-700">
      <header className="themeborder z-30 grid grid-cols-subgrid grid-rows-1 border-b md:grid-rows-subgrid md:border-b-0 md:border-r glossy [grid-area:header]">
        <div className="themeborder flex items-center justify-center border-r md:border-b md:border-r-0">
          <IconContext.Provider value={{ className: "HomeIcon" }}>
            <BsWindows />
          </IconContext.Provider>
        </div>
        <nav className="hidden items-center justify-center md:flex">
          <LeftMenu />
        </nav>
      </header>
      <div className="themeborder grid grid-cols-3 items-center gap-4 border-b border-base-300 px-10 glossy [grid-area:top] md:grid">
        <div></div>
        <div className="tool-header font-700 text-sm text-center cursor-pointer">
          &lt;ScriptKnight.Master/&gt;
        </div>
        <div className="flex flex-row justify-end">
          <IconContext.Provider value={{ className: "toolIcon" }}>
            <FaWindowMinimize />
          </IconContext.Provider>
          <IconContext.Provider value={{ className: "toolIcon" }}>
            <FaRegSquare />
          </IconContext.Provider>
          <IconContext.Provider value={{ className: "toolIcon" }}>
            <RiCloseLargeLine />
          </IconContext.Provider>
        </div>
      </div>
      <div className="scrollbar-custom hero relative overflow-x-hidden overflow-y-scroll [grid-area:content]">
        <div className="w-100 mb-48">asdfa</div>
        <div className="w-100 mb-48">asdfa</div>
        <div className="w-100 mb-48">asdfa</div>
        <div className="w-100 mb-48">asdfa</div>
        <div className="w-100 mb-48">asdfa</div>
        <div className="w-100 mb-48">asdfa</div>
        <div className="w-100 mb-48">asdfa</div>
        <div className="w-100 mb-48">asdfa</div>
        <div className="w-100 mb-48">asdfa</div>
        <div className="w-100 mb-48">asdfa</div>
        <div className="w-100 mb-48">asdfa</div>
        <div className="w-100 mb-48">asdfa</div>
        <div className="w-100 mb-48">asdfa</div>
        <div className="w-100 mb-48">asdfa</div>
        <div className="w-100 mb-48">asdfa</div>
        <div className="w-100 mb-48">asdfa</div>
        <div className="w-100 mb-48">asdfa</div>
        <div className="w-100 mb-48">asdfa</div>
        <div className="w-100 mb-48">asdfa</div>
        <div className="w-100 mb-48">asdfa</div>
        <div className="w-100 mb-48">asdfa</div>
        <div className="w-100 mb-48">asdfa</div>
        <div className="w-100 mb-48">asdfa</div>
        <div className="w-100 mb-48">asdfa</div>
        <div className="w-100 mb-48">asdfa</div>
        <div className="w-100 mb-48">asdfa</div>
        <div className="w-100 mb-48">asdfa</div>
        <div className="w-100 mb-48">asdfa</div>
      </div>
      <div className="themeborder grid grid-cols-subgrid items-center border-t border-base-300 text-sm font-medium glossy [grid-area:bottom]"></div>
    </div>
  );
};
function Dashboard() {
  //   const dispatch = useDispatch();

  // Animation for shrinking page to card
  const shrinkAnim = useSpring({
    transform: "scale(1)",
    opacity: 1,
  });
  return (
    <Root>
      <animated.div style={shrinkAnim} className="fullPageView">
        <Home />
      </animated.div>
    </Root>
  );
}

export default Dashboard;

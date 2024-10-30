import { useState } from "react";
import { styled } from "@mui/material/styles";
import { useSpring, animated } from "react-spring";
// import { useDispatch } from "react-redux";
// import { toggleTheme } from "store/themeSlice";
import { IconContext } from "react-icons";
import { BsWindows } from "react-icons/bs";
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
  "& .scrollbar-custom": {
    scrollbarColor: "green transparent",
    scrollbarWidth: "thin",
  },
  "& .HomeIcon": {
    color: theme.portfolio.palette.primary.border,
    fontSize: "1rem",
    transitionDuration: "0.7s",
    cursor: "pointer",
  },
  "& .HomeIcon:hover": {
    color: "#00aaf7",
    transitionDuration: "0.7s",
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
          <ul>
            <li>asdf</li>
            <li>asdf</li>
            <li>asdf</li>
            <li>asdf</li>
            <li>asdf</li>
          </ul>
        </nav>
      </header>
      <div className="themeborder grid grid-cols-3 items-center gap-4 border-b border-base-300 px-10 glossy [grid-area:top] md:grid">
        <div></div>
        <div>&lt;ScriptKnight.Master/&gt;</div>
        <div>VVVV</div>
      </div>
      <div className="scrollbar-custom relative overflow-x-hidden overflow-y-scroll [grid-area:content] lenis">
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

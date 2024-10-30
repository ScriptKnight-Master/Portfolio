import { useState } from "react";
import { styled } from "@mui/material/styles";
import { useSpring, animated } from "react-spring";
// import { useDispatch } from "react-redux";
// import { toggleTheme } from "store/themeSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCards } from "swiper/modules";
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
}));

const Home = ({ background }) => {
  console.log(background);
  return (
    <div
      className="themeborder md:size-full frame-main-m frame-main relative h-full overflow-hidden rounded border border-solid transition-all duration-700"
      style={{ background: background }}
    >
      <header className="themeborder z-30 grid grid-cols-subgrid grid-rows-1 border-b md:grid-rows-subgrid md:border-b-0 md:border-r glossy [grid-area:header]">
        <div className="themeborder flex items-center justify-center border-r md:border-b md:border-r-0">
          <span>asdf</span>
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
        <div>VVVVVV</div>
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
  const [isCardView, setIsCardView] = useState(false);
  const handleToggleView = () => {
    console.log(isCardView, "isCardViewChange");
    setIsCardView(!isCardView);
  };
  console.log(isCardView);
  const cards = ["red", "blue", "white"]; // Example card items
  // Animation for shrinking page to card
  const shrinkAnim = useSpring({
    transform: isCardView ? "scale(0.3)" : "scale(1)",
    opacity: isCardView ? 0.7 : 1,
  });
  return (
    <Root>
      <button onClick={handleToggleView}>
        {isCardView ? "Back to Full Page" : "Switch to Card View"}
      </button>

      {isCardView ? (
        <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]}>
          {cards.map((card) => (
            <SwiperSlide key={card}>
              <Home background={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <animated.div style={shrinkAnim} className="fullPageView">
          <Home />
        </animated.div>
      )}
      {/* <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button> */}
    </Root>
  );
}

export default Dashboard;

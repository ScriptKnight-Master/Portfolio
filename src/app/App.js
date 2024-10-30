import { useSelector } from "react-redux";
import "styles/App.css";
import { selectTheme } from "store/themeSlice";
import Theme from "components/Theme";
import history from "components/history";
import { Routes, BrowserRouter, Route } from "react-router-dom";
/*----   Import Page Components ----*/
import Home from "pages/home";
import TmpMain from "pages/main";

function App() {
  const mainTheme = useSelector(selectTheme);
  return (
    <Theme theme={mainTheme} direction="ltr">
      <BrowserRouter navigator={history}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/main" element={<TmpMain />}></Route>
        </Routes>
      </BrowserRouter>
    </Theme>
  );
}

export default App;

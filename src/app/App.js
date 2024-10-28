import { useSelector } from "react-redux";
import "styles/App.css";
import { selectTheme } from "store/themeSlice";
import Theme from "components/Theme";
import Dashboard from "pages/main";
import history from "components/history";
import { Routes, BrowserRouter, Route } from "react-router-dom";

function App() {
  const mainTheme = useSelector(selectTheme);
  return (
    <Theme theme={mainTheme} direction="ltr">
      <BrowserRouter navigator={history}>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/main" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </Theme>
  );
}

export default App;

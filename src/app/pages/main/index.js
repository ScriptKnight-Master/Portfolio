import { useDispatch } from "react-redux";
import logo from "../../logo.svg";
import "styles/App.css";
import { toggleTheme } from "store/themeSlice";
import { styled } from "@mui/material/styles";

const Root = styled("div")(({ theme }) => ({
  color: theme.palette.primary.main,
}));

function Dashboard() {
  const dispatch = useDispatch();
  return (
    <Root>
      <div className="App rounded-8 w-full mb-64">
        <header className="App-header">
          <img src={logo} className="App-logo mb-120" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
      </div>
    </Root>
  );
}

export default Dashboard;

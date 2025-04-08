import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import "./App.css";
import { AppContextProvider } from "./context";

const App = () => {
  return (
    <AppContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;

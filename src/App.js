import React from "react";
import GlobalStyles from "./GlobalStyles";
import Countdown from "./pages/Countdown";
import AddNewCountdown from "./pages/AddNewCountdown";
import DayEvents from "./pages/DayEvents";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import MenuContainer from "./components/MenuContainer";
import StartScreen from "./pages/StartScreen";

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <Router>
      <GlobalStyles />
      <Header open={open} setOpen={setOpen} />
      <MenuContainer open={open} />
      <Route path="/" exact component={Countdown} />
      <Route path="/new" component={AddNewCountdown} />
      <Route path="/dayevents" component={DayEvents} />
      <Route path="/startscreen" component={StartScreen} />
    </Router>
  );
}

export default App;

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
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <Router>
      <GlobalStyles />
      <Header
        showMenu={showMenu}
        onMenuIconClick={() => setShowMenu(!showMenu)}
      />
      <MenuContainer open={showMenu} handleMenuLink={setShowMenu} />
      <Route path="/" exact component={StartScreen} />
      <Route path="/home" component={Countdown} />
      <Route path="/new" component={AddNewCountdown} />
      <Route path="/dayevents" component={DayEvents} />
    </Router>
  );
}

export default App;

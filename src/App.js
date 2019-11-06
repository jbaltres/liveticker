import React from "react";
import GlobalStyles from "./GlobalStyles";
import Countdown from "./pages/Countdown";
import AddNewCountdown from "./pages/AddNewCountdown";
import DayEvents from "./pages/DayEvents";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import MenuContainer from "./components/MenuContainer";
import StartScreen from "./pages/StartScreen";
import DayEventOverlay from "./pages/DayEventOverlay";
import LoadingScreen from "./pages/LoadingScreen";
import LoadingScreenCalendar from "./pages/LoadingScreenCalendar";

function App() {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <Router>
      <GlobalStyles />
      <Header
        showMenu={showMenu}
        onMenuIconClick={() => setShowMenu(!showMenu)}
      />
      <MenuContainer showMenu={showMenu} handleMenuLink={setShowMenu} />
      <Route path="/" exact component={StartScreen} />
      <Route path="/home" component={Countdown} />
      <Route path="/new" component={AddNewCountdown} />
      <Route path="/dayevents" component={DayEvents} />
      <Route path="/dayeventoverlay" component={DayEventOverlay} />
      <Route path="/add" component={LoadingScreen} />
      <Route path="/addCalendarEntry" component={LoadingScreenCalendar} />
    </Router>
  );
}

export default App;

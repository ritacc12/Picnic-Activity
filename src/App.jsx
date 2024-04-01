import "./App.css";
import Navbar from "./component/Navbar.jsx";
import Traffic from "./component/Traffic.jsx";
import Activity from "./component/Activity.jsx";
import Registration from "./component/Registration.jsx";
import Schedule from "./component/Schedule.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Activity />
      <Schedule />
      <Traffic />
      <Registration />
    </>
  );
}

export default App;

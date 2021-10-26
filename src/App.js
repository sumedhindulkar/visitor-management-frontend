import React, { useEffect } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Dashboard from "pages/building/Dashboard";
import GenerateQR from "pages/building/GenerateQR";
import ProfilePage from "pages/building/ProfilePage";
import Settings from "pages/building/Settings";
import BuildingVisitorForm from "pages/BuildingVisitorForm";
import ScanQR from "pages/user/ScanQR";
import UserSettings from "pages/user/UserSettings";
import UserProfile from "pages/user/UserProfile";
import "assets/styles/tailwind.css";
import "assets/styles/app.css";
import Login from "pages/Login";
import RegisterBuilding from "pages/RegisterBuilding";
import RegisterUser from "pages/RegisterUser";
function App() {
  const history = useHistory();
  // const [user, setUser] = useState(false);
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    // if (!userInfo) {
    //   const link = "/RegisterUser";
    //   history.push(link);
    // }
    // if (userInfo) {
    //   console.log(userInfo.user.id);
    //   const link = "/user/" + userInfo.user.id + "/scanQR";
    //   // history.push(link);
    // }
  }, [history]);

  return (
    <>
      <div className="md:ml-64">
        <Switch>
          {/* Building Routes */}
          <Route exact path="/building/:id" component={Dashboard} />
          <Route exact path="/building/:id/GenerateQR" component={GenerateQR} />
          <Route exact path="/building/:id/profile" component={ProfilePage} />
          <Route exact path="/building/:id/settings" component={Settings} />
          <Route exact path="/RegisterBuilding" component={RegisterBuilding} />

          {/* User routes */}
          <Route exact path="/user/:uid/scanQR" component={ScanQR} />
          <Route exact path="/user/:uid/profile" component={UserProfile} />
          <Route exact path="/user/:uid/settings" component={UserSettings} />
          <Route exact path="/RegisterUser" component={RegisterUser} />

          {/* Visitor Form for building */}
          <Route
            exact
            path="/building/:bid/form/:uid"
            component={BuildingVisitorForm}
          />
          {/* Signup */}
          <Route exact path="/login" component={Login} />

          {/* <Redirect from="*" to="/building/614c73d775c63e60e419ab85" /> */}
          <Redirect from="*" to="/RegisterUser" />
        </Switch>
      </div>
    </>
  );
}

export default App;

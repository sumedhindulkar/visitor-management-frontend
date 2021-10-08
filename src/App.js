import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "pages/building/Dashboard";
import GenerateQR from "pages/building/GenerateQR";
import ProfilePage from "pages/building/ProfilePage";
import Settings from "pages/building/Settings";
import BuildingVisitorForm from "pages/BuildingVisitorForm";
import ScanQR from "pages/ScanQR";
import VisitorForm from "components/VisitorForm";
import "assets/styles/tailwind.css";
function App() {
  return (
    <>
      <div className="md:ml-64">
        <Switch>
          {/* Building Routes */}
          <Route exact path="/building/:id" component={Dashboard} />
          <Route exact path="/building/:id/GenerateQR" component={GenerateQR} />
          <Route exact path="/building/:id/profile" component={ProfilePage} />
          <Route exact path="/building/:id/settings" component={Settings} />

          {/* User routes */}
          <Route exact path="/user/:uid/scanQR" component={ScanQR} />

          {/* Visitor Form for building */}
          <Route
            exact
            path="/building/:bid/form/:uid"
            component={BuildingVisitorForm}
          />

          <Redirect from="*" to="/building/614c73d775c63e60e419ab85" />
        </Switch>
      </div>
    </>
  );
}

export default App;

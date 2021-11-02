import React from "react";
import MuiAlert from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={8} variant="filled" {...props} />;
});
function Thankyou() {
  return (
    <div className="signup -ml-64 d-flex justify-content-center align-items-center h-100">
      <Alert severity="success">Checkin sucessfull!</Alert>
    </div>
  );
}

export default Thankyou;

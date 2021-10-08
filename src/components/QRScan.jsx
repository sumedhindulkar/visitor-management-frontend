import React, { useState, useRef } from "react";
import QrReader from "react-qr-reader";
import Card from "@material-tailwind/react/Card";
import CardRow from "@material-tailwind/react/CardRow";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardStatus from "@material-tailwind/react/CardStatus";
import CardStatusFooter from "@material-tailwind/react/CardStatusFooter";
import { useParams } from "react-router-dom";
import H5 from "@material-tailwind/react/Heading5";

import TimelineIcon from "@mui/icons-material/Timeline";
import Button from "@material-tailwind/react/Button";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        borderRadius: 1,
        textAlign: "center",
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.object,
};
export default function App({ color, title, amount }) {
  const { uid } = useParams();
  const [scanResult, setScanResult] = useState(null);
  const handleError = (err) => {
    console.log(err);
  };
  const handleScan = (result) => {
    if (result) {
      setScanResult(result);
    }
  };
  const onScan = () => {
    qrRef.current.openImageDialog();
  };
  const qrRef = useRef(null);
  return (
    <>
      <div className="px-4 mb-10">
        <Card>
          <CardRow>
            <CardHeader color={color} iconOnly className="mb-0">
              <TimelineIcon fontSize="large" />
            </CardHeader>

            <CardStatus title={title} amount={amount} />
          </CardRow>

          <CardStatusFooter>
            <Box
              sx={{
                display: "grid",
                gridTemplateRows: "repeat(3, 1fr)",
                width: "100%",
              }}
            >
              <Item style={{ height: "100px" }}>
                <div className="w-full flex column justify-center pt-3 lg:pt-4 pt-8">
                  <Button
                    onClick={(e) => onScan()}
                    className="ml-4"
                    size="large"
                    color="red"
                  >
                    Scan QR code
                  </Button>
                </div>
              </Item>

              <div className="w-full flex justify-center">
                <QrReader
                  ref={qrRef}
                  delay={300}
                  className="ml-4"
                  style={{ width: "120px", height: "120px" }}
                  onError={handleError}
                  onScan={handleScan}
                  legacyMode
                />
              </div>
              <Item>
                <div className="w-full flex  justify-center py-3 lg:pb-4">
                  {scanResult && (
                    <H5>
                      <a href={scanResult + uid} target="blank">
                        Lets visit Sensei
                      </a>
                    </H5>
                  )}
                </div>
              </Item>
            </Box>
          </CardStatusFooter>
        </Card>
      </div>
    </>
  );
}

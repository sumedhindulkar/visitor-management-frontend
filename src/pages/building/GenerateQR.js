import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import QRGenerator from "components/QRGenerator";
import Sidebar from "components/Sidebar";

import Footer from "components/Footer";
export default function Dashboard() {
  const { id } = useParams();

  return (
    <>
      <Sidebar bid={id} />
      <div
        className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8"
        style={{ height: "80vh" }}
      >
        <QRGenerator bid={id} color="pink" title="Generate one time QR code" />
      </div>

      <Footer />
    </>
  );
}

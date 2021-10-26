import { useParams } from "react-router-dom";
import UserSidebar from "components/UserSidebar";
import QRScan from "components/QRScan";

import Footer from "components/Footer";
export default function ScanQR() {
  const { id } = useParams();
  return (
    <>
      <UserSidebar uid={id} />

      <div
        className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8"
        style={{ height: "80vh" }}
      >
        <QRScan uid={id} color="pink" title="Scanner" />
      </div>

      <Footer />
    </>
  );
}

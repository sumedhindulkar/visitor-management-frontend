import { useState } from "react";
import { NavLink, useParams, useHistory } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import { useLocation } from "react-router-dom";
// Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import ProfileIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import QrCodeIcon from "@mui/icons-material/QrCode";
import LogoutIcon from "@mui/icons-material/Logout";
export default function Sidebar({ bid }) {
  const [showSidebar, setShowSidebar] = useState("-left-64");
  const location = useLocation().pathname;
  const history = useHistory();
  const { id } = useParams();
  return (
    <>
      <AdminNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <a
            href="https://material-tailwind.com?ref=mtd"
            target="_blank"
            rel="noreferrer"
            className="mt-2 text-center w-full inline-block"
          >
            <h6 color="gray">VManagement </h6>
          </a>
          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />

            <ul className="flex-col min-w-full flex list-none">
              <li className="rounded-lg mb-4">
                <NavLink
                  to={"/building/" + bid}
                  exact
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <DashboardIcon /> Dashboard
                </NavLink>
              </li>
              <li className="rounded-lg mb-4">
                <NavLink
                  to={"/building/" + bid + "/profile"}
                  exact
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <ProfileIcon />
                  Profile Page
                </NavLink>
              </li>

              <li className="rounded-lg mb-2">
                <NavLink
                  to={"/building/" + bid + "/settings"}
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <SettingsIcon /> Settings
                </NavLink>
              </li>

              <li className="rounded-lg mb-2 text-gray-700">
                <NavLink
                  to={"/building/" + bid + "/GenerateQR"}
                  className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                  activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                >
                  <QrCodeIcon /> Generate QR Code
                </NavLink>
              </li>
              <li
                onClick={() => {
                  localStorage.removeItem("userInfo");
                  history.push("/login");
                }}
                className="px-4 rounded-lg mb-2 text-gray-700"
              >
                <a className="flex items-center gap-4 text-sm font-light py-3">
                  <LogoutIcon /> Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

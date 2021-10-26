import UserProfileCard from "components/UserProfileCard";
import UserSidebar from "components/UserSidebar";
import { useParams } from "react-router-dom";

import Footer from "components/Footer";
export default function UserProfile() {
  const { id } = useParams();

  return (
    <>
      <UserSidebar bid={id} />
      <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto"></div>
      <div className="px-3 md:px-8 h-auto -mt-24">
        <div className="container mx-auto max-w-full">
          <UserProfileCard />
        </div>
      </div>

      <Footer />
    </>
  );
}

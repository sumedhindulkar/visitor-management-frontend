import StatusCard from "components/StatusCard";
// import TableCard from 'components/TableCard';
import ProfileCard from "components/ProfileCard";
export default function Dashboard() {
  return (
    <>
      <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto"></div>
      <div className="px-3 md:px-8 h-auto -mt-24">
        <div className="container mx-auto max-w-full">
          <ProfileCard />
        </div>
      </div>
    </>
  );
}

import Map from "./supervisor/components/Map";
import Notifications from "./supervisor/components/Notifications";
import Sidebar from "./supervisor/components/Sidebar";

export default function Supervisor() {
  return (
    <>
      <div className="flex flex-row h-screen">
        <div className="w-1/2 h-full">
          <Map />
        </div>

        <div className="flex flex-col w-1/2 h-full">
          <div className="w-full h-1/2">
            <Notifications />
          </div>
          <div className="w-full h-1/2">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}


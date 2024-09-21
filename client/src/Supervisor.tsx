import Map from "./supervisor/components/Map";
import Notifications from "./supervisor/components/Notifications";
import Sidebar from "./supervisor/components/Sidebar";

export default function Supervisor() {
  return (
    <>
      <div className="flex flex-row h-[425px]">
        <div className="w-1/2 h-full mx-4">
          <Map />
        </div>

        <div className="flex flex-col w-1/2 h-full mx-4">
          <div className="w-full h-1/2 mb-2">
            <Notifications />
          </div>
          <div className="w-full h-1/2 mb-2">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

import Map from "./supervisor/components/Map";
import Notifications from "./supervisor/components/Notifications";
import Sidebar from "./supervisor/components/Sidebar";

export default function Supervisor() {
  return (
    <>
      <Map /><Sidebar /><Notifications />
    </>
  );
}

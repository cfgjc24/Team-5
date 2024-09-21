import Map from "./supervisor/components/Map";
import MarkerList from "./supervisor/components/MarkerList";
import Notifications from "./supervisor/components/Notifications";


export default function Supervisor() {
  return (
    <>
      <Map /> <MarkerList />
      <Notifications />
    </>
  );
}

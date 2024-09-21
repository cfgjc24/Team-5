import React, { useState, useEffect } from "react";
import Map from "./supervisor/components/Map";
import Notifications from "./supervisor/components/Notifications";
import Sidebar from "./supervisor/components/Sidebar";

export default function Supervisor() {
  const [notifications, setNotifications] = useState([]);
  const [lastNotificationId, setLastNotificationId] = useState(null);

  const fetchNotifications = async () => {
    try {
      const response = await fetch("http://localhost:5000/notifications");
      const data = await response.json();

      if (data.length > 0) {
        const latestNotification = data[data.length - 1];

        if (latestNotification.id !== lastNotificationId) {
          setLastNotificationId(latestNotification.id);
          setNotifications(data);
        }
      }
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  useEffect(() => {
    fetchNotifications();
    const intervalId = setInterval(fetchNotifications, 5000);

    return () => clearInterval(intervalId);
  }, [lastNotificationId]);

  return (
    <div className="flex flex-row h-[600px]">
      <div className="w-1/2 h-full mx-4">
        <Map />
      </div>

      <div className="w-full h-full mb-2">
        <Sidebar notifications={notifications} />
      </div>

      <Notifications />
    </div>
  );
}

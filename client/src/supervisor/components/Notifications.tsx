import { useState, useEffect } from "react";

interface Notification {
  id: number;
  name: string;
  status: string;
  comment: string;
}

export default function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch("http://localhost:5000/notifications");
        const data = await response.json();
        const notificationArray: Notification[] = Object.values(data);
        setNotifications(notificationArray);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();

    const intervalId = setInterval(fetchNotifications, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:5000/notifications/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setNotifications((prevNotifications) =>
          prevNotifications.filter((notification) => notification.id !== id)
        );
      } else {
        const errorData = await response.json();
        console.error("Failed to delete notification:", errorData.error);
      }
    } catch (error) {
      console.error("Error deleting notification:", error);
    }
  };

  const getAlertClass = (status: string): string => {
    switch (status) {
      case "good":
        return "alert-success"; // Green
      case "extend":
        return "alert-primary"; // Blue
      case "emergency":
        return "alert-warning"; // Orange
      case "sos":
        return "alert-danger"; // Red
      default:
        return "alert-secondary"; // Fallback
    }
  };

  const filteredNotifications = notifications.filter(
    (notification) => notification.status === "emergency" || notification.status === "sos"
  );

  if (filteredNotifications.length === 0) {
    return null;
  }

  return (
    <div
      className="position-fixed top-0 right-0 p-4"
      style={{ zIndex: 1050 }}
    >
      {filteredNotifications.map((filteredNotification) => (
        <div
          key={filteredNotification.id}
          className={`alert ${getAlertClass(filteredNotification.status)} alert-dismissible fade show`}
          role="alert"
        >
          <strong>[{filteredNotification.status.toUpperCase()}] </strong> {filteredNotification.name}
          {filteredNotification.comment ? ": " : ""}
          {filteredNotification.comment}
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => handleDelete(filteredNotification.id)} // Delete on close
          ></button>
        </div>
      ))}
    </div>
  );
}


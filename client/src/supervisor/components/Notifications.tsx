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

  if (notifications.length === 0) {
    return null;
  }

  return (
    <div
      className="position-fixed top-0 right-0 p-4"
      style={{ zIndex: 1050 }}
    >
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`alert ${getAlertClass(notification.status)} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{notification.name}:</strong> {notification.comment} ({notification.status})
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => handleDelete(notification.id)} // Delete on close
          ></button>
        </div>
      ))}
    </div>
  );
}


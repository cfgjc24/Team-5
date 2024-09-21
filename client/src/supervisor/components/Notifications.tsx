import { useState, useEffect } from "react";

interface Notification {
  id: number;
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
        // Remove the notification from the state
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

  return (
    <>
      <h2>Notifications</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Status</th>
            <th>Comment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {notifications.length === 0 ? (
            <tr>
              <td colSpan={2} style={{ textAlign: "center" }}>
                No notifications yet
              </td>
            </tr>
          ) : (
            notifications.map((notification, index) => (
              <tr key={index}>
                <td>{notification.status}</td>
                <td>{notification.comment}</td>
                <td>
                  <button onClick={() => handleDelete(notification.id)}>X</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}


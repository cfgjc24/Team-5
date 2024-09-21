import React, { useState, useEffect } from "react";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch("http://localhost:5000/notifications");
        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();

    const intervalId = setInterval(fetchNotifications, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <h2>Notifications</h2>
      {notifications.length === 0 ? (
        <p>No notifications yet</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Status</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notification, index) => (
              <tr key={index}>
                <td>{notification.status}</td>
                <td>{notification.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}


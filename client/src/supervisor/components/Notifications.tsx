import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Button,
} from "@nextui-org/react";
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
    <Table aria-label="Notifications">
      <TableHeader>
        <TableColumn>Status</TableColumn>
        <TableColumn>Comment</TableColumn>
        <TableColumn>Action</TableColumn>
      </TableHeader>
      <TableBody>
        {notifications.length === 0 ? (
          <TableRow key="no-data">
            <TableCell className="hidden"> </TableCell>
            <TableCell aria-colspan={3} colSpan={3} className="text-center">No notifications yet</TableCell>
            <TableCell className="hidden"> </TableCell>
          </TableRow>
        ) : (
          notifications.map((notification) => (
            <TableRow key={notification.id}>
              <TableCell>{notification.status}</TableCell>
              <TableCell>{notification.comment}</TableCell>
              <TableCell>
                <Button
                  color="danger"
                  size="sm"
                  onClick={() => handleDelete(notification.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}


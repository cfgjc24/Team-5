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

  return (
    <div
      className="h-full overflow-y-auto w-full bg-zinc-800">
      <Table aria-label="Notifications" removeWrapper isStriped className="w-full h-full table-fixed">
        <TableHeader>
          <TableColumn className="text-center">Name</TableColumn>
          <TableColumn className="text-center">Status</TableColumn>
          <TableColumn className="text-center">Comment</TableColumn>
          <TableColumn className="text-center whitespace-nowrap"></TableColumn>
        </TableHeader>
        <TableBody>
          {notifications.length === 0 ? (
            <TableRow key="no-data">
              <TableCell className="hidden"> </TableCell>
              <TableCell className="hidden"> </TableCell>
              <TableCell aria-colspan={4} colSpan={4} className="text-center">No notifications yet</TableCell>
              <TableCell className="hidden"> </TableCell>
            </TableRow>
          ) : (
            notifications.map((notification) => (
              <TableRow key={notification.id}>
                <TableCell>{notification.name}</TableCell>
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
    </div>
  );
}


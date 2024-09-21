import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue } from "@nextui-org/react";
import { DeleteIcon } from "./DeleteIcon";
import { EyeIcon } from "./EyeIcon";
import { columns, users } from "./data";
import { useState, useEffect } from "react";
import { getMarkers } from "../../config/config.tsx";

const notificationStatusMap: Record<string, string> = {
  "good": "Working",
  "extend": "Overtime",
  "emergency": "Emergency",
  "sos": "SOS",
}

const statusColorMap: Record<string, string> = {
  "Working": "success",
  "Overtime": "primary",
  "Emergency": "warning",
  "SOS": "danger",
};

interface SidebarProps {
  notifications: Notification[];
}

export default function Sidebar({ notifications }: SidebarProps) {
  const renderCell = React.useCallback((user: any, columnKey: any) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User style={{ opacity: 1 }}
            avatarProps={{ radius: "full", src: user.avatar, isLoading: false }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "clientName":
        return (
          <div className="flex flex-col w-full">
            <p className="text-bold text-sm capitalize mb-0">{cellValue}</p>
          </div>
        );
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );

      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="911-119-1919">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const [markerList, setMarkerList] = useState([{}]);

  useEffect(() => {
    getMarkers().then((value: any[]) => {
      // console.log(value) ;
      setMarkerList(value);
    });
  }, []);

  useEffect(() => {
    if (notifications.length === 0) return;

    setMarkerList((prevMarkerList) =>
      prevMarkerList.map((marker) => {
        const relevantNotifications = notifications
          .filter((notification) => notification.name === marker.name)
          .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

        if (relevantNotifications.length > 0) {
          const latestNotification = relevantNotifications[0];
          const mappedStatus = notificationStatusMap[latestNotification.status.toLowerCase()] || marker.status;
          return {
            ...marker,
            status: mappedStatus,
          };
        }

        return marker;
      })
    );
  }, [notifications]);

  return (
    <div className="h-full overflow-y-auto w-full bg-zinc-800">
      <Table aria-label="Example table with custom cells" className="w-full h-full table-fixed">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={markerList}>
          {(item) => (
            <TableRow key="{item.name}">
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}


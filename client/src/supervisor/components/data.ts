const columns = [
    {name: "NAME", uid: "name"},
    {name: "CLIENT", uid: "client"},
    {name: "STATUS", uid: "status"},
    {name: "", uid: "actions"},
  ];
  
  const users = [
    {
      id: 1,
      name: "Liam Wilson",
      client: "John Doe",

      status: "working",
      age: "29",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      
    },
    {
      id: 2,
      name: "Zoey Lang",
      client: "Sarah Smith",
      status: "paused",
      age: "25",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      
    },
    {
      id: 3,
      name: "Jane Fisher",
      client: "William Johnson",
      status: "active",
      age: "22",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    },
    
  ];
  
  export {columns, users};
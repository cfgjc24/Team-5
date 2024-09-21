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
      status: "SOS",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      number: "123-456-7891"
      
    },
    {
      id: 2,
      name: "Zoey Lang",
      client: "Sarah Smith",
      status: "Emergency",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      number: "341-444-4231"
    },
    {
      id: 3,
      name: "Jane Fisher",
      client: "William Johnson",
      status: "Overtime",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      number: "911-911-9111"
    },
    {
      id: 4,
      name: "Josh Moore ",
      client: "Juan Felipe",
      status: "Working",
      avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
      number: "245-555-8971"
    }
    
  ];
  
  export {columns, users};

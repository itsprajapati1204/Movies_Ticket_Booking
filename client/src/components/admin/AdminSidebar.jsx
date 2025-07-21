import { icons, LayoutDashboardIcon, ListCollapseIcon, ListIcon, PlusSquareIcon } from "lucide-react";
import React from "react";

const AdminSidebar = () => {

  const user = {
    firstName: "Admin",
    lastName: "User",
    imageUrl: assetsprofile,
  };
    const adminNavlinks =[
        {name:'Dashboard',path:'/admin',icon:LayoutDashboardIcon},
        {name:'Add Show',path:'/admin/add-shows',icon:PlusSquareIcon},
        {name:'List Show',path:'/admin/list-shows',icon:ListIcon},
        {name:'List Bookings',path:'/admin/list-bookings',icon:ListCollapseIcon}

    ]




  return (
    <div className="h-[calc(100vh-64px)] md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-gray-300/20 text-sm" >
     <img src="" alt="" />
    </div>
  );
};

export default AdminSidebar;

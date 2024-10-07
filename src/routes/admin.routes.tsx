import {     UserOutlined } from "@ant-design/icons";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateFacility from "../pages/admin/CreateFacility";
import { MdDashboard } from "react-icons/md";
import { PiBuildingOfficeDuotone } from "react-icons/pi";
import { IoCalendarClearOutline } from "react-icons/io5";


export const adminPaths = [
    {
        name: "Dashboard",
        icon: <MdDashboard />,
        element: <AdminDashboard />,
        path: 'dashboard',
    },
    {
        name: "Facility",
        icon: <PiBuildingOfficeDuotone />,
        path: 'facility',
        children: [
            {
                name: "Create Facility",
                path: "create-facility",
                element: <CreateFacility />,
            }

        ]
    },
    {
        name: "Bookings",
        icon: <IoCalendarClearOutline />,
        path: 'bookings',
        element: <AdminDashboard />
    },
    {
        name: "Admin",
        icon: <UserOutlined />,
        path: 'admin',
        element: <AdminDashboard />
    },
]
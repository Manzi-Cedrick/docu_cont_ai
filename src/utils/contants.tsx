import { AccountsIcon, AgencyListIcon, BillingIcon, SettingsIcon, SupportIcon, TasksIcon, UserClientsIcon } from "../icons";

interface sideBarLinks {
    name: string;
    path: string;
    icon: any;
}
export const sideBarLinks: sideBarLinks[] = [
    {
        name: "Agency Clients",
        path: "/admin/dashboard",
        icon: <AgencyListIcon />,
    },
    {
        name: "User Clients",
        path: "/admin/user",
        icon: <UserClientsIcon />,
    },
    {
        name: "Billing",
        path: "/admin/billing",
        icon: <BillingIcon />
    },
    {
        name: "Accounts",
        path: "/admin/accounts",
        icon: <AccountsIcon />
    },
    {
        name: "Tasks",
        path: "/admin/tasks",
        icon: <TasksIcon />
    },
    {
        name: "Support",
        path: "/admin/support",
        icon: <SupportIcon />
    },
    {
        name: "Settings",
        path: "/admin/settings",
        icon: <SettingsIcon />
    }
]
interface IoptionCards {
    title: string;
    data: string;
    icon: any;
    week_info: string;
    month_info: string;
}
export const optionCards: IoptionCards[] = [
    {
        title: "Total Clients",
        data: "1,600",
        icon: <AgencyListIcon />,
        week_info: "+13",
        month_info: "+1.2%"
    },
    {
        title: "Total Users",
        data: "1,600",
        icon: <UserClientsIcon />,
        week_info: "+13",
        month_info: "+1.2%"
    },
    {
        title: "Total Billing",
        data: "1,600",
        icon: <BillingIcon />,
        week_info: "+13",
        month_info: "+1.2%"
    },
    {
        title: "Total Accounts",
        data: "1,600",
        icon: <AccountsIcon />,
        week_info: "+13",
        month_info: "+1.2%"
    }
]
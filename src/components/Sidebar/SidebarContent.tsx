import AppsIcon from '@mui/icons-material/Apps';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import BuildIcon from '@mui/icons-material/Build';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CottageIcon from '@mui/icons-material/Cottage';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
import LocalMallIcon from '@mui/icons-material/LocalMall';


const sx = { width: "24px", height: "24px" };
export const SidebarContent = {
    dashboard: {
        title: "Dashboard",
        icon: <CottageIcon sx={sx} />,
        path: '/'
    }, 
    inventory: {
        title: "Inventory",
        icon: <Inventory2Icon sx={sx} />,
        path: '/Inventory'
    }, 
    shopping: {
        title: "Shopping",
        icon: <LocalMallIcon sx={sx} />,
        path: '/Shopping'
    }, 
    sales: {
        title: "Sales & Services",
        icon: <DataThresholdingIcon sx={sx} />,
        path: '/Sales'
    }, 
    customer: {
        title: "Customer Info",
        icon: <ContactPageIcon sx={sx} />,
        path: '/CustomerInfo'
    }, 
    account: {
        title: "Account",
        icon: <AccountBoxIcon sx={sx} />,
        path: '/Account'
    }, 
    settings: {
        title: "Settings",
        icon: <BuildIcon sx={sx} />,
        path: '/Settings'
    }, 
    open: {
        title: "open",
        icon: <AppsIcon sx={sx} />,
        path: '/'
    }, 
    close: {
        title: "close",
        icon: <ArrowBackIosNewIcon sx={sx} />,
        path: '/'
    }
}

    
import React from 'react';
import { List, ListItemIcon, ListItemButton, ListItemText, Divider } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { SidebarContent } from "./SidebarContent";
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';


const drawerWidth = 240;
const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    border: 'none'
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `64px`,
    border: 'none'
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    })
);

interface ListItemLinkProps {
    icon?: React.ReactElement;
    text: string;
    to: string;
    selected: boolean;
    onClick: Function;
  }
  
function ListItemLink(props: ListItemLinkProps) {

    const { icon, text, to, selected, onClick } = props;

    const renderLink = React.useMemo(
        () => React.forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, 'to'>>(function Link(itemProps, ref) {
                return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
            }), [to],
    );

    return (
        <li>
            <ListItemButton
                sx={{
                    margin: "4px 4px 8px 4px",
                    padding: 0,
                    borderRadius: "6px",
                    maxHeight: "56px"
                }}
                component={renderLink}   
                selected={selected}             
                key={text}
                onClick={() => {onClick()}}                        
            >
                <ListItemIcon
                    sx={{
                        margin: 0,
                        padding: 0,
                        justifyContent: "center",
                        alignContent: "center",
                        alignItems: "center",
                        minWidth: "56px",
                        minHeight: "56px"
                    }}
                >
                    {icon}                 
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{ variant: "button" }} primary={text} sx={{ pl: "4px" }} />
            </ListItemButton>
        </li>
);}

function Sidebar() {
    const [open, setOpen] = React.useState(false);                        
    const [selectedIndex, setSelectedIndex] = React.useState("dashboard");

    const handleDrawerOpen = () => {
        if (open) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    };

    return (
        <Drawer variant="permanent" PaperProps={{ sx: { justifyContent: "space-between" } }} open={open} >
            <Box>
                <ListItemButton
                    sx={{
                        margin: "8px 4px 8px 4px",
                        padding: 0,
                        borderRadius: "6px",
                        maxHeight: "56px"
                    }}                    
                    href="#simple-list"
                    key={SidebarContent.open.title}            
                    onClick = {handleDrawerOpen}
                >
                    <ListItemIcon
                        sx={{
                            margin: 0,
                            padding: 0,
                            justifyContent: "center",
                            alignContent: "center",
                            alignItems: "center",
                            minWidth: "56px",
                            minHeight: "56px"
                        }}
                    >
                        {open ? SidebarContent.close.icon : SidebarContent.open.icon}                 
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={{ variant: "button" }} sx={{ pl: "4px" }} />
                </ListItemButton>                  
                <Divider />
                <List sx={{ margin: 0, padding: 0, minHeight: "fit-content" }}>                                                    
                    <ListItemLink 
                        to={SidebarContent.dashboard.path}
                        text={SidebarContent.dashboard.title}
                        icon={SidebarContent.dashboard.icon}
                        onClick={() => {setSelectedIndex("dashboard")}}
                        selected={selectedIndex === "dashboard"}
                    />
                    <ListItemLink 
                        to={SidebarContent.inventory.path}
                        text={SidebarContent.inventory.title}
                        icon={SidebarContent.inventory.icon}
                        onClick={() => {setSelectedIndex("inventory")}}
                        selected={selectedIndex === "inventory"}
                    />
                    <ListItemLink 
                        to={SidebarContent.shopping.path}
                        text={SidebarContent.shopping.title}
                        icon={SidebarContent.shopping.icon}
                        onClick={() => {setSelectedIndex("shopping")}}
                        selected={selectedIndex === "shopping"}
                    />
                    <ListItemLink 
                        to={SidebarContent.sales.path}
                        text={SidebarContent.sales.title}
                        icon={SidebarContent.sales.icon}
                        onClick={() => {setSelectedIndex("sales")}}
                        selected={selectedIndex === "sales"}
                    />
                    <ListItemLink 
                        to={SidebarContent.customer.path}
                        text={SidebarContent.customer.title}
                        icon={SidebarContent.customer.icon}
                        onClick={() => {setSelectedIndex("customer")}}
                        selected={selectedIndex === "customer"}
                    />
                        
                </List>
            </Box>
            <List sx={{ margin: 0, padding: 0, minHeight: "fit-content" }}>                                
                <ListItemLink 
                    to={SidebarContent.account.path}
                    text={SidebarContent.account.title}
                    icon={SidebarContent.account.icon}
                    onClick={() => {setSelectedIndex("account")}}
                    selected={selectedIndex === "account"}
                />
                <ListItemLink 
                    to={SidebarContent.settings.path}
                    text={SidebarContent.settings.title}
                    icon={SidebarContent.settings.icon}
                    onClick={() => {setSelectedIndex("settings")}}
                    selected={selectedIndex === "settings"}
                />
                
            </List>
        </Drawer>
    );
}
export default Sidebar;

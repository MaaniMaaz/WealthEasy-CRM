import React, { useState } from "react";
import { Sider as DefaultSider } from "@refinedev/mui";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MuiList from "@mui/material/List";
import ListOutlined from "@mui/icons-material/ListOutlined";
import Logout from "@mui/icons-material/Logout";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import MenuRounded from "@mui/icons-material/MenuRounded";
import Dashboard from "@mui/icons-material/Dashboard";
import Typography from "@mui/material/Typography";
import {
    CanAccess,
    ITreeMenu,
    useIsExistAuthentication,
    useLogout,
    useTranslate,
    useRouterContext,
    useMenu,
    useRefineContext,
} from "@refinedev/core";

const Sider: typeof DefaultSider = ({ render }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [opened, setOpened] = useState(false);

    const drawerWidth = () => {
        if (collapsed) return 64;
        return 200;
    };

    const t = useTranslate();
    const { Link } = useRouterContext();
    const { hasDashboard } = useRefineContext();
    const translate = useTranslate();

    const { menuItems, selectedKey, defaultOpenKeys } = useMenu();
    const isExistAuthentication = useIsExistAuthentication();
    const { mutate: mutateLogout } = useLogout({
        v3LegacyAuthProviderCompatible: true,
    });

    const [open, setOpen] = useState<{ [k: string]: any }>({});

    React.useEffect(() => {
        setOpen((previousOpen) => {
            const previousOpenKeys: string[] = Object.keys(previousOpen);
            const uniqueKeys = new Set([
                ...previousOpenKeys,
                ...defaultOpenKeys,
            ]);
            const uniqueKeysRecord = Object.fromEntries(
                Array.from(uniqueKeys.values()).map((key) => [key, true]),
            );
            return uniqueKeysRecord;
        });
    }, [defaultOpenKeys]);

    const handleClick = (key: string) => {
        setOpen({ ...open, [key]: !open[key] });
    };

    const renderTreeView = (tree: ITreeMenu[], selectedKey: string) => {
        return tree.map((item: ITreeMenu) => {
            const { icon, label, route, name, children, parentName } = item;
            const isOpen = open[route || ""] || false;

            const isSelected = route === selectedKey;
            const isNested = !(parentName === undefined);

            if (children.length > 0) {
                return (
                    <CanAccess
                        key={route}
                        resource={name.toLowerCase()}
                        action="list"
                        params={{
                            resource: item,
                        }}
                    >
                        <div key={route}>
                            <Tooltip
                                title={label ?? name}
                                placement="right"
                                disableHoverListener={!collapsed}
                                arrow
                            >
                                <ListItemButton
                                    onClick={() => {
                                        if (collapsed) {
                                            setCollapsed(false);
                                            if (!isOpen) {
                                                handleClick(route || "");
                                            }
                                        } else {
                                            handleClick(route || "");
                                        }
                                    }}
                                    sx={{
                                        pl: isNested ? 4 : 2,
                                        justifyContent: "center",
                                        "&.Mui-selected": {
                                            "&:hover": {
                                                backgroundColor: "transparent",
                                            },
                                            backgroundColor: "transparent",
                                        },
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            justifyContent: "center",
                                            minWidth: 36,
                                            color: "primary.contrastText",
                                        }}
                                    >
                                        {icon ?? <ListOutlined />}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={label}
                                        primaryTypographyProps={{
                                            noWrap: true,
                                            fontSize: "16px",
                                            fontWeight: isSelected
                                                ? "bold"
                                                : "normal",
                                        }}
                                    />
                                    {!collapsed &&
                                        (isOpen ? (
                                            <ExpandLess />
                                        ) : (
                                            <ExpandMore />
                                        ))}
                                </ListItemButton>
                            </Tooltip>
                            {!collapsed && (
                                <Collapse
                                    in={open[route || ""]}
                                    timeout="auto"
                                    unmountOnExit
                                >
                                    <MuiList component="div" disablePadding>
                                        {renderTreeView(children, selectedKey)}
                                    </MuiList>
                                </Collapse>
                            )}
                        </div>
                    </CanAccess>
                );
            }

            return (
                <CanAccess
                    key={route}
                    resource={name.toLowerCase()}
                    action="list"
                    params={{ resource: item }}
                >
                    <Tooltip
                        title={label ?? name}
                        placement="right"
                        disableHoverListener={!collapsed}
                        arrow
                    >
                        <ListItemButton
                            component={RouterLink}
                            to={route}
                            selected={isSelected}
                            onClick={() => {
                                setOpened(false);
                            }}
                            sx={{
                                pl: isNested ? 4 : 2,
                                py: isNested ? 1.25 : 1,
                                "&.Mui-selected": {
                                    "&:hover": {
                                        backgroundColor: isSelected
                                            ? "#0067C6"
                                            : "transparent",
                                    },
                                    backgroundColor: isSelected
                                        ? "#005BAE"
                                        : "transparent",
                                },
                                justifyContent: "center",
                                margin: "10px auto",
                                borderRadius: "12px",
                                minHeight: "56px",
                                width: "90%",
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    justifyContent: "center",
                                    minWidth: 36,
                                    color: isSelected ? "#fff" : "#fff",
                                }}
                            >
                                {icon ?? <ListOutlined />}
                            </ListItemIcon>
                            <ListItemText
                                primary={label}
                                primaryTypographyProps={{
                                    noWrap: true,
                                    fontSize: "16px",
                                    fontWeight: isSelected ? "bold" : "normal",
                                    color: isSelected ? "#fff" : "#fff",
                                    marginLeft: "10px",
                                }}
                            />
                        </ListItemButton>
                    </Tooltip>
                </CanAccess>
            );
        });
    };

    const dashboard = hasDashboard ? (
        <CanAccess resource="dashboard" action="list">
            <Tooltip
                title={translate("dashboard.title", "Dashboard")}
                placement="right"
                disableHoverListener={!collapsed}
                arrow
            >
                <ListItemButton
                    component={RouterLink}
                    to="/"
                    selected={selectedKey === "/"}
                    onClick={() => {
                        setOpened(false);
                    }}
                    sx={{
                        pl: 2,
                        py: 1,
                        "&.Mui-selected": {
                            "&:hover": {
                                backgroundColor: "transparent",
                            },
                            backgroundColor: "transparent",
                        },
                        justifyContent: "center",
                    }}
                >
                    <ListItemIcon
                        sx={{
                            justifyContent: "center",
                            minWidth: 36,
                            color: "#fff",
                            marginLeft: "6px",
                            marginRight: "14px",
                        }}
                    >
                        <Dashboard />
                    </ListItemIcon>
                    <ListItemText
                        primary={translate("dashboard.title", "Dashboard")}
                        primaryTypographyProps={{
                            noWrap: true,
                            fontSize: "16px",
                            fontWeight: selectedKey === "/" ? "bold" : "normal",
                        }}
                    />
                </ListItemButton>
            </Tooltip>
        </CanAccess>
    ) : null;

    const logout = isExistAuthentication && (
        <Tooltip
            title={t("buttons.logout", "Logout")}
            placement="right"
            disableHoverListener={!collapsed}
            arrow
        >
            <ListItemButton
                key="logout"
                onClick={() => mutateLogout()}
                sx={{
                    justifyContent: "center",
                    margin: "10px auto",
                    borderRadius: "12px",
                    minHeight: "56px",
                    width: "90%",
                }}
            >
                <ListItemIcon
                    sx={{
                        justifyContent: "center",
                        minWidth: 36,
                        color: "#fff",
                    }}
                >
                    <Logout />
                </ListItemIcon>
                <ListItemText
                    primary={t("buttons.logout", "Logout")}
                    primaryTypographyProps={{
                        noWrap: true,
                        fontSize: "16px",
                    }}
                />
            </ListItemButton>
        </Tooltip>
    );

    const items = renderTreeView(menuItems, selectedKey);

    const renderSider = () => {
        if (render) {
            return render({
                dashboard,
                logout,
                items,
                collapsed,
            });
        }
        return (
            <>
                {dashboard}
                {items}
                {logout}
            </>
        );
    };

    const drawer = (
        <MuiList disablePadding sx={{ mt: 1, color: "#fff" }}>
            {renderSider()}
        </MuiList>
    );

    return (
        <>
            <Box
                sx={{
                    width: { xs: drawerWidth() },
                    display: {
                        xs: "none",
                        md: "block",
                    },
                    transition: "width 0.3s ease",
                }}
            />
            <Box
                component="nav"
                sx={{
                    position: "fixed",
                    zIndex: 1101,
                    width: { sm: drawerWidth() },
                    display: "flex",
                }}
            >
                <Drawer
                    variant="temporary"
                    open={opened}
                    onClose={() => setOpened(false)}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { sm: "block", md: "none" },
                        "& .MuiDrawer-paper": {
                            width: 256,
                            bgcolor: "#0085FF",
                        },
                    }}
                >
                    <Box
                        sx={{
                            height: 64,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Typography variant="h6" component="div">
                            {collapsed ? (
                                <Box component="span" fontWeight="fontWeightBold" color="#0085FF">
                                    WE
                                </Box>
                            ) : (
                                <>
                                    <Box component="span" fontWeight="fontWeightBold" color="#0085FF">
                                        Wealth
                                    </Box>
                                    <Box component="span" fontWeight="fontWeightBold" color="#000">
                                        Easy
                                    </Box>
                                </>
                            )}
                        </Typography>
                    </Box>
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    PaperProps={{ elevation: 0 }}
                    sx={{
                        display: { xs: "none", md: "block" },
                        "& .MuiDrawer-paper": {
                            width: drawerWidth,
                            bgcolor: "#0085FF",
                            overflow: "hidden",
                            transition:
                                "width 200ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
                        },
                    }}
                    open
                >
                    <Box
                        sx={{
                            height: 64,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Typography variant="h6" component="div">
                            {collapsed ? (
                               <>
                               <Box component="span" fontWeight="fontWeightBold" color="#fff">
                                   W
                               </Box>
                               <Box component="span" fontWeight="fontWeightBold" color="#000">
                                   E
                               </Box>
                           </>
                            ) : (
                                <>
                                    <Box component="span" fontWeight="fontWeightBold" color="#fff">
                                        Wealth
                                    </Box>
                                    <Box component="span" fontWeight="fontWeightBold" color="#000">
                                        Easy
                                    </Box>
                                </>
                            )}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            overflowX: "hidden",
                            overflowY: "auto",
                        }}
                    >
                        {drawer}
                    </Box>
                    <Button
                        sx={{
                            background: "#0085FF",
                            color: "primary.contrastText",
                            textAlign: "center",
                            borderRadius: 0,
                            "&:hover": {
                                background: "#005BAE",
                            },
                        }}
                        fullWidth
                        size="large"
                        onClick={() => setCollapsed((prev) => !prev)}
                    >
                        {collapsed ? <ChevronRight /> : <ChevronLeft />}
                    </Button>
                </Drawer>
                <Box
                    sx={{
                        display: { xs: "block", md: "none" },
                        position: "fixed",
                        top: "64px",
                        left: "0px",
                        borderRadius: "0 6px 6px 0",
                        bgcolor: "#475be8",
                        zIndex: 1199,
                        width: "36px",
                    }}
                >
                    <IconButton
                        sx={{ color: "#fff", width: "36px" }}
                        onClick={() => setOpened((prev) => !prev)}
                    >
                        <MenuRounded />
                    </IconButton>
                </Box>
            </Box>
        </>
    );
};

export default Sider;

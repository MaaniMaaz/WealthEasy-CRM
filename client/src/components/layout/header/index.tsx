import React, { useContext } from "react";
import { AppBar, Avatar, TextField, MenuItem, Stack, Toolbar, Typography } from "@mui/material";
import { useGetIdentity } from "@refinedev/core";
import { HamburgerMenu, RefineThemedLayoutV2HeaderProps } from "@refinedev/mui";
import { ColorModeContext } from "../../../contexts/color-mode";

type IUser = {
  id: number;
  name: string;
  avatar: string;
};

export const Header: React.FC<RefineThemedLayoutV2HeaderProps> = ({ sticky = true }) => {
  const { mode, setMode } = useContext(ColorModeContext);
  const { data: user } = useGetIdentity<IUser>();

  return (
    <AppBar 
      color="default"
      position="sticky"
      elevation={0}
      sx={{ background: '#fcfcfc', padding: '0px', margin: '0px' }}
    >
      <Toolbar>
        <Stack direction="row" width="100%" alignItems="center">
          <HamburgerMenu />

          <TextField
            variant="outlined"
            placeholder="Search…"
            size="small"
            sx={{ marginLeft: 2, width: '350px' }}  // Set a fixed width for the search bar
          />

          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            sx={{ marginLeft: 'auto' }}  // Push this stack to the right end
          >
            <MenuItem component="a" href="/Overview" sx={{ color: 'black' }}>
              Home
            </MenuItem>
            <MenuItem component="a" href="/about" sx={{ color: 'black' }}>
              About
            </MenuItem>
            <MenuItem component="a" href="/Help" sx={{ color: 'black' }}>
              Contact
            </MenuItem>
          </Stack>

          {(user?.avatar || user?.name) && (
            <Stack
              direction="row"
              gap="16px"
              alignItems="center"
              justifyContent="flex-end"
              sx={{ marginLeft: 2 }}  // Adjust margin to ensure proper spacing
            >
              {user?.name && (
                <Typography
                  sx={{
                    display: {
                      xs: "none",
                      sm: "inline-block",
                    },
                    marginRight: 2,
                    color: 'black'
                  }}
                  variant="subtitle2"
                >
                  {user?.name}
                </Typography>
              )}
              <Avatar src={user?.avatar} alt={user?.name} />
            </Stack>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

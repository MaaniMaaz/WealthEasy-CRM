import React from "react";
import { useRouterContext, TitleProps } from "@refinedev/core";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
    const { Link } = useRouterContext();

    return (
        <Button fullWidth variant="text" disableRipple component={Link} to="/">
            {collapsed ? (
                <Typography variant="h6" component="div">
                    <Box component="span" fontWeight="fontWeightBold" color="#0085FF">
                        W
                    </Box>
                    <Box component="span" fontWeight="fontWeightBold" color="#000">
                        E
                    </Box>
                </Typography>
            ) : (
                <Typography variant="h6" component="div">
                    <Box component="span" fontWeight="fontWeightBold" color="#0085FF">
                        Wealth
                    </Box>
                    <Box component="span" fontWeight="fontWeightBold" color="#000">
                        Easy
                    </Box>
                </Typography>
            )}
        </Button>
    );
};

import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import {
  AuthBindings,
  Authenticated,
  Refine,
} from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { MuiInferencer } from "@refinedev/inferencer/mui";
import home from './assets/home.png';
import client from './assets/Client.png';
import account from './assets/Account.png';
import payment from './assets/Payment.png';
import help from './assets/Help.png';

import {
  ErrorComponent,
  notificationProvider,
  RefineSnackbarProvider,
} from "@refinedev/mui";

import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import axios from "axios";
import { Header } from "./components/layout/header";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { Login, Overview, Client, Account, Payment, Help, SingleClientPage } from "./pages";
import Sider from "./components/layout/sider";
import { Box } from "@mui/material";

import "./index.css";

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (config.headers) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

function App() {
  const authProvider: AuthBindings = {
    login: async ({ email, password }) => {
      if (email === "test@x.com" && password === "1234") {
        const user = { email: "test@x.com", name: "Test User" };
        const token = "fake-jwt-token";

        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);

        return {
          success: true,
          redirectTo: "/overview",
        };
      }

      return {
        success: false,
        error: {
          message: "Invalid credentials",
          name: "Login Error",
        },
      };
    },
    logout: async () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return {
        success: true,
        redirectTo: "/login",
      };
    },
    onError: async (error) => {
      console.error(error);
      return { error };
    },
    check: async () => {
      const token = localStorage.getItem("token");
      if (token) {
        return {
          authenticated: true,
        };
      }

      return {
        authenticated: false,
        error: {
          message: "Check failed",
          name: "Token not found",
        },
        logout: true,
        redirectTo: "/login",
      };
    },
    getPermissions: async () => null,
    getIdentity: async () => {
      const user = localStorage.getItem("user");
      if (user) {
        return JSON.parse(user);
      }

      return null;
    },
  };

  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
          <RefineSnackbarProvider>
            <DevtoolsProvider>
              <Refine
                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
                notificationProvider={notificationProvider}
                routerProvider={routerBindings}
                authProvider={authProvider}
                resources={[
                  {
                    name: "overview",
                    list: Overview,
                    meta: { label: "Overview" },
                    icon: <img src={home} alt="Overview Icon" style={{ width: 30, height: 30 }} />,
                  },
                  {
                    name: "client",
                    list: Client,
                    meta: { label: "Client" },
                    icon: <img src={client} alt="Client Icon" style={{ width: 30, height: 30 }} />,
                  },
                  {
                    name: "account",
                    list: Account,
                    meta: { label: "Account" },
                    icon: <img src={account} alt="Account Icon" style={{ width: 30, height: 30 }} />,
                  },
                  {
                    name: "payment",
                    list: Payment,
                    meta: { label: "Payment" },
                    icon: <img src={payment} alt="Payment Icon" style={{ width: 30, height: 30 }} />,
                  },
                  {
                    name: "help",
                    list: Help,
                    meta: { label: "Help" },
                    icon: <img src={help} alt="Help Icon" style={{ width: 25, height: 25 }} />,
                  },
                ]}
              >
                <Box display="flex" sx={{ height: "100vh" }}>
                  <Sider /> {/* Include your custom sider */}
                  <Box
                    component="main"
                    sx={{
                      flexGrow: 1,
                      padding: '0px',
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Header /> {/* Assuming you have a Header component */}
                    <Box sx={{ flexGrow: 1, padding: '20px' }}>
                      <Routes>
                        <Route
                          element={
                            <Authenticated
                              key="authenticated-inner"
                              fallback={<CatchAllNavigate to="/login" />}
                            >
                              <Outlet />
                            </Authenticated>
                          }
                        >
                          <Route
                            index
                            element={<NavigateToResource resource="overview" />}
                          />
                          <Route path="/overview" element={<Overview />} />
                          <Route path="/client" element={<Client />} />
                          <Route path="/account" element={<Account />} />
                          <Route path="/payment" element={<Payment />} />
                          <Route path="/help" element={<Help />} />
                          <Route path="/client/:name" element={<SingleClientPage />} />
                          <Route path="*" element={<ErrorComponent />} />
                        </Route>
                        <Route
                          element={
                            <Authenticated
                              key="authenticated-outer"
                              fallback={<Outlet />}
                            >
                              <NavigateToResource />
                            </Authenticated>
                          }
                        >
                          <Route path="/login" element={<Login />} />
                        </Route>
                      </Routes>
                    </Box>
                  </Box>
                </Box>
                <RefineKbar />
                <UnsavedChangesNotifier />
                <DocumentTitleHandler />
              </Refine>
            </DevtoolsProvider>
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;

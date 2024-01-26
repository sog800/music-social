import { Outlet, Navigate } from "react-router-dom";

export default function Registered() {
  let auth = { token: true };
  return auth.token ? <Outlet /> : <Navigate to="/register" />;
}
